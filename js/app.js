/* ============================================================
   硬件性能天梯榜 — 交互逻辑
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 常量 ---------------- */
  const TIER_LABELS = ['旗舰级', '高端', '中高端', '中端', '入门级', '老旧 / 亮机'];
  const TIER_COLORS = ['var(--tier-flag)', 'var(--tier-high)', 'var(--tier-midhigh)', 'var(--tier-mid)', 'var(--tier-entry)', 'var(--tier-old)'];

  const TIER_DESC = {
    gpu: [
      '顶级梯队 · 4K 极致画质 / 生产力',
      '高性能梯队 · 4K 高刷',
      '中坚梯队 · 2K ~ 4K 高刷',
      '主流梯队 · 1080P ~ 2K',
      '入门梯队 · 1080P 游戏',
      '老旧 / 亮机 · 仅适合轻度使用'
    ],
    cpu: [
      '第一梯队 · 顶级性能',
      '第二梯队 · 高性能',
      '第三梯队 · 主流性能',
      '第四梯队 · 日常够用',
      '第五梯队 · 轻度使用',
      '老旧平台 · 已明显落后'
    ]
  };

  /* 各指标的分档阈值（6 档需 5 个阈值） */
  const THRESHOLDS = {
    raster: [40000, 26000, 18000, 11000, 4000],
    rt:     [18000, 11000, 7000, 4000, 1500],
    mc:     [35000, 25000, 15000, 10000, 5000],
    sc:     [2200, 1900, 1600, 1300, 1000],
    game:   [90, 80, 70, 55, 35]
  };

  /* 发布年代筛选 */
  const ERAS = {
    all:    { min: 0,    max: 9999 },
    '2024': { min: 2024, max: 9999 },
    '2020': { min: 2020, max: 2023 },
    '2016': { min: 2016, max: 2019 },
    '2010': { min: 2010, max: 2015 },
    'old':  { min: 0,    max: 2009 }
  };

  /* 平台维度 */
  const PLATFORMS = [
    { key: 'desktop', label: '桌面端' },
    { key: 'mobile',  label: '移动端' },
    { key: 'all',     label: '全部' }
  ];

  /* 分辨率定位建议（桌面 / 移动分别标定） */
  const RES_TIP = {
    desktop: [
      [40000, '4K 极致'], [30000, '4K 高刷'], [20000, '4K / 2K 高刷'],
      [14000, '2K 高刷'], [9000, '1080P / 2K'], [4000, '1080P 中画质'], [0, '1080P 入门 / 亮机']
    ],
    mobile: [
      [18000, '2K / 4K 高刷'], [12000, '2K 高刷'], [8000, '1080P 高刷'],
      [5000, '1080P 中高画质'], [2500, '1080P 中画质'], [0, '1080P 低画质 / 亮机']
    ]
  };

  /* ---------------- 状态 ---------------- */
  const state = {
    cat: 'gpu',
    platform: 'desktop',
    metric: 'raster',
    brand: 'all',
    era: 'all',
    gpuKind: 'all',    // 显卡类型：all / dgpu / igpu
    q: '',
    sort: 'score',
    view: 'ladder',
    open: null,        // 展开详情的行 id
    picks: []          // 对比选中
  };

  /* ---------------- 工具 ---------------- */
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n) => n.toLocaleString('en-US');
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* 四象限数据源：桌面/移动 × 显卡/处理器（每个象限可含多个补充文件） */
  function sourceOf(cat, platform) {
    if (cat === 'gpu') {
      const d = [].concat(window.GPU_DESKTOP || [], window.GPU_DESKTOP_2 || [], window.GPU_DESKTOP_3 || []);
      const m = [].concat(window.GPU_MOBILE || [], window.GPU_MOBILE_2 || [], window.GPU_MOBILE_3 || []);
      if (platform === 'desktop') return d;
      if (platform === 'mobile')  return m;
      return d.concat(m);
    }
    const d = [].concat(window.CPU_DESKTOP || [], window.CPU_DESKTOP_2 || [], window.CPU_DESKTOP_3 || []);
    const m = [].concat(window.CPU_MOBILE || [], window.CPU_MOBILE_2 || [], window.CPU_MOBILE_3 || [],
                       window.CPU_MOBILE_4 || [], window.CPU_MOBILE_5 || [], window.CPU_MOBILE_6 || []);
    if (platform === 'desktop') return d;
    if (platform === 'mobile')  return m;
    return d.concat(m);
  }

  function dataOf(cat) { return sourceOf(cat || state.cat, state.platform); }

  function metricDef(cat, key) {
    const m = cat === 'gpu' ? window.META.gpuMetrics : window.META.cpuMetrics;
    return m[key] || Object.values(m)[0];
  }
  function metricsOf(cat) { return Object.values(cat === 'gpu' ? window.META.gpuMetrics : window.META.cpuMetrics); }

  function tierIndex(cat, metric, val) {
    const th = THRESHOLDS[metric];
    for (let i = 0; i < th.length; i++) if (val >= th[i]) return i;
    return th.length;
  }

  function resTip(raster, platform) {
    const table = RES_TIP[platform === 'mobile' ? 'mobile' : 'desktop'];
    for (const [min, label] of table) if (raster >= min) return label;
    return '—';
  }

  /* ---------------- 派生数据 ---------------- */
  function currentList() {
    const cat = state.cat, metric = state.metric;
    const raw = dataOf(cat);
    // 平台标记：全部模式下需要区分每条来自哪个平台
    const dset = new Set(window.GPU_DESKTOP || []), mset = new Set(window.GPU_MOBILE || []);
    const cdset = new Set(window.CPU_DESKTOP || []);
    const platOf = (d) => (dset.has(d) || cdset.has(d)) ? 'desktop' : 'mobile';

    const maxVal = Math.max.apply(null, raw.map((d) => d[metric] || 0).concat([1])) || 1;
    return raw.map((d) => {
      const val = d[metric] || 0;
      const noSupport = cat === 'gpu' && metric === 'rt' && !d.rt;
      const platform = platOf(d);
      return Object.assign({}, d, {
        _val: val,
        _pct: (val / maxVal) * 100,
        _platform: platform,
        _tier: noSupport ? 99 : tierIndex(cat, metric, val)
      });
    });
  }

  const yearOf = (d) => parseInt(String(d.release).slice(0, 4), 10);

  function filtered(list) {
    const q = state.q.trim().toLowerCase();
    const era = ERAS[state.era] || ERAS.all;
    const useKind = state.cat === 'gpu' && state.gpuKind !== 'all';
    return list.filter((d) => {
      if (state.brand !== 'all' && d.brand !== state.brand) return false;
      if (useKind && (d.kind || 'dgpu') !== state.gpuKind) return false;
      const y = yearOf(d);
      if (y < era.min || y > era.max) return false;
      if (!q) return true;
      const hay = [d.name, d.brand, d.arch, d.vram, d.socket, d.clk, d.release].filter(Boolean).join(' ').toLowerCase();
      return hay.indexOf(q) > -1;
    });
  }

  function sorted(list) {
    const arr = list.slice();
    const s = state.sort;
    if (s === 'score') arr.sort((a, b) => b._val - a._val || a.name.localeCompare(b.name));
    else if (s === 'new') arr.sort((a, b) => b.release.localeCompare(a.release) || b._val - a._val);
    else if (s === 'old') arr.sort((a, b) => a.release.localeCompare(b.release) || b._val - a._val);
    else if (s === 'name') arr.sort((a, b) => a.name.localeCompare(b.name, 'en'));
    return arr;
  }

  /* ---------------- 渲染：控件 ---------------- */
  function renderTabs() {
    $('#cntGpu').textContent = sourceOf('gpu', state.platform).length;
    $('#cntCpu').textContent = sourceOf('cpu', state.platform).length;
    $('#updateBadge').textContent = '数据版本 ' + window.META.updated;
    document.querySelectorAll('#tabs .tab').forEach((b) => {
      b.classList.toggle('active', b.dataset.cat === state.cat);
    });
  }

  function renderPlatformSeg() {
    $('#platformSeg').innerHTML = PLATFORMS.map((p) =>
      `<button data-platform="${p.key}" class="${state.platform === p.key ? 'active' : ''}">${esc(p.label)}</button>`
    ).join('');
    document.querySelectorAll('#platformSeg button').forEach((el) => {
      el.onclick = () => {
        if (state.platform === el.dataset.platform) return;
        state.platform = el.dataset.platform;
        state.brand = 'all';
        state.open = null;
        renderAll();
      };
    });
  }

  function platLabel(key) {
    const p = PLATFORMS.filter((x) => x.key === (key || state.platform))[0];
    return p ? p.label : '全部';
  }

  function renderBrandChips() {
    const brands = ['all'].concat(
      Array.from(new Set(dataOf(state.cat).map((d) => d.brand)))
        .sort((a, b) => dataOf(state.cat).filter((d) => d.brand === b).length -
                        dataOf(state.cat).filter((d) => d.brand === a).length)
    );
    $('#brandChips').innerHTML = brands.map((b) => {
      const label = b === 'all' ? '全部品牌' : b;
      const n = b === 'all' ? dataOf(state.cat).length : dataOf(state.cat).filter((d) => d.brand === b).length;
      return `<button class="chip ${state.brand === b ? 'active' : ''}" data-brand="${esc(b)}">
        ${b !== 'all' ? '<span class="dot"></span>' : ''}${esc(label)}<span style="opacity:.6">${n}</span>
      </button>`;
    }).join('');
    document.querySelectorAll('#brandChips .chip').forEach((el) => {
      el.onclick = () => { state.brand = el.dataset.brand; renderBrandChips(); render(); };
    });
  }

  function renderMetricSeg() {
    const list = metricsOf(state.cat);
    if (!list.some((m) => m.key === state.metric)) state.metric = list[0].key;
    $('#metricSeg').innerHTML = list.map((m) =>
      `<button data-metric="${m.key}" class="${state.metric === m.key ? 'active' : ''}">${esc(m.label)}</button>`
    ).join('');
    document.querySelectorAll('#metricSeg button').forEach((el) => {
      el.onclick = () => { state.metric = el.dataset.metric; renderMetricSeg(); render(); };
    });
  }

  function renderStats(list) {
    const cat = state.cat;
    const md = metricDef(cat, state.metric);
    const top = list.slice().sort((a, b) => b._val - a._val)[0];
    const all = dataOf(cat);
    const brands = Array.from(new Set(all.map((d) => d.brand)));
    const dist = brands.map((b) => b + ' ' + all.filter((d) => d.brand === b).length).join(' · ');
    const avg = list.length ? Math.round(list.reduce((s, d) => s + d._val, 0) / list.length) : 0;
    const years = all.map(yearOf);
    const span = Math.min.apply(null, years) + ' - ' + Math.max.apply(null, years);

    const filtering = state.brand !== 'all' || state.q || state.era !== 'all' ||
                      (state.cat === 'gpu' && state.gpuKind !== 'all');
    const cards = [
      { k: '收录型号', v: list.length, u: '款',
        m: filtering ? '当前筛选结果 / 共 ' + all.length + ' 款' : platLabel() + ' · ' + window.META.coverage },
      { k: '性能榜首', v: top ? top._val.toLocaleString('en-US') : '—', u: md.unit,
        m: top ? top.name + ' · ' + top.release : '—' },
      { k: '当前指标', v: md.label, u: '', m: md.desc },
      { k: '筛选后均分', v: avg.toLocaleString('en-US'), u: '', m: '跨度 ' + span + ' · ' + dist }
    ];
    $('#stats').innerHTML = cards.map((c) => `
      <div class="stat">
        <div class="k">${esc(c.k)}</div>
        <div class="v">${esc(c.v)}${c.u ? '<small>' + esc(c.u) + '</small>' : ''}</div>
        <div class="m" title="${esc(c.m)}">${esc(c.m)}</div>
      </div>`).join('');
  }

  /* ---------------- 渲染：天梯 ---------------- */
  function rowHTML(d, rank, cat) {
    const md = metricDef(cat, state.metric);
    const pickIdx = state.picks.indexOf(d.id);
    const isOpen = state.open === d.id;
    const noSupport = d._tier === 99;

    const specLine = cat === 'gpu'
      ? `${d.arch} · ${d.vram} · ${yearOf(d)}`
      : `${d.arch} · ${d.cores}C/${d.threads}T · ${yearOf(d)}`;

    const platTag = state.platform === 'all'
      ? `<span class="plattag ${d._platform}">${d._platform === 'mobile' ? '移动' : '桌面'}</span>`
      : '';

    const kindTag = cat === 'gpu' && d.kind === 'igpu'
      ? '<span class="kindtag igpu">核显</span>'
      : '';

    const tags = [
      platTag,
      kindTag,
      `<span class="brandtag ${esc(d.brand)}">${esc(d.brand)}</span>`,
      `<span class="spec">${esc(specLine)}</span>`
    ].join('');

    const barWidth = noSupport ? 0 : clamp(d._pct, 1.5, 100);
    const relPct = Math.round(d._pct);

    return `
    <div class="row ${isOpen ? 'is-open' : ''}" data-id="${esc(d.id)}" style="animation-delay:${Math.min(rank * 12, 320)}ms">
      <div class="rank ${rank <= 3 ? 'top' + rank : ''}">${rank}</div>

      <div class="model">
        <div class="nm" title="${esc(d.name)}">${esc(d.name)}</div>
        <div class="tags">${tags}</div>
      </div>

      <div class="bar-cell">
        <div class="bar-track"><div class="bar-fill b-${esc(d.brand)}" style="width:${barWidth}%"></div></div>
        <div class="bar-meta">
          <span>${noSupport ? '不支持硬件光追' : '相对榜首 ' + relPct + '%'}</span>
          <span>${esc(md.unit)}</span>
        </div>
      </div>

      <div class="score">
        ${noSupport ? '—' : fmt(d._val)}
        <small>${esc(md.label)}</small>
      </div>

      <button class="cmp-btn ${pickIdx > -1 ? 'on' : ''}" data-cmp="${esc(d.id)}" title="${pickIdx > -1 ? '取消对比' : '加入对比'}">
        <svg viewBox="0 0 24 24">${pickIdx > -1
          ? '<path d="M5 12l5 5L20 7"/>'
          : '<path d="M12 5v14M5 12h14"/>'}</svg>
      </button>

      <div class="detail">${detailHTML(d, cat)}</div>
    </div>`;
  }

  function detailHTML(d, cat) {
    const plat = d._platform || (state.platform === 'mobile' ? 'mobile' : 'desktop');
    const items = cat === 'gpu' ? [
      ['平台', plat === 'mobile' ? '移动端（笔记本）' : '桌面端'],
      ['类型', d.kind === 'igpu' ? '集成显卡' : '独立显卡'],
      ['品牌', d.brand], ['架构', d.arch], ['显存', d.vram], ['位宽', d.bus],
      ['发布时间', d.release], ['功耗 TDP', d.tdp + ' W'],
      ['光栅性能', fmt(d.raster) + ' (Time Spy GS)'],
      ['光追性能', d.rt ? fmt(d.rt) + ' (Port Royal)' : '无 Port Royal 成绩'],
      ['分辨率定位', resTip(d.raster, plat)]
    ] : [
      ['平台', plat === 'mobile' ? '移动端（笔记本）' : '桌面端'],
      ['品牌', d.brand], ['架构', d.arch], ['插槽', d.socket], ['核心 / 线程', d.cores + 'C / ' + d.threads + 'T'],
      ['频率', d.clk], ['三级缓存', d.l3], ['发布时间', d.release], ['功耗 TDP', d.tdp + ' W'],
      ['多核性能', fmt(d.mc) + ' (CB R23)'],
      ['单核性能', fmt(d.sc) + ' (CB R23)'],
      ['游戏指数', d.game + ' （9800X3D = 100）']
    ];
    return items.map(([k, v]) =>
      `<div class="d-item"><span class="d-k">${esc(k)}</span><span class="d-v">${esc(v)}</span></div>`
    ).join('') + `<div class="d-desc">${esc(metricDef(cat, state.metric).desc)}</div>`;
  }

  function renderLadder(list) {
    const cat = state.cat;
    if (!list.length) {
      $('#ladder').innerHTML = `<div class="empty"><div class="big">⌕</div><p>没有找到匹配的型号，试试换个关键词或清除筛选条件。</p></div>`;
      return;
    }

    if (state.sort !== 'score') {
      $('#ladder').innerHTML = list.map((d, i) => rowHTML(d, i + 1, cat)).join('');
      bindRows();
      return;
    }

    // 按性能档位分组
    const groups = new Map();
    list.forEach((d) => {
      const t = d._tier;
      if (!groups.has(t)) groups.set(t, []);
      groups.get(t).push(d);
    });

    let html = '', rank = 0;
    Array.from(groups.keys()).sort((a, b) => a - b).forEach((t) => {
      const arr = groups.get(t);
      if (t === 99) {
        html += `<div class="tier-head"><span class="bar" style="background:var(--txt-3)"></span>
          <span class="t">无光追成绩</span><span class="d">无 3DMark Port Royal 原生成绩（含 Apple / 高通平台）</span><span class="ln"></span></div>`;
      } else {
        html += `<div class="tier-head"><span class="bar" style="background:${TIER_COLORS[t]}"></span>
          <span class="t">${TIER_LABELS[t]}</span><span class="d">${TIER_DESC[cat][t]}</span><span class="ln"></span></div>`;
      }
      arr.forEach((d) => { rank++; html += rowHTML(d, rank, cat); });
    });

    $('#ladder').innerHTML = html;
    bindRows();
  }

  function bindRows() {
    document.querySelectorAll('#ladder .row').forEach((row) => {
      row.onclick = (e) => {
        if (e.target.closest('[data-cmp]')) return;
        const id = row.dataset.id;
        state.open = state.open === id ? null : id;
        renderLadder(sorted(filtered(currentList())));
      };
    });
    document.querySelectorAll('#ladder [data-cmp]').forEach((btn) => {
      btn.onclick = (e) => { e.stopPropagation(); togglePick(btn.dataset.cmp); };
    });
  }

  /* ---------------- 渲染：表格 ---------------- */
  function renderTable(list) {
    const cat = state.cat, md = metricDef(cat, state.metric);
    const head = cat === 'gpu'
      ? ['#', '型号', '品牌', '架构', '显存', '位宽', '发布时间', 'TDP', md.label]
      : ['#', '型号', '品牌', '架构', '核心/线程', '频率', '三级缓存', '发布时间', 'TDP', md.label];

    $('#dataTable').querySelector('thead').innerHTML =
      '<tr>' + head.map((h, i) => `<th style="${i === head.length - 1 ? 'text-align:right' : ''}">${esc(h)}</th>`).join('') + '</tr>';

    if (!list.length) {
      $('#dataTable').querySelector('tbody').innerHTML =
        `<tr><td colspan="${head.length}" style="text-align:center;padding:50px;color:var(--txt-3)">没有匹配的型号</td></tr>`;
      return;
    }

    $('#dataTable').querySelector('tbody').innerHTML = list.map((d, i) => {
      const cells = cat === 'gpu'
        ? [d.name, d.brand, d.arch, d.vram, d.bus, d.release, d.tdp + 'W']
        : [d.name, d.brand, d.arch, d.cores + 'C/' + d.threads + 'T', d.clk, d.l3, d.release, d.tdp + 'W'];
      const val = d._val || 0;
      return `<tr>
        <td class="num">${i + 1}</td>
        <td style="font-weight:700">${esc(cells[0])}</td>
        ${cells.slice(1).map((c) => `<td style="color:var(--txt-2)">${esc(c)}</td>`).join('')}
        <td>
          <div style="display:flex;align-items:center;justify-content:flex-end;gap:9px">
            <span class="mini-bar"><i style="width:${clamp(d._pct, 2, 100)}%"></i></span>
            <span class="num" style="min-width:52px;text-align:right">${val ? fmt(val) : '—'}</span>
          </div>
        </td>
      </tr>`;
    }).join('');
  }

  /* ---------------- 对比 ---------------- */
  function togglePick(id) {
    const i = state.picks.indexOf(id);
    if (i > -1) state.picks.splice(i, 1);
    else if (state.picks.length < 4) state.picks.push(id);
    else { flashTray('最多同时对比 4 款型号'); return; }
    renderTray();
    render();
  }

  function flashTray(msg) {
    const tray = $('#tray');
    let tip = tray.querySelector('.flash-tip');
    if (!tip) {
      tip = document.createElement('span');
      tip.className = 'flash-tip';
      tip.style.cssText = 'font-size:12px;font-weight:700;color:#dc2626';
      tray.querySelector('.wrap').insertBefore(tip, $('#clearPicks'));
    }
    tip.textContent = msg;
    clearTimeout(flashTray._t);
    flashTray._t = setTimeout(() => tip.remove(), 2200);
  }

  function findById(id) {
    return [].concat(
      window.GPU_DESKTOP || [], window.GPU_DESKTOP_2 || [], window.GPU_DESKTOP_3 || [],
      window.GPU_MOBILE || [], window.GPU_MOBILE_2 || [], window.GPU_MOBILE_3 || [],
      window.CPU_DESKTOP || [], window.CPU_DESKTOP_2 || [], window.CPU_DESKTOP_3 || [],
      window.CPU_MOBILE || [], window.CPU_MOBILE_2 || [], window.CPU_MOBILE_3 || [],
      window.CPU_MOBILE_4 || [], window.CPU_MOBILE_5 || [], window.CPU_MOBILE_6 || []
    ).filter((d) => d.id === id)[0];
  }

  function renderTray() {
    const tray = $('#tray');
    tray.classList.toggle('show', state.picks.length > 0);
    $('#pickCount').textContent = state.picks.length;
    $('#picks').innerHTML = state.picks.map((id) => {
      const d = findById(id);
      return `<span class="pick">${esc(d ? d.name : id)}<button data-rm="${esc(id)}" title="移除">×</button></span>`;
    }).join('');
    $('#picks').querySelectorAll('[data-rm]').forEach((b) => {
      b.onclick = () => togglePick(b.dataset.rm);
    });
    $('#openCompare').disabled = state.picks.length < 2;
  }

  function openCompare() {
    const items = state.picks.map(findById).filter(Boolean);
    if (items.length < 2) return;
    const cats = Array.from(new Set(items.map((d) => (d.cores !== undefined ? 'cpu' : 'gpu'))));
    const cat = cats[0];
    const dset = new Set(window.GPU_DESKTOP || []);
    const cdset = new Set(window.CPU_DESKTOP || []);
    const platOf = (d) => (dset.has(d) || cdset.has(d)) ? 'desktop' : 'mobile';

    const rows = cat === 'gpu' ? [
      { k: '平台', f: (d) => platOf(d) === 'mobile' ? '移动端' : '桌面端', txt: true },
      { k: '类型', f: (d) => d.kind === 'igpu' ? '集成显卡' : '独立显卡', txt: true },
      { k: '品牌', f: (d) => d.brand, txt: true },
      { k: '架构', f: (d) => d.arch, txt: true },
      { k: '显存', f: (d) => d.vram, txt: true },
      { k: '位宽', f: (d) => d.bus, txt: true },
      { k: '发布时间', f: (d) => d.release, txt: true },
      { k: '功耗 TDP', f: (d) => d.tdp, unit: 'W', lower: true },
      { k: '光栅性能', f: (d) => d.raster, unit: 'Time Spy GS' },
      { k: '光追性能', f: (d) => d.rt, unit: 'Port Royal' },
      { k: '分辨率定位', f: (d) => resTip(d.raster, platOf(d)), txt: true }
    ] : [
      { k: '平台', f: (d) => platOf(d) === 'mobile' ? '移动端' : '桌面端', txt: true },
      { k: '品牌', f: (d) => d.brand, txt: true },
      { k: '架构', f: (d) => d.arch, txt: true },
      { k: '插槽', f: (d) => d.socket, txt: true },
      { k: '核心 / 线程', f: (d) => d.cores + 'C / ' + d.threads + 'T', txt: true },
      { k: '频率', f: (d) => d.clk, txt: true },
      { k: '三级缓存', f: (d) => d.l3, txt: true },
      { k: '发布时间', f: (d) => d.release, txt: true },
      { k: '功耗 TDP', f: (d) => d.tdp, unit: 'W', lower: true },
      { k: '多核性能', f: (d) => d.mc, unit: 'CB R23' },
      { k: '单核性能', f: (d) => d.sc, unit: 'CB R23' },
      { k: '游戏指数', f: (d) => d.game, unit: '9800X3D=100' }
    ];

    let html = `<thead><tr><th style="background:var(--card-2)"></th>${items.map((d) =>
      `<th>${esc(d.name)}<div style="font-size:10.5px;font-weight:600;color:var(--txt-3);margin-top:2px">${esc(d.brand)}</div></th>`).join('')}</tr></thead><tbody>`;

    rows.forEach((r) => {
      const vals = items.map((d) => r.f(d));
      const nums = r.txt ? null : vals.map((v) => (typeof v === 'number' ? v : -1));
      const maxN = nums ? Math.max(...nums) : 0;
      const minN = nums && r.lower ? Math.min(...nums.filter((v) => v > 0)) : 0;

      html += `<tr><th>${esc(r.k)}</th>`;
      items.forEach((d, i) => {
        const v = vals[i];
        if (r.txt) {
          html += `<td style="font-weight:600;color:var(--txt-2)">${esc(v)}</td>`;
        } else if (typeof v !== 'number' || v <= 0) {
          html += `<td style="color:var(--txt-3)">不支持 / —</td>`;
        } else {
          const pct = maxN ? clamp((v / maxN) * 100, 3, 100) : 0;
          const best = r.lower ? v === minN : v === maxN;
          html += `<td>
            <div class="cval ${best ? 'best' : ''}">${fmt(v)} <span style="font-size:10px;font-weight:600;color:var(--txt-3)">${esc(r.unit || '')}</span></div>
            <div class="cbar"><i style="width:${pct}%;background:${best ? '#16a34a' : 'var(--accent)'}"></i></div>
          </td>`;
        }
      });
      html += '</tr>';
    });

    html += '</tbody>';
    $('#cmpTable').innerHTML = html;
    $('#modal').classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $('#modal').classList.remove('show');
    document.body.style.overflow = '';
  }

  /* ---------------- 哈希路由（可分享链接） ---------------- */
  function readHash() {
    const h = location.hash.replace(/^#\/?/, '');
    if (!h) return;
    const p = h.split('/');
    if (p[0] === 'gpu' || p[0] === 'cpu') state.cat = p[0];
    if (p[1] && PLATFORMS.some((x) => x.key === p[1])) state.platform = p[1];
    if (p[2] && metricsOf(state.cat).some((m) => m.key === p[2])) state.metric = p[2];
    if (p[3] === 'table' || p[3] === 'ladder') state.view = p[3];
  }
  function writeHash() {
    const h = '#' + [state.cat, state.platform, state.metric, state.view].join('/');
    if (location.hash !== h) history.replaceState(null, '', h);
  }

  function syncControls() {
    document.querySelectorAll('#viewSeg button').forEach((b) => {
      b.classList.toggle('active', b.dataset.view === state.view);
    });
    $('#sortSelect').value = state.sort;
    // 显卡类型筛选仅在「显卡」分类下有意义
    const ks = $('#kindSelect');
    ks.style.display = state.cat === 'gpu' ? '' : 'none';
    ks.value = state.gpuKind;
  }

  /* ---------------- 主渲染 ---------------- */
  function render() {
    writeHash();
    const list = sorted(filtered(currentList()));
    renderStats(list);
    const isTable = state.view === 'table';
    $('#ladder').style.display = isTable ? 'none' : 'flex';
    $('#tableWrap').style.display = isTable ? 'block' : 'none';
    if (isTable) renderTable(list);
    else renderLadder(list);
  }

  function renderAll() {
    renderTabs();
    renderPlatformSeg();
    renderBrandChips();
    renderMetricSeg();
    syncControls();
    render();
  }

  /* ---------------- 事件绑定 ---------------- */
  function init() {
    readHash();

    document.querySelectorAll('#tabs .tab').forEach((b) => {
      b.onclick = () => {
        if (state.cat === b.dataset.cat) return;
        state.cat = b.dataset.cat;
        state.brand = 'all';
        state.open = null;
        state.metric = metricsOf(state.cat)[0].key;
        renderAll();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    });

    const input = $('#search');
    input.oninput = () => {
      state.q = input.value;
      $('#searchBox').classList.toggle('has-value', !!input.value);
      render();
    };
    $('#searchClear').onclick = () => {
      input.value = ''; state.q = '';
      $('#searchBox').classList.remove('has-value');
      render(); input.focus();
    };

    $('#sortSelect').onchange = (e) => { state.sort = e.target.value; render(); };
    $('#eraSelect').onchange = (e) => { state.era = e.target.value; render(); };
    $('#kindSelect').onchange = (e) => { state.gpuKind = e.target.value; render(); };

    document.querySelectorAll('#viewSeg button').forEach((b) => {
      b.onclick = () => {
        state.view = b.dataset.view;
        document.querySelectorAll('#viewSeg button').forEach((x) => x.classList.toggle('active', x === b));
        render();
      };
    });

    $('#clearPicks').onclick = () => { state.picks = []; renderTray(); render(); };
    $('#openCompare').onclick = openCompare;
    $('#closeModal').onclick = closeModal;
    $('#modal').onclick = (e) => { if (e.target === $('#modal')) closeModal(); };
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    window.addEventListener('hashchange', () => {
      readHash();
      state.brand = 'all';
      state.open = null;
      renderAll();
    });

    renderTray();
    renderAll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* 天梯榜元数据：指标定义与数据版本 */
window.META = {
  updated: '2026-10',
  coverage: '2008 - 2026',
  gpuMetrics: {
    raster: { key: 'raster', label: '光栅性能', unit: 'Time Spy GS', desc: '传统光栅化渲染性能，代表绝大多数游戏的实际帧率表现' },
    rt:     { key: 'rt',     label: '光追性能', unit: 'Port Royal',  desc: '实时光线追踪性能，决定开启光追后的帧率水平（桌面 RTX 20 系 / AMD RX 6000 系起支持）' }
  },
  cpuMetrics: {
    mc:   { key: 'mc',   label: '多核性能', unit: 'CB R23 多核', desc: '渲染、转码、编译等重度多线程任务的性能' },
    sc:   { key: 'sc',   label: '单核性能', unit: 'CB R23 单核', desc: '影响系统响应速度与多数游戏的帧率上限' },
    game: { key: 'game', label: '游戏性能', unit: '相对指数',   desc: '以 Ryzen 7 9800X3D = 100 为基准的 1080P 游戏帧率相对指数' }
  }
};

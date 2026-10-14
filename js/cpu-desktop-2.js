/* 桌面端处理器补充 — 来源：第三方天梯站抓取数据 + 分数换算 */
window.CPU_DESKTOP_2 = [
  /* ===== Intel · Skylake-X / Kaby Lake-X (HEDT · LGA2066) ===== */
  { id:'i9_9940x',  name:'Core i9-9940X',  brand:'Intel', arch:'Skylake-X',    socket:'LGA2066',  cores:14, threads:28, clk:'3.3 / 4.4 GHz',  l3:'19.25MB', release:'2018-11', tdp:165, mc:23000, sc:1180, game:43 },
  { id:'i9_9920x',  name:'Core i9-9920X',  brand:'Intel', arch:'Skylake-X',    socket:'LGA2066',  cores:12, threads:24, clk:'3.5 / 4.4 GHz',  l3:'19.25MB', release:'2018-11', tdp:165, mc:20000, sc:1180, game:43 },
  { id:'i9_9820x',  name:'Core i9-9820X',  brand:'Intel', arch:'Skylake-X',    socket:'LGA2066',  cores:10, threads:20, clk:'3.3 / 4.1 GHz',  l3:'16.5MB',  release:'2018-11', tdp:165, mc:16800, sc:1150, game:42 },
  { id:'i7_9800x',  name:'Core i7-9800X',  brand:'Intel', arch:'Skylake-X',    socket:'LGA2066',  cores:8,  threads:16, clk:'3.8 / 4.4 GHz',  l3:'16.5MB',  release:'2018-11', tdp:165, mc:13800, sc:1180, game:43 },
  { id:'i9_7940x',  name:'Core i9-7940X',  brand:'Intel', arch:'Skylake-X',    socket:'LGA2066',  cores:14, threads:28, clk:'3.1 / 4.3 GHz',  l3:'19.25MB', release:'2017-09', tdp:165, mc:22500, sc:1130, game:41 },
  { id:'i7_7800x',  name:'Core i7-7800X',  brand:'Intel', arch:'Skylake-X',    socket:'LGA2066',  cores:6,  threads:12, clk:'3.5 / 4.0 GHz',  l3:'8.25MB',  release:'2017-06', tdp:140, mc:10500, sc:1130, game:42 },
  { id:'i7_7740x',  name:'Core i7-7740X',  brand:'Intel', arch:'Kaby Lake-X',  socket:'LGA2066',  cores:4,  threads:8,  clk:'4.3 / 4.5 GHz',  l3:'8MB',     release:'2017-06', tdp:112, mc:6800,  sc:1180, game:43 },

  /* ===== Intel · Sandy / Ivy / Haswell-E (HEDT) ===== */
  { id:'i7_5930k',  name:'Core i7-5930K',  brand:'Intel', arch:'Haswell-E',    socket:'LGA2011-3',cores:6,  threads:12, clk:'3.5 / 3.7 GHz',  l3:'15MB',    release:'2014-08', tdp:140, mc:7300,  sc:800,  game:30 },
  { id:'i7_4960x',  name:'Core i7-4960X',  brand:'Intel', arch:'Ivy Bridge-E', socket:'LGA2011-3',cores:6,  threads:12, clk:'3.6 / 4.0 GHz',  l3:'15MB',    release:'2013-06', tdp:130, mc:7000,  sc:830,  game:31 },
  { id:'i7_4930k',  name:'Core i7-4930K',  brand:'Intel', arch:'Ivy Bridge-E', socket:'LGA2011-3',cores:6,  threads:12, clk:'3.4 / 3.9 GHz',  l3:'12MB',    release:'2013-09', tdp:130, mc:6900,  sc:820,  game:30 },
  { id:'i7_4820k',  name:'Core i7-4820K',  brand:'Intel', arch:'Ivy Bridge-E', socket:'LGA2011-3',cores:4,  threads:8,  clk:'3.7 / 3.9 GHz',  l3:'10MB',    release:'2013-09', tdp:130, mc:4700,  sc:830,  game:30 },
  { id:'i7_3970x',  name:'Core i7-3970X',  brand:'Intel', arch:'Sandy Bridge-E',socket:'LGA2011', cores:6,  threads:12, clk:'3.5 / 4.0 GHz',  l3:'15MB',    release:'2012-11', tdp:150, mc:6900,  sc:800,  game:29 },
  { id:'i7_3960x',  name:'Core i7-3960X',  brand:'Intel', arch:'Sandy Bridge-E',socket:'LGA2011', cores:6,  threads:12, clk:'3.3 / 3.9 GHz',  l3:'15MB',    release:'2011-11', tdp:130, mc:6500,  sc:780,  game:28 },
  { id:'i7_3930k',  name:'Core i7-3930K',  brand:'Intel', arch:'Sandy Bridge-E',socket:'LGA2011', cores:6,  threads:12, clk:'3.2 / 3.8 GHz',  l3:'12MB',    release:'2011-11', tdp:130, mc:6200,  sc:760,  game:27 },
  { id:'i7_970',    name:'Core i7-970',    brand:'Intel', arch:'Gulftown',     socket:'LGA1366',  cores:6,  threads:12, clk:'3.20 / 3.46 GHz',l3:'12MB',    release:'2010-07', tdp:130, mc:2650,  sc:570,  game:19 },

  /* ===== Intel · Coffee Lake (8 / 9 代) 补漏 ===== */
  { id:'i7_8086k',  name:'Core i7-8086K',  brand:'Intel', arch:'Coffee Lake',  socket:'LGA1151',  cores:6,  threads:12, clk:'4.0 / 5.0 GHz',  l3:'12MB',    release:'2018-06', tdp:95,  mc:8300,  sc:1280, game:51 },
  { id:'i7_8700',   name:'Core i7-8700',   brand:'Intel', arch:'Coffee Lake',  socket:'LGA1151',  cores:6,  threads:12, clk:'3.2 / 4.6 GHz',  l3:'12MB',    release:'2018-01', tdp:65,  mc:7400,  sc:1180, game:48 },
  { id:'i7_8700b',  name:'Core i7-8700B',  brand:'Intel', arch:'Coffee Lake',  socket:'LGA1151',  cores:6,  threads:12, clk:'3.2 / 4.6 GHz',  l3:'12MB',    release:'2018-04', tdp:65,  mc:7400,  sc:1180, game:48 },
  { id:'i7_9700',   name:'Core i7-9700',   brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:8,  threads:8,  clk:'3.0 / 4.7 GHz',  l3:'12MB',    release:'2019-04', tdp:65,  mc:9700,  sc:1230, game:53 },
  { id:'i7_9700f',  name:'Core i7-9700F',  brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:8,  threads:8,  clk:'3.0 / 4.7 GHz',  l3:'12MB',    release:'2019-04', tdp:65,  mc:9700,  sc:1230, game:53 },
  { id:'i9_9900',   name:'Core i9-9900',   brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:8,  threads:16, clk:'3.1 / 5.0 GHz',  l3:'16MB',    release:'2019-04', tdp:65,  mc:11600, sc:1270, game:56 },
  { id:'i9_9900kf', name:'Core i9-9900KF', brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:8,  threads:16, clk:'3.6 / 5.0 GHz',  l3:'16MB',    release:'2019-01', tdp:95,  mc:12400, sc:1290, game:58 },
  { id:'i9_9900ks', name:'Core i9-9900KS', brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:8,  threads:16, clk:'4.0 / 5.0 GHz',  l3:'16MB',    release:'2019-10', tdp:127, mc:12900, sc:1330, game:59 },
  { id:'i5_8500',   name:'Core i5-8500',   brand:'Intel', arch:'Coffee Lake',  socket:'LGA1151',  cores:6,  threads:6,  clk:'3.0 / 4.1 GHz',  l3:'9MB',     release:'2018-04', tdp:65,  mc:6600,  sc:1100, game:44 },
  { id:'i5_8500t',  name:'Core i5-8500T',  brand:'Intel', arch:'Coffee Lake',  socket:'LGA1151',  cores:6,  threads:6,  clk:'2.1 / 3.5 GHz',  l3:'9MB',     release:'2018-04', tdp:35,  mc:4600,  sc:950,  game:38 },
  { id:'i5_8600',   name:'Core i5-8600',   brand:'Intel', arch:'Coffee Lake',  socket:'LGA1151',  cores:6,  threads:6,  clk:'3.1 / 4.3 GHz',  l3:'9MB',     release:'2018-04', tdp:65,  mc:6800,  sc:1150, game:46 },
  { id:'i5_9400',   name:'Core i5-9400',   brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:6,  threads:6,  clk:'2.9 / 4.1 GHz',  l3:'9MB',     release:'2019-01', tdp:65,  mc:6600,  sc:1120, game:45 },
  { id:'i5_9500',   name:'Core i5-9500',   brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:6,  threads:6,  clk:'3.0 / 4.4 GHz',  l3:'9MB',     release:'2019-04', tdp:65,  mc:6800,  sc:1150, game:46 },
  { id:'i5_9600',   name:'Core i5-9600',   brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',  cores:6,  threads:6,  clk:'3.1 / 4.6 GHz',  l3:'9MB',     release:'2019-04', tdp:65,  mc:6900,  sc:1150, game:47 },

  /* ===== Intel · Comet Lake (10 代) 补漏 ===== */
  { id:'i5_10400',  name:'Core i5-10400',  brand:'Intel', arch:'Comet Lake',   socket:'LGA1200',  cores:6,  threads:12, clk:'2.9 / 4.3 GHz',  l3:'12MB',    release:'2020-05', tdp:65,  mc:8200,  sc:1150, game:50 },
  { id:'i5_10500',  name:'Core i5-10500',  brand:'Intel', arch:'Comet Lake',   socket:'LGA1200',  cores:6,  threads:12, clk:'3.1 / 4.5 GHz',  l3:'12MB',    release:'2020-05', tdp:65,  mc:8500,  sc:1180, game:51 },
  { id:'i5_10600',  name:'Core i5-10600',  brand:'Intel', arch:'Comet Lake',   socket:'LGA1200',  cores:6,  threads:12, clk:'3.3 / 4.8 GHz',  l3:'12MB',    release:'2020-05', tdp:65,  mc:8900,  sc:1220, game:53 },
  { id:'i5_10600k', name:'Core i5-10600K', brand:'Intel', arch:'Comet Lake',   socket:'LGA1200',  cores:6,  threads:12, clk:'4.1 / 4.8 GHz',  l3:'12MB',    release:'2020-05', tdp:125, mc:10100, sc:1300, game:56 },
  { id:'i7_10700',  name:'Core i7-10700',  brand:'Intel', arch:'Comet Lake',   socket:'LGA1200',  cores:8,  threads:16, clk:'2.9 / 4.8 GHz',  l3:'16MB',    release:'2020-05', tdp:65,  mc:11500, sc:1280, game:57 },
  { id:'i7_10700f', name:'Core i7-10700F', brand:'Intel', arch:'Comet Lake',   socket:'LGA1200',  cores:8,  threads:16, clk:'2.9 / 4.8 GHz',  l3:'16MB',    release:'2020-05', tdp:65,  mc:11500, sc:1280, game:57 },

  /* ===== Intel · Rocket Lake (11 代) 补漏 ===== */
  { id:'i7_11700',   name:'Core i7-11700',   brand:'Intel', arch:'Rocket Lake', socket:'LGA1200', cores:8,  threads:16, clk:'2.5 / 4.9 GHz',  l3:'16MB',    release:'2021-03', tdp:65,  mc:13700, sc:1580, game:68 },
  { id:'i7_11700f',  name:'Core i7-11700F',  brand:'Intel', arch:'Rocket Lake', socket:'LGA1200', cores:8,  threads:16, clk:'2.5 / 4.9 GHz',  l3:'16MB',    release:'2021-03', tdp:65,  mc:13700, sc:1580, game:68 },
  { id:'i9_11900kf', name:'Core i9-11900KF', brand:'Intel', arch:'Rocket Lake', socket:'LGA1200', cores:8,  threads:16, clk:'3.5 / 5.3 GHz',  l3:'16MB',    release:'2021-03', tdp:125, mc:16000, sc:1650, game:72 },
  { id:'i5_11500',   name:'Core i5-11500',   brand:'Intel', arch:'Rocket Lake', socket:'LGA1200', cores:6,  threads:12, clk:'2.7 / 4.6 GHz',  l3:'12MB',    release:'2021-03', tdp:65,  mc:11300, sc:1520, game:63 },
  { id:'i5_11600k',  name:'Core i5-11600K',  brand:'Intel', arch:'Rocket Lake', socket:'LGA1200', cores:6,  threads:12, clk:'3.9 / 4.9 GHz',  l3:'12MB',    release:'2021-03', tdp:125, mc:12300, sc:1620, game:67 },

  /* ===== Intel · Alder Lake (12 代) 补漏 ===== */
  { id:'i5_12400',   name:'Core i5-12400',   brand:'Intel', arch:'Alder Lake',  socket:'LGA1700', cores:6,  threads:12, clk:'2.5 / 4.4 GHz',  l3:'18MB',    release:'2022-01', tdp:65,  mc:12400, sc:1700, game:68 },
  { id:'i5_12500',   name:'Core i5-12500',   brand:'Intel', arch:'Alder Lake',  socket:'LGA1700', cores:6,  threads:12, clk:'3.0 / 4.6 GHz',  l3:'18MB',    release:'2022-01', tdp:65,  mc:13200, sc:1750, game:69 },
  { id:'i5_12600',   name:'Core i5-12600',   brand:'Intel', arch:'Alder Lake',  socket:'LGA1700', cores:6,  threads:12, clk:'3.3 / 4.8 GHz',  l3:'18MB',    release:'2022-01', tdp:65,  mc:13800, sc:1830, game:72 },
  { id:'i5_12600kf', name:'Core i5-12600KF', brand:'Intel', arch:'Alder Lake',  socket:'LGA1700', cores:10, threads:16, clk:'3.7 / 4.9 GHz',  l3:'20MB',    release:'2021-11', tdp:125, mc:17200, sc:1840, game:75 },
  { id:'i7_12700',   name:'Core i7-12700',   brand:'Intel', arch:'Alder Lake',  socket:'LGA1700', cores:12, threads:20, clk:'2.1 / 4.9 GHz',  l3:'25MB',    release:'2022-01', tdp:65,  mc:20800, sc:1880, game:76 },
  { id:'i7_12700f',  name:'Core i7-12700F',  brand:'Intel', arch:'Alder Lake',  socket:'LGA1700', cores:12, threads:20, clk:'2.1 / 4.9 GHz',  l3:'25MB',    release:'2022-01', tdp:65,  mc:20800, sc:1880, game:76 },

  /* ===== Intel · Raptor Lake (13 / 14 代) 补漏 ===== */
  { id:'i5_13400',   name:'Core i5-13400',   brand:'Intel', arch:'Raptor Lake',  socket:'LGA1700', cores:10, threads:16, clk:'2.5 / 4.6 GHz',  l3:'20MB',    release:'2023-01', tdp:65,  mc:16100, sc:1800, game:70 },
  { id:'i5_13500',   name:'Core i5-13500',   brand:'Intel', arch:'Raptor Lake',  socket:'LGA1700', cores:14, threads:20, clk:'2.5 / 4.8 GHz',  l3:'24MB',    release:'2023-01', tdp:65,  mc:19500, sc:1850, game:74 },
  { id:'i5_13600',   name:'Core i5-13600',   brand:'Intel', arch:'Raptor Lake',  socket:'LGA1700', cores:14, threads:20, clk:'2.7 / 5.0 GHz',  l3:'24MB',    release:'2023-01', tdp:65,  mc:22000, sc:1950, game:78 },
  { id:'i5_13600kf', name:'Core i5-13600KF', brand:'Intel', arch:'Raptor Lake',  socket:'LGA1700', cores:14, threads:20, clk:'3.5 / 5.1 GHz',  l3:'24MB',    release:'2022-10', tdp:125, mc:23900, sc:1990, game:82 },
  { id:'i7_13700',   name:'Core i7-13700',   brand:'Intel', arch:'Raptor Lake',  socket:'LGA1700', cores:16, threads:24, clk:'2.1 / 5.2 GHz',  l3:'30MB',    release:'2023-01', tdp:65,  mc:27500, sc:2020, game:83 },
  { id:'i7_13700f',  name:'Core i7-13700F',  brand:'Intel', arch:'Raptor Lake',  socket:'LGA1700', cores:16, threads:24, clk:'2.1 / 5.2 GHz',  l3:'30MB',    release:'2023-01', tdp:65,  mc:27500, sc:2020, game:83 },
  { id:'i5_14600',   name:'Core i5-14600',   brand:'Intel', arch:'Raptor Lake-R',socket:'LGA1700', cores:14, threads:20, clk:'2.7 / 5.2 GHz',  l3:'24MB',    release:'2024-01', tdp:65,  mc:22300, sc:2000, game:79 },
  { id:'i7_14700',   name:'Core i7-14700',   brand:'Intel', arch:'Raptor Lake-R',socket:'LGA1700', cores:20, threads:28, clk:'2.1 / 5.4 GHz',  l3:'33MB',    release:'2024-01', tdp:65,  mc:31500, sc:2150, game:85 },
  { id:'i7_14700f',  name:'Core i7-14700F',  brand:'Intel', arch:'Raptor Lake-R',socket:'LGA1700', cores:20, threads:28, clk:'2.1 / 5.4 GHz',  l3:'33MB',    release:'2024-01', tdp:65,  mc:31500, sc:2150, game:85 },

  /* ===== Intel · 酷睿 Ultra 补漏 (Arrow Lake) ===== */
  { id:'ultra5_245kf',name:'Core Ultra 5 245KF',brand:'Intel',arch:'Arrow Lake', socket:'LGA1851', cores:14, threads:14, clk:'4.2 / 5.2 GHz',  l3:'24MB',    release:'2024-10', tdp:125, mc:25100, sc:2210, game:80 },
  { id:'ultra3_205',   name:'Core Ultra 3 205',  brand:'Intel',arch:'Arrow Lake', socket:'LGA1851', cores:8,  threads:8,  clk:'3.8 / 4.9 GHz',  l3:'15MB',    release:'2025-01', tdp:65,  mc:14200, sc:1950, game:66 },

  /* ===== Intel · 入门线 (Pentium / Celeron) ===== */
  { id:'pentium_g4600', name:'Pentium G4600',      brand:'Intel', arch:'Kaby Lake',  socket:'LGA1151', cores:2, threads:4, clk:'3.6 GHz', l3:'3MB', release:'2017-01', tdp:51, mc:2600, sc:900,  game:26 },
  { id:'pentium_g5500', name:'Pentium Gold G5500', brand:'Intel', arch:'Coffee Lake',socket:'LGA1151', cores:2, threads:4, clk:'3.8 GHz', l3:'4MB', release:'2018-04', tdp:54, mc:2900, sc:950,  game:28 },
  { id:'pentium_g5600', name:'Pentium Gold G5600', brand:'Intel', arch:'Coffee Lake',socket:'LGA1151', cores:2, threads:4, clk:'3.9 GHz', l3:'4MB', release:'2018-04', tdp:54, mc:2950, sc:960,  game:28 },
  { id:'pentium_g6500', name:'Pentium Gold G6500', brand:'Intel', arch:'Comet Lake', socket:'LGA1200', cores:2, threads:4, clk:'4.1 GHz', l3:'4MB', release:'2020-05', tdp:58, mc:3000, sc:1000, game:30 },
  { id:'pentium_g6600', name:'Pentium Gold G6600', brand:'Intel', arch:'Comet Lake', socket:'LGA1200', cores:2, threads:4, clk:'4.2 GHz', l3:'4MB', release:'2020-05', tdp:58, mc:3050, sc:1010, game:30 },
  { id:'pentium_g7400t',name:'Pentium Gold G7400T',brand:'Intel', arch:'Alder Lake', socket:'LGA1700', cores:2, threads:4, clk:'2.5 GHz', l3:'6MB', release:'2022-01', tdp:35, mc:2500, sc:1100, game:32 },
  { id:'celeron_g3930', name:'Celeron G3930',      brand:'Intel', arch:'Kaby Lake',  socket:'LGA1151', cores:2, threads:2, clk:'2.9 GHz', l3:'2MB', release:'2017-01', tdp:51, mc:1450, sc:820,  game:17 },
  { id:'celeron_g4930', name:'Celeron G4930',      brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151',cores:2, threads:2, clk:'3.2 GHz', l3:'2MB', release:'2019-04', tdp:54, mc:1650, sc:870,  game:19 },
  { id:'celeron_g5925', name:'Celeron G5925',      brand:'Intel', arch:'Comet Lake', socket:'LGA1200', cores:2, threads:2, clk:'3.6 GHz', l3:'4MB', release:'2020-05', tdp:58, mc:1850, sc:950,  game:20 },
  { id:'celeron_g6900', name:'Celeron G6900',      brand:'Intel', arch:'Alder Lake', socket:'LGA1700', cores:2, threads:2, clk:'3.4 GHz', l3:'4MB', release:'2022-01', tdp:46, mc:2350, sc:1230, game:30 },

  /* ===== Intel · 入门线 (Core i3) ===== */
  { id:'i3_9100',   name:'Core i3-9100',   brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151', cores:4, threads:4, clk:'3.6 / 4.2 GHz', l3:'6MB',  release:'2019-04', tdp:65, mc:4700, sc:1100, game:38 },
  { id:'i3_9300',   name:'Core i3-9300',   brand:'Intel', arch:'Coffee Lake-R',socket:'LGA1151', cores:4, threads:4, clk:'3.7 / 4.3 GHz', l3:'8MB',  release:'2019-04', tdp:62, mc:4900, sc:1120, game:39 },
  { id:'i3_10100',  name:'Core i3-10100',  brand:'Intel', arch:'Comet Lake',   socket:'LGA1200', cores:4, threads:8, clk:'3.6 / 4.3 GHz', l3:'6MB',  release:'2020-05', tdp:65, mc:5600, sc:1100, game:42 },
  { id:'i3_10105f', name:'Core i3-10105F', brand:'Intel', arch:'Comet Lake',   socket:'LGA1200', cores:4, threads:8, clk:'3.7 / 4.4 GHz', l3:'6MB',  release:'2021-03', tdp:65, mc:5800, sc:1130, game:43 },
  { id:'i3_10300',  name:'Core i3-10300',  brand:'Intel', arch:'Comet Lake',   socket:'LGA1200', cores:4, threads:8, clk:'3.7 / 4.4 GHz', l3:'8MB',  release:'2020-05', tdp:65, mc:5900, sc:1140, game:44 },
  { id:'i3_11100',  name:'Core i3-11100',  brand:'Intel', arch:'Rocket Lake',  socket:'LGA1200', cores:4, threads:8, clk:'3.7 / 4.5 GHz', l3:'12MB', release:'2021-03', tdp:65, mc:6900, sc:1400, game:50 },
  { id:'i3_12300',  name:'Core i3-12300',  brand:'Intel', arch:'Alder Lake',   socket:'LGA1700', cores:4, threads:8, clk:'3.5 / 4.4 GHz', l3:'12MB', release:'2022-01', tdp:60, mc:8800, sc:1700, game:62 },
  { id:'i3_13100f', name:'Core i3-13100F', brand:'Intel', arch:'Raptor Lake',  socket:'LGA1700', cores:4, threads:8, clk:'3.4 / 4.5 GHz', l3:'12MB', release:'2023-01', tdp:58, mc:8900, sc:1700, game:63 },
  { id:'i3_14100f', name:'Core i3-14100F', brand:'Intel', arch:'Raptor Lake-R',socket:'LGA1700', cores:4, threads:8, clk:'3.5 / 4.7 GHz', l3:'12MB', release:'2024-01', tdp:58, mc:9100, sc:1750, game:64 },

  /* ===== AMD · Threadripper (HEDT · Zen / Zen+ / Zen 4 WX) ===== */
  { id:'tr_1900x',   name:'Threadripper 1900X',        brand:'AMD', arch:'Zen',   socket:'sTR4', cores:8,  threads:16, clk:'3.8 / 4.0 GHz', l3:'16MB',  release:'2017-08', tdp:180, mc:16000,  sc:980,  game:40 },
  { id:'tr_1920x',   name:'Threadripper 1920X',        brand:'AMD', arch:'Zen',   socket:'sTR4', cores:12, threads:24, clk:'3.5 / 4.0 GHz', l3:'32MB',  release:'2017-08', tdp:180, mc:19500,  sc:980,  game:40 },
  { id:'tr_2920x',   name:'Threadripper 2920X',        brand:'AMD', arch:'Zen+',  socket:'sTR4', cores:12, threads:24, clk:'3.5 / 4.3 GHz', l3:'32MB',  release:'2018-10', tdp:180, mc:21000,  sc:1100, game:42 },
  { id:'tr_2970wx',  name:'Threadripper 2970WX',       brand:'AMD', arch:'Zen+',  socket:'sTR4', cores:24, threads:48, clk:'3.0 / 4.2 GHz', l3:'64MB',  release:'2018-10', tdp:250, mc:31000,  sc:1100, game:42 },
  { id:'tr_2990wx',  name:'Threadripper 2990WX',       brand:'AMD', arch:'Zen+',  socket:'sTR4', cores:32, threads:64, clk:'3.0 / 4.2 GHz', l3:'64MB',  release:'2018-08', tdp:250, mc:40000,  sc:1100, game:42 },
  { id:'tr_7965wx',  name:'Threadripper PRO 7965WX',   brand:'AMD', arch:'Zen 4', socket:'sTR5', cores:24, threads:48, clk:'4.2 / 5.3 GHz', l3:'128MB', release:'2023-10', tdp:350, mc:57000,  sc:1950, game:68 },
  { id:'tr_7975wx',  name:'Threadripper PRO 7975WX',   brand:'AMD', arch:'Zen 4', socket:'sTR5', cores:32, threads:64, clk:'4.0 / 5.3 GHz', l3:'128MB', release:'2023-10', tdp:350, mc:73000,  sc:1950, game:68 },
  { id:'tr_7985wx',  name:'Threadripper PRO 7985WX',   brand:'AMD', arch:'Zen 4', socket:'sTR5', cores:64, threads:128,clk:'3.2 / 5.1 GHz', l3:'256MB', release:'2023-10', tdp:350, mc:130000, sc:1900, game:65 },

  /* ===== AMD · Ryzen PRO 商用线 ===== */
  { id:'r5_pro_3600', name:'Ryzen 5 PRO 3600', brand:'AMD', arch:'Zen 2', socket:'AM4', cores:6, threads:12, clk:'3.6 / 4.2 GHz', l3:'32MB', release:'2019-09', tdp:65,  mc:9500,  sc:1250, game:48 },
  { id:'r7_pro_2700x',name:'Ryzen 7 PRO 2700X',brand:'AMD', arch:'Zen+',  socket:'AM4', cores:8, threads:16, clk:'3.7 / 4.3 GHz', l3:'16MB', release:'2018-09', tdp:105, mc:17000, sc:1120, game:52 },
  { id:'r7_pro_1700x',name:'Ryzen 7 PRO 1700X',brand:'AMD', arch:'Zen',   socket:'AM4', cores:8, threads:16, clk:'3.4 / 3.8 GHz', l3:'16MB', release:'2017-06', tdp:95,  mc:13500, sc:980,  game:44 },
  { id:'r7_pro_1700', name:'Ryzen 7 PRO 1700', brand:'AMD', arch:'Zen',   socket:'AM4', cores:8, threads:16, clk:'3.0 / 3.7 GHz', l3:'16MB', release:'2017-06', tdp:65,  mc:13000, sc:950,  game:43 },
  { id:'r5_pro_2600', name:'Ryzen 5 PRO 2600', brand:'AMD', arch:'Zen+',  socket:'AM4', cores:6, threads:12, clk:'3.4 / 3.9 GHz', l3:'16MB', release:'2018-09', tdp:65,  mc:12500, sc:1050, game:48 },

  /* ===== AMD · 老平台补漏 (Kaveri) ===== */
  { id:'a10_7870k', name:'A10-7870K', brand:'AMD', arch:'Kaveri APU', socket:'FM2+', cores:4, threads:4, clk:'3.9 / 4.1 GHz', l3:'4MB', release:'2015-05', tdp:95, mc:1900, sc:410, game:15 }
];

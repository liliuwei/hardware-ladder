/* 移动端处理器 — 多核/单核 = Cinebench R23，游戏 = 以桌面 9800X3D = 100 的相对指数 */
window.CPU_MOBILE = [
  /* ===== Intel · Arrow Lake-HX (酷睿 Ultra 200HX) ===== */
  { id:'ultra9_285hx',  name:'Core Ultra 9 285HX', brand:'Intel', arch:'Arrow Lake-HX',  socket:'BGA2114', cores:24, threads:24, clk:'2.8 / 5.5 GHz',  l3:'36MB', release:'2025-01', tdp:55, mc:38000, sc:2250, game:80 },
  { id:'ultra9_275hx',  name:'Core Ultra 9 275HX', brand:'Intel', arch:'Arrow Lake-HX',  socket:'BGA2114', cores:24, threads:24, clk:'2.7 / 5.4 GHz',  l3:'36MB', release:'2025-01', tdp:55, mc:36500, sc:2200, game:79 },
  { id:'ultra7_265hx',  name:'Core Ultra 7 265HX', brand:'Intel', arch:'Arrow Lake-HX',  socket:'BGA2114', cores:20, threads:20, clk:'2.6 / 5.3 GHz',  l3:'30MB', release:'2025-01', tdp:55, mc:28000, sc:2180, game:77 },
  { id:'ultra5_245hx',  name:'Core Ultra 5 245HX', brand:'Intel', arch:'Arrow Lake-HX',  socket:'BGA2114', cores:14, threads:14, clk:'2.4 / 5.1 GHz',  l3:'24MB', release:'2025-01', tdp:55, mc:24000, sc:2100, game:73 },

  /* ===== Intel · Arrow Lake-H (酷睿 Ultra 200H) ===== */
  { id:'ultra9_285h',   name:'Core Ultra 9 285H',  brand:'Intel', arch:'Arrow Lake-H',   socket:'BGA2049', cores:16, threads:16, clk:'2.9 / 5.4 GHz',  l3:'24MB', release:'2025-01', tdp:45, mc:19500, sc:2180, game:72 },
  { id:'ultra7_265h',   name:'Core Ultra 7 265H',  brand:'Intel', arch:'Arrow Lake-H',   socket:'BGA2049', cores:16, threads:16, clk:'2.8 / 5.3 GHz',  l3:'24MB', release:'2025-01', tdp:45, mc:19000, sc:2150, game:71 },

  /* ===== Intel · Lunar Lake (酷睿 Ultra 200V) ===== */
  { id:'ultra9_288v',   name:'Core Ultra 9 288V',  brand:'Intel', arch:'Lunar Lake',     socket:'BGA2833', cores:8,  threads:8,  clk:'2.2 / 5.1 GHz',  l3:'12MB', release:'2024-09', tdp:30, mc:12000, sc:2000, game:56 },
  { id:'ultra7_268v',   name:'Core Ultra 7 268V',  brand:'Intel', arch:'Lunar Lake',     socket:'BGA2833', cores:8,  threads:8,  clk:'2.2 / 5.0 GHz',  l3:'12MB', release:'2024-09', tdp:17, mc:11000, sc:1950, game:54 },
  { id:'ultra7_258v',   name:'Core Ultra 7 258V',  brand:'Intel', arch:'Lunar Lake',     socket:'BGA2833', cores:8,  threads:8,  clk:'2.2 / 4.8 GHz',  l3:'12MB', release:'2024-09', tdp:17, mc:10500, sc:1900, game:52 },

  /* ===== Intel · Meteor Lake (酷睿 Ultra 100) ===== */
  { id:'ultra9_185h',   name:'Core Ultra 9 185H',  brand:'Intel', arch:'Meteor Lake',    socket:'BGA2049', cores:16, threads:22, clk:'2.3 / 5.1 GHz',  l3:'24MB', release:'2023-12', tdp:45, mc:19000, sc:1800, game:66 },
  { id:'ultra7_155h',   name:'Core Ultra 7 155H',  brand:'Intel', arch:'Meteor Lake',    socket:'BGA2049', cores:16, threads:22, clk:'1.4 / 4.8 GHz',  l3:'24MB', release:'2023-12', tdp:45, mc:17000, sc:1750, game:64 },
  { id:'ultra5_125h',   name:'Core Ultra 5 125H',  brand:'Intel', arch:'Meteor Lake',    socket:'BGA2049', cores:14, threads:18, clk:'1.2 / 4.5 GHz',  l3:'18MB', release:'2023-12', tdp:45, mc:14000, sc:1680, game:60 },
  { id:'ultra7_165u',   name:'Core Ultra 7 165U',  brand:'Intel', arch:'Meteor Lake',    socket:'BGA2049', cores:12, threads:14, clk:'1.7 / 4.9 GHz',  l3:'12MB', release:'2023-12', tdp:15, mc:9500,  sc:1650, game:50 },

  /* ===== Intel · Raptor Lake-HX (13 / 14 代) ===== */
  { id:'i9_14900hx',    name:'Core i9-14900HX',    brand:'Intel', arch:'Raptor Lake-HX', socket:'BGA1964', cores:24, threads:32, clk:'2.2 / 5.8 GHz',  l3:'36MB', release:'2024-01', tdp:55, mc:30000, sc:2150, game:78 },
  { id:'i9_13980hx',    name:'Core i9-13980HX',    brand:'Intel', arch:'Raptor Lake-HX', socket:'BGA1964', cores:24, threads:32, clk:'2.2 / 5.6 GHz',  l3:'36MB', release:'2023-01', tdp:55, mc:29000, sc:2050, game:75 },
  { id:'i9_13900hx',    name:'Core i9-13900HX',    brand:'Intel', arch:'Raptor Lake-HX', socket:'BGA1964', cores:24, threads:32, clk:'2.2 / 5.4 GHz',  l3:'36MB', release:'2023-01', tdp:55, mc:27500, sc:2020, game:74 },
  { id:'i7_14700hx',    name:'Core i7-14700HX',    brand:'Intel', arch:'Raptor Lake-HX', socket:'BGA1964', cores:20, threads:28, clk:'2.1 / 5.5 GHz',  l3:'33MB', release:'2024-01', tdp:55, mc:25000, sc:2050, game:76 },
  { id:'i7_13650hx',    name:'Core i7-13650HX',    brand:'Intel', arch:'Raptor Lake-HX', socket:'BGA1964', cores:14, threads:20, clk:'2.6 / 4.9 GHz',  l3:'24MB', release:'2023-01', tdp:55, mc:21000, sc:1900, game:72 },

  /* ===== Intel · Raptor Lake-H / P (13 / 14 代) ===== */
  { id:'i7_13700h',     name:'Core i7-13700H',     brand:'Intel', arch:'Raptor Lake-H',  socket:'BGA1744', cores:14, threads:20, clk:'2.4 / 5.0 GHz',  l3:'24MB', release:'2023-01', tdp:45, mc:19000, sc:1900, game:72 },
  { id:'i7_13620h',     name:'Core i7-13620H',     brand:'Intel', arch:'Raptor Lake-H',  socket:'BGA1744', cores:10, threads:16, clk:'2.4 / 4.9 GHz',  l3:'24MB', release:'2023-01', tdp:45, mc:17000, sc:1880, game:70 },
  { id:'i5_13500h',     name:'Core i5-13500H',     brand:'Intel', arch:'Raptor Lake-H',  socket:'BGA1744', cores:12, threads:16, clk:'2.6 / 4.7 GHz',  l3:'18MB', release:'2023-01', tdp:45, mc:16000, sc:1800, game:68 },
  { id:'i7_1360p',      name:'Core i7-1360P',      brand:'Intel', arch:'Raptor Lake-P',  socket:'BGA1744', cores:12, threads:16, clk:'2.2 / 5.0 GHz',  l3:'18MB', release:'2023-01', tdp:28, mc:14500, sc:1850, game:64 },

  /* ===== Intel · Alder Lake-HX (12 代) ===== */
  { id:'i9_12900hx',    name:'Core i9-12900HX',    brand:'Intel', arch:'Alder Lake-HX',  socket:'BGA1964', cores:16, threads:24, clk:'2.3 / 5.0 GHz',  l3:'30MB', release:'2022-05', tdp:55, mc:21000, sc:1850, game:72 },

  /* ===== Intel · Alder Lake-H / P / U (12 代) ===== */
  { id:'i9_12900h',     name:'Core i9-12900H',     brand:'Intel', arch:'Alder Lake-H',   socket:'BGA1744', cores:14, threads:20, clk:'2.5 / 5.0 GHz',  l3:'24MB', release:'2022-01', tdp:45, mc:18500, sc:1820, game:70 },
  { id:'i7_12700h',     name:'Core i7-12700H',     brand:'Intel', arch:'Alder Lake-H',   socket:'BGA1744', cores:14, threads:20, clk:'2.3 / 4.7 GHz',  l3:'24MB', release:'2022-01', tdp:45, mc:18000, sc:1750, game:70 },
  { id:'i7_12650h',     name:'Core i7-12650H',     brand:'Intel', arch:'Alder Lake-H',   socket:'BGA1744', cores:10, threads:16, clk:'2.3 / 4.7 GHz',  l3:'24MB', release:'2022-01', tdp:45, mc:15500, sc:1730, game:67 },
  { id:'i5_12500h',     name:'Core i5-12500H',     brand:'Intel', arch:'Alder Lake-H',   socket:'BGA1744', cores:12, threads:16, clk:'2.5 / 4.5 GHz',  l3:'18MB', release:'2022-01', tdp:45, mc:14500, sc:1700, game:64 },
  { id:'i5_12450h',     name:'Core i5-12450H',     brand:'Intel', arch:'Alder Lake-H',   socket:'BGA1744', cores:8,  threads:12, clk:'2.0 / 4.4 GHz',  l3:'12MB', release:'2022-01', tdp:45, mc:12000, sc:1650, game:60 },
  { id:'i7_1280p',      name:'Core i7-1280P',      brand:'Intel', arch:'Alder Lake-P',   socket:'BGA1744', cores:14, threads:20, clk:'1.8 / 4.8 GHz',  l3:'24MB', release:'2022-01', tdp:28, mc:14000, sc:1750, game:62 },
  { id:'i5_1235u',      name:'Core i5-1235U',      brand:'Intel', arch:'Alder Lake-U',   socket:'BGA1744', cores:10, threads:12, clk:'1.3 / 4.4 GHz',  l3:'12MB', release:'2022-01', tdp:15, mc:7000,  sc:1550, game:42 },

  /* ===== Intel · Tiger Lake-H / U (11 代) ===== */
  { id:'i9_11980hk',    name:'Core i9-11980HK',    brand:'Intel', arch:'Tiger Lake-H',   socket:'BGA1787', cores:8,  threads:16, clk:'2.6 / 5.0 GHz',  l3:'24MB', release:'2021-05', tdp:45, mc:14500, sc:1550, game:63 },
  { id:'i7_11800h',     name:'Core i7-11800H',     brand:'Intel', arch:'Tiger Lake-H',   socket:'BGA1787', cores:8,  threads:16, clk:'2.3 / 4.6 GHz',  l3:'24MB', release:'2021-05', tdp:45, mc:14000, sc:1500, game:60 },
  { id:'i5_11400h',     name:'Core i5-11400H',     brand:'Intel', arch:'Tiger Lake-H',   socket:'BGA1787', cores:6,  threads:12, clk:'2.7 / 4.5 GHz',  l3:'12MB', release:'2021-05', tdp:45, mc:10500, sc:1450, game:57 },
  { id:'i7_1165g7',     name:'Core i7-1165G7',     brand:'Intel', arch:'Tiger Lake-U',   socket:'BGA1449', cores:4,  threads:8,  clk:'2.8 / 4.7 GHz',  l3:'12MB', release:'2020-09', tdp:15, mc:5800,  sc:1450, game:55 },
  { id:'i7_1185g7',     name:'Core i7-1185G7',     brand:'Intel', arch:'Tiger Lake-U',   socket:'BGA1449', cores:4,  threads:8,  clk:'3.0 / 4.8 GHz',  l3:'12MB', release:'2020-09', tdp:15, mc:6000,  sc:1480, game:56 },
  { id:'i5_1135g7',     name:'Core i5-1135G7',     brand:'Intel', arch:'Tiger Lake-U',   socket:'BGA1449', cores:4,  threads:8,  clk:'2.4 / 4.2 GHz',  l3:'8MB',  release:'2020-09', tdp:15, mc:5200,  sc:1380, game:52 },

  /* ===== Intel · Comet Lake-H / U · Ice Lake-U (10 代) ===== */
  { id:'i9_10980hk',    name:'Core i9-10980HK',    brand:'Intel', arch:'Comet Lake-H',   socket:'BGA1440', cores:8,  threads:16, clk:'2.4 / 5.3 GHz',  l3:'16MB', release:'2020-04', tdp:45, mc:10500, sc:1280, game:58 },
  { id:'i7_10875h',     name:'Core i7-10875H',     brand:'Intel', arch:'Comet Lake-H',   socket:'BGA1440', cores:8,  threads:16, clk:'2.3 / 5.1 GHz',  l3:'16MB', release:'2020-04', tdp:45, mc:9500,  sc:1250, game:55 },
  { id:'i7_10750h',     name:'Core i7-10750H',     brand:'Intel', arch:'Comet Lake-H',   socket:'BGA1440', cores:6,  threads:12, clk:'2.6 / 5.0 GHz',  l3:'12MB', release:'2020-04', tdp:45, mc:8500,  sc:1220, game:53 },
  { id:'i7_1065g7',     name:'Core i7-1065G7',     brand:'Intel', arch:'Ice Lake-U',     socket:'BGA1526', cores:4,  threads:8,  clk:'1.3 / 3.9 GHz',  l3:'8MB',  release:'2019-08', tdp:15, mc:5000,  sc:1180, game:36 },
  { id:'i5_10210u',     name:'Core i5-10210U',     brand:'Intel', arch:'Comet Lake-U',   socket:'BGA1528', cores:4,  threads:8,  clk:'1.6 / 4.2 GHz',  l3:'6MB',  release:'2019-08', tdp:15, mc:3700,  sc:1150, game:29 },

  /* ===== Intel · Coffee Lake-H (9 代) ===== */
  { id:'i9_9980hk',     name:'Core i9-9980HK',     brand:'Intel', arch:'Coffee Lake-H',  socket:'BGA1440', cores:8,  threads:16, clk:'2.4 / 5.0 GHz',  l3:'16MB', release:'2019-04', tdp:45, mc:10000, sc:1200, game:52 },
  { id:'i9_9880h',      name:'Core i9-9880H',      brand:'Intel', arch:'Coffee Lake-H',  socket:'BGA1440', cores:8,  threads:16, clk:'2.3 / 4.8 GHz',  l3:'16MB', release:'2019-04', tdp:45, mc:9500,  sc:1180, game:50 },
  { id:'i7_9750h',      name:'Core i7-9750H',      brand:'Intel', arch:'Coffee Lake-H',  socket:'BGA1440', cores:6,  threads:12, clk:'2.6 / 4.5 GHz',  l3:'12MB', release:'2019-04', tdp:45, mc:9000,  sc:1200, game:48 },
  { id:'i5_9300h',      name:'Core i5-9300H',      brand:'Intel', arch:'Coffee Lake-H',  socket:'BGA1440', cores:4,  threads:8,  clk:'2.4 / 4.1 GHz',  l3:'8MB',  release:'2019-04', tdp:45, mc:6200,  sc:1120, game:43 },

  /* ===== Intel · Coffee Lake-H / Kaby Lake-R (8 代) ===== */
  { id:'i9_8950hk',     name:'Core i9-8950HK',     brand:'Intel', arch:'Coffee Lake-H',  socket:'BGA1440', cores:6,  threads:12, clk:'2.9 / 4.8 GHz',  l3:'12MB', release:'2018-04', tdp:45, mc:8000,  sc:1150, game:46 },
  { id:'i7_8750h',      name:'Core i7-8750H',      brand:'Intel', arch:'Coffee Lake-H',  socket:'BGA1440', cores:6,  threads:12, clk:'2.2 / 4.1 GHz',  l3:'9MB',  release:'2018-04', tdp:45, mc:7500,  sc:1100, game:44 },
  { id:'i5_8300h',      name:'Core i5-8300H',      brand:'Intel', arch:'Coffee Lake-H',  socket:'BGA1440', cores:4,  threads:8,  clk:'2.3 / 4.0 GHz',  l3:'8MB',  release:'2018-04', tdp:45, mc:6000,  sc:1050, game:40 },
  { id:'i7_8550u',      name:'Core i7-8550U',      brand:'Intel', arch:'Kaby Lake-R',    socket:'BGA1356', cores:4,  threads:8,  clk:'1.8 / 4.0 GHz',  l3:'8MB',  release:'2017-08', tdp:15, mc:3100,  sc:1000, game:25 },
  { id:'i5_8250u',      name:'Core i5-8250U',      brand:'Intel', arch:'Kaby Lake-R',    socket:'BGA1356', cores:4,  threads:8,  clk:'1.6 / 3.4 GHz',  l3:'6MB',  release:'2017-08', tdp:15, mc:2500,  sc:900,  game:30 },

  /* ===== Intel · Kaby Lake-H / U (7 代) ===== */
  { id:'i7_7700hq',     name:'Core i7-7700HQ',     brand:'Intel', arch:'Kaby Lake-H',    socket:'BGA1440', cores:4,  threads:8,  clk:'2.8 / 3.8 GHz',  l3:'6MB',  release:'2017-01', tdp:45, mc:4500,  sc:950,  game:38 },
  { id:'i7_7820hk',     name:'Core i7-7820HK',     brand:'Intel', arch:'Kaby Lake-H',    socket:'BGA1440', cores:4,  threads:8,  clk:'2.9 / 3.9 GHz',  l3:'8MB',  release:'2017-01', tdp:45, mc:4600,  sc:970,  game:39 },
  { id:'i7_7500u',      name:'Core i7-7500U',      brand:'Intel', arch:'Kaby Lake-U',    socket:'BGA1356', cores:2,  threads:4,  clk:'2.7 / 3.5 GHz',  l3:'4MB',  release:'2016-08', tdp:15, mc:1900,  sc:850,  game:26 },
  { id:'i5_7200u',      name:'Core i5-7200U',      brand:'Intel', arch:'Kaby Lake-U',    socket:'BGA1356', cores:2,  threads:4,  clk:'2.5 / 3.1 GHz',  l3:'3MB',  release:'2016-08', tdp:15, mc:1600,  sc:780,  game:23 },

  /* ===== Intel · Skylake-H / U (6 代) ===== */
  { id:'i7_6700hq',     name:'Core i7-6700HQ',     brand:'Intel', arch:'Skylake-H',      socket:'BGA1440', cores:4,  threads:8,  clk:'2.6 / 3.5 GHz',  l3:'6MB',  release:'2015-09', tdp:45, mc:4000,  sc:900,  game:34 },
  { id:'i7_6820hk',     name:'Core i7-6820HK',     brand:'Intel', arch:'Skylake-H',      socket:'BGA1440', cores:4,  threads:8,  clk:'2.7 / 3.6 GHz',  l3:'8MB',  release:'2015-09', tdp:45, mc:4200,  sc:930,  game:35 },
  { id:'i5_6300hq',     name:'Core i5-6300HQ',     brand:'Intel', arch:'Skylake-H',      socket:'BGA1440', cores:4,  threads:4,  clk:'2.3 / 3.2 GHz',  l3:'6MB',  release:'2015-09', tdp:45, mc:3000,  sc:850,  game:29 },
  { id:'i7_6500u',      name:'Core i7-6500U',      brand:'Intel', arch:'Skylake-U',      socket:'BGA1356', cores:2,  threads:4,  clk:'2.5 / 3.1 GHz',  l3:'4MB',  release:'2015-09', tdp:15, mc:1700,  sc:800,  game:23 },

  /* ===== Intel · Haswell / Broadwell (4 / 5 代) ===== */
  { id:'i7_4980hq',     name:'Core i7-4980HQ',     brand:'Intel', arch:'Haswell-MQ',     socket:'Socket G3', cores:4, threads:8, clk:'2.8 / 4.0 GHz',  l3:'6MB',  release:'2014-07', tdp:47, mc:3600,  sc:800,  game:30 },
  { id:'i7_4710hq',     name:'Core i7-4710HQ',     brand:'Intel', arch:'Haswell-MQ',     socket:'Socket G3', cores:4, threads:8, clk:'2.5 / 3.5 GHz',  l3:'6MB',  release:'2014-04', tdp:47, mc:3300,  sc:780,  game:28 },
  { id:'i7_4700mq',     name:'Core i7-4700MQ',     brand:'Intel', arch:'Haswell-MQ',     socket:'Socket G3', cores:4, threads:8, clk:'2.4 / 3.4 GHz',  l3:'6MB',  release:'2013-06', tdp:47, mc:3200,  sc:760,  game:27 },
  { id:'i5_5200u',      name:'Core i5-5200U',      brand:'Intel', arch:'Broadwell-U',    socket:'BGA1168', cores:2,  threads:4,  clk:'2.2 / 2.7 GHz',  l3:'3MB',  release:'2015-01', tdp:15, mc:1400,  sc:680,  game:18 },

  /* ===== Intel · Ivy / Sandy Bridge-M (2 / 3 代) ===== */
  { id:'i7_3940xm',     name:'Core i7-3940XM',     brand:'Intel', arch:'Ivy Bridge-M',   socket:'Socket G2', cores:4, threads:8, clk:'3.0 / 3.9 GHz',  l3:'8MB',  release:'2012-09', tdp:55, mc:3400,  sc:750,  game:26 },
  { id:'i7_3630qm',     name:'Core i7-3630QM',     brand:'Intel', arch:'Ivy Bridge-M',   socket:'Socket G2', cores:4, threads:8, clk:'2.4 / 3.4 GHz',  l3:'6MB',  release:'2012-04', tdp:45, mc:3000,  sc:700,  game:24 },
  { id:'i7_3520m',      name:'Core i7-3520M',      brand:'Intel', arch:'Ivy Bridge-M',   socket:'Socket G2', cores:2, threads:4,  clk:'2.9 / 3.6 GHz',  l3:'4MB',  release:'2012-04', tdp:35, mc:1900,  sc:700,  game:22 },
  { id:'i7_2630qm',     name:'Core i7-2630QM',     brand:'Intel', arch:'Sandy Bridge-M', socket:'Socket G2', cores:4, threads:8, clk:'2.0 / 2.9 GHz',  l3:'6MB',  release:'2011-01', tdp:45, mc:2500,  sc:600,  game:20 },
  { id:'i5_2410m',      name:'Core i5-2410M',      brand:'Intel', arch:'Sandy Bridge-M', socket:'Socket G2', cores:2, threads:4,  clk:'2.3 / 2.9 GHz',  l3:'3MB',  release:'2011-02', tdp:35, mc:1300,  sc:560,  game:16 },

  /* ===== Intel · Clarksfield / Arrandale (1 代) ===== */
  { id:'i7_920xm',      name:'Core i7-920XM',      brand:'Intel', arch:'Clarksfield',    socket:'Socket G1', cores:4, threads:8, clk:'2.0 / 3.2 GHz',   l3:'8MB', release:'2009-09', tdp:55, mc:1900,  sc:480,  game:15 },
  { id:'i7_820qm',      name:'Core i7-820QM',      brand:'Intel', arch:'Clarksfield',    socket:'Socket G1', cores:4, threads:8, clk:'1.73 / 3.06 GHz', l3:'8MB', release:'2009-09', tdp:45, mc:1700,  sc:460,  game:14 },
  { id:'i7_720qm',      name:'Core i7-720QM',      brand:'Intel', arch:'Clarksfield',    socket:'Socket G1', cores:4, threads:8, clk:'1.6 / 2.8 GHz',   l3:'6MB', release:'2009-09', tdp:45, mc:1500,  sc:420,  game:12 },
  { id:'i5_520m',       name:'Core i5-520M',       brand:'Intel', arch:'Arrandale',      socket:'Socket G1', cores:2, threads:4,  clk:'2.4 / 2.93 GHz',  l3:'3MB', release:'2010-01', tdp:35, mc:1100,  sc:450,  game:12 },

  /* ===== Intel · Atom / Pentium / Celeron 移动版 ===== */
  { id:'pentium_n3700', name:'Pentium N3700',      brand:'Intel', arch:'Airmont',        socket:'BGA1170', cores:4, threads:4,  clk:'1.6 / 2.4 GHz',   l3:'2MB', release:'2015-03', tdp:6,  mc:700,   sc:250,  game:8  },
  { id:'celeron_n3060', name:'Celeron N3060',      brand:'Intel', arch:'Airmont',        socket:'BGA1170', cores:2, threads:2,  clk:'1.6 / 2.48 GHz',  l3:'2MB', release:'2016-01', tdp:6,  mc:350,   sc:200,  game:5  },
  { id:'celeron_n4020', name:'Celeron N4020',      brand:'Intel', arch:'Goldmont Plus',  socket:'BGA1090', cores:2, threads:2,  clk:'1.1 / 2.8 GHz',   l3:'4MB', release:'2019-11', tdp:6,  mc:600,   sc:280,  game:7  },
  { id:'pentium_n6000', name:'Pentium Silver N6000', brand:'Intel', arch:'Goldmont Plus', socket:'BGA1090', cores:4, threads:4, clk:'1.1 / 3.3 GHz',  l3:'4MB', release:'2020-11', tdp:6,  mc:1100,  sc:350,  game:10 }
];

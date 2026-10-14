/* 移动端处理器（AMD / Apple / Qualcomm）— 多核/单核 = Cinebench R23，游戏 = 以桌面 9800X3D = 100 的相对指数 */
window.CPU_MOBILE_2 = [
  /* ===== AMD · Zen 5 移动 (Strix Halo) ===== */
  { id:'ai_max_plus_395', name:'Ryzen AI Max+ 395', brand:'AMD', arch:'Zen 5', socket:'FP8', cores:16, threads:32, clk:'2.0 / 5.1 GHz', l3:'64MB',  release:'2025-01', tdp:55, mc:30000, sc:2000, game:74 },
  { id:'ai_max_390',      name:'Ryzen AI Max 390',  brand:'AMD', arch:'Zen 5', socket:'FP8', cores:12, threads:24, clk:'2.0 / 5.0 GHz', l3:'64MB',  release:'2025-01', tdp:55, mc:23500, sc:1980, game:73 },
  { id:'ai_max_385',      name:'Ryzen AI Max 385',  brand:'AMD', arch:'Zen 5', socket:'FP8', cores:8,  threads:16, clk:'2.0 / 5.0 GHz', l3:'32MB',  release:'2025-01', tdp:55, mc:16500, sc:1980, game:72 },
  { id:'ai_max_380',      name:'Ryzen AI Max 380',  brand:'AMD', arch:'Zen 5', socket:'FP8', cores:6,  threads:12, clk:'2.0 / 4.8 GHz', l3:'16MB',  release:'2025-01', tdp:45, mc:12500, sc:1950, game:71 },

  /* ===== AMD · Zen 5 移动 (Strix Point) ===== */
  { id:'ai9_hx375',       name:'Ryzen AI 9 HX 375', brand:'AMD', arch:'Zen 5', socket:'FP8', cores:12, threads:24, clk:'2.0 / 5.1 GHz', l3:'24MB',  release:'2024-07', tdp:28, mc:20500, sc:1980, game:73 },
  { id:'ai9_hx370',       name:'Ryzen AI 9 HX 370', brand:'AMD', arch:'Zen 5', socket:'FP8', cores:12, threads:24, clk:'2.0 / 5.1 GHz', l3:'24MB',  release:'2024-07', tdp:28, mc:20000, sc:1950, game:72 },
  { id:'ai9_365',         name:'Ryzen AI 9 365',    brand:'AMD', arch:'Zen 5', socket:'FP8', cores:10, threads:20, clk:'2.0 / 5.0 GHz', l3:'24MB',  release:'2024-07', tdp:28, mc:17000, sc:1930, game:71 },
  { id:'ai7_pro_360',     name:'Ryzen AI 7 PRO 360',brand:'AMD', arch:'Zen 5', socket:'FP8', cores:8,  threads:16, clk:'2.0 / 5.0 GHz', l3:'16MB',  release:'2024-10', tdp:28, mc:14200, sc:1920, game:70 },
  { id:'ai7_350',         name:'Ryzen AI 7 350',    brand:'AMD', arch:'Zen 5', socket:'FP8', cores:8,  threads:16, clk:'2.0 / 5.0 GHz', l3:'16MB',  release:'2025-01', tdp:28, mc:14000, sc:1920, game:70 },
  { id:'ai5_340',         name:'Ryzen AI 5 340',    brand:'AMD', arch:'Zen 5', socket:'FP8', cores:6,  threads:12, clk:'2.0 / 4.8 GHz', l3:'16MB',  release:'2025-01', tdp:28, mc:11000, sc:1900, game:68 },

  /* ===== AMD · Zen 4 移动 (Hawk Point 2025 · Ryzen 200) ===== */
  { id:'r9_270',          name:'Ryzen 9 270',       brand:'AMD', arch:'Zen 4', socket:'FP8', cores:8,  threads:16, clk:'4.0 / 5.2 GHz', l3:'16MB',  release:'2025-01', tdp:45, mc:17500, sc:1800, game:69 },
  { id:'r7_260',          name:'Ryzen 7 260',       brand:'AMD', arch:'Zen 4', socket:'FP8', cores:8,  threads:16, clk:'3.8 / 5.1 GHz', l3:'16MB',  release:'2025-01', tdp:45, mc:17000, sc:1780, game:68 },
  { id:'r7_250',          name:'Ryzen 7 250',       brand:'AMD', arch:'Zen 4', socket:'FP8', cores:8,  threads:16, clk:'3.3 / 5.1 GHz', l3:'16MB',  release:'2025-01', tdp:28, mc:16500, sc:1770, game:67 },
  { id:'r5_220',          name:'Ryzen 5 220',       brand:'AMD', arch:'Zen 4', socket:'FP8', cores:6,  threads:12, clk:'3.2 / 4.9 GHz', l3:'16MB',  release:'2025-01', tdp:28, mc:12500, sc:1720, game:63 },

  /* ===== AMD · Zen 4 移动 (Hawk Point · Ryzen 8040) ===== */
  { id:'r9_8945hs',       name:'Ryzen 9 8945HS',    brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'4.0 / 5.2 GHz', l3:'16MB',  release:'2024-01', tdp:45, mc:17500, sc:1800, game:69 },
  { id:'r9_8845hs',       name:'Ryzen 9 8845HS',    brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'3.8 / 5.1 GHz', l3:'16MB',  release:'2024-01', tdp:45, mc:17200, sc:1780, game:68 },
  { id:'r9_8945hx',       name:'Ryzen 9 8945HX',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:16, threads:32, clk:'2.5 / 5.4 GHz', l3:'64MB',  release:'2025-04', tdp:55, mc:32000, sc:1950, game:76 },
  { id:'r7_8845hs',       name:'Ryzen 7 8845HS',    brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'3.8 / 5.1 GHz', l3:'16MB',  release:'2024-01', tdp:45, mc:17000, sc:1780, game:68 },
  { id:'r7_8840hs',       name:'Ryzen 7 8840HS',    brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'3.3 / 5.1 GHz', l3:'16MB',  release:'2024-01', tdp:28, mc:16500, sc:1770, game:67 },
  { id:'r7_8840u',        name:'Ryzen 7 8840U',     brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'3.3 / 5.1 GHz', l3:'16MB',  release:'2024-01', tdp:15, mc:15500, sc:1760, game:64 },
  { id:'r7_8745h',        name:'Ryzen 7 8745H',     brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'3.8 / 4.9 GHz', l3:'16MB',  release:'2024-01', tdp:45, mc:16800, sc:1750, game:67 },
  { id:'r7_8845h',        name:'Ryzen 7 8845H',     brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'3.8 / 5.1 GHz', l3:'16MB',  release:'2024-01', tdp:45, mc:17000, sc:1780, game:68 },
  { id:'r5_8645hs',       name:'Ryzen 5 8645HS',    brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:6,  threads:12, clk:'4.3 / 5.0 GHz', l3:'16MB',  release:'2024-01', tdp:45, mc:12800, sc:1740, game:63 },
  { id:'r5_8640hs',       name:'Ryzen 5 8640HS',    brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:6,  threads:12, clk:'3.5 / 4.9 GHz', l3:'16MB',  release:'2024-01', tdp:28, mc:12300, sc:1720, game:62 },
  { id:'r5_8640u',        name:'Ryzen 5 8640U',     brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:6,  threads:12, clk:'3.5 / 4.9 GHz', l3:'16MB',  release:'2024-01', tdp:15, mc:11500, sc:1700, game:59 },

  /* ===== AMD · Zen 4 移动 (Dragon Range · Ryzen 7045) ===== */
  { id:'r9_7945hx3d',     name:'Ryzen 9 7945HX3D',  brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:16, threads:32, clk:'2.5 / 5.4 GHz', l3:'128MB', release:'2023-08', tdp:55, mc:33000, sc:1950, game:78 },
  { id:'r9_7945hx',       name:'Ryzen 9 7945HX',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:16, threads:32, clk:'2.5 / 5.4 GHz', l3:'64MB',  release:'2023-01', tdp:55, mc:33000, sc:1900, game:75 },
  { id:'r9_7940hx',       name:'Ryzen 9 7940HX',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:16, threads:32, clk:'2.4 / 5.2 GHz', l3:'64MB',  release:'2024-01', tdp:55, mc:31500, sc:1880, game:74 },
  { id:'r9_7845hx',       name:'Ryzen 9 7845HX',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:12, threads:24, clk:'3.0 / 5.2 GHz', l3:'64MB',  release:'2023-01', tdp:55, mc:26000, sc:1880, game:73 },
  { id:'r7_7840hx',       name:'Ryzen 7 7840HX',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:12, threads:24, clk:'2.9 / 5.1 GHz', l3:'64MB',  release:'2024-01', tdp:55, mc:25000, sc:1860, game:72 },
  { id:'r7_7745hx',       name:'Ryzen 7 7745HX',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:8,  threads:16, clk:'3.6 / 5.1 GHz', l3:'32MB',  release:'2023-01', tdp:55, mc:18500, sc:1850, game:70 },
  { id:'r5_7645hx',       name:'Ryzen 5 7645HX',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:6,  threads:12, clk:'4.0 / 5.0 GHz', l3:'32MB',  release:'2023-01', tdp:55, mc:13500, sc:1820, game:64 },

  /* ===== AMD · Zen 4 移动 (Phoenix · Ryzen 7040) ===== */
  { id:'r9_7940hs',       name:'Ryzen 9 7940HS',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:8,  threads:16, clk:'4.0 / 5.2 GHz', l3:'16MB',  release:'2023-01', tdp:35, mc:17000, sc:1800, game:68 },
  { id:'r9_7940h',        name:'Ryzen 9 7940H',     brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:8,  threads:16, clk:'4.0 / 5.2 GHz', l3:'16MB',  release:'2023-01', tdp:45, mc:17000, sc:1800, game:68 },
  { id:'r7_7840hs',       name:'Ryzen 7 7840HS',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:8,  threads:16, clk:'3.8 / 5.1 GHz', l3:'16MB',  release:'2023-01', tdp:35, mc:16500, sc:1800, game:67 },
  { id:'r7_7840h',        name:'Ryzen 7 7840H',     brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:8,  threads:16, clk:'3.8 / 5.1 GHz', l3:'16MB',  release:'2023-01', tdp:45, mc:16500, sc:1800, game:67 },
  { id:'r7_7840u',        name:'Ryzen 7 7840U',     brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:8,  threads:16, clk:'3.3 / 5.1 GHz', l3:'16MB',  release:'2023-01', tdp:15, mc:15000, sc:1780, game:63 },
  { id:'r5_7640hs',       name:'Ryzen 5 7640HS',    brand:'AMD', arch:'Zen 4', socket:'FP7r2', cores:6,  threads:12, clk:'4.3 / 5.0 GHz', l3:'16MB',  release:'2023-01', tdp:35, mc:12500, sc:1760, game:62 },
  { id:'r5_7640u',        name:'Ryzen 5 7640U',     brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:6,  threads:12, clk:'3.5 / 4.9 GHz', l3:'16MB',  release:'2023-01', tdp:15, mc:11200, sc:1720, game:58 },
  { id:'r3_7440u',        name:'Ryzen 3 7440U',     brand:'AMD', arch:'Zen 4', socket:'FP8',   cores:4,  threads:8,  clk:'3.0 / 4.7 GHz', l3:'8MB',   release:'2023-05', tdp:15, mc:6800,  sc:1650, game:48 },

  /* ===== AMD · Zen 3+ / Zen 3 移动 (Rembrandt-R 7035 / Barcelo-R 7030) ===== */
  { id:'r9_7735hs',       name:'Ryzen 9 7735HS',    brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8,  threads:16, clk:'3.2 / 4.75 GHz', l3:'16MB', release:'2023-01', tdp:35, mc:14000, sc:1560, game:63 },
  { id:'r9_7735h',        name:'Ryzen 9 7735H',     brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8,  threads:16, clk:'3.2 / 4.75 GHz', l3:'16MB', release:'2023-01', tdp:45, mc:14000, sc:1560, game:63 },
  { id:'r7_7735hs',       name:'Ryzen 7 7735HS',    brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8,  threads:16, clk:'3.2 / 4.75 GHz', l3:'16MB', release:'2023-01', tdp:35, mc:13800, sc:1550, game:62 },
  { id:'r7_7735u',        name:'Ryzen 7 7735U',     brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8,  threads:16, clk:'2.7 / 4.75 GHz', l3:'16MB', release:'2023-01', tdp:15, mc:12000, sc:1530, game:56 },
  { id:'r5_7535hs',       name:'Ryzen 5 7535HS',    brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:6,  threads:12, clk:'3.3 / 4.55 GHz', l3:'16MB', release:'2023-01', tdp:35, mc:10800, sc:1490, game:56 },
  { id:'r5_7535u',        name:'Ryzen 5 7535U',     brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:6,  threads:12, clk:'2.9 / 4.55 GHz', l3:'16MB', release:'2023-01', tdp:15, mc:9800,  sc:1470, game:52 },
  { id:'r5_7530u',        name:'Ryzen 5 7530U',     brand:'AMD', arch:'Zen 3',  socket:'FP6', cores:6,  threads:12, clk:'2.0 / 4.5 GHz',  l3:'16MB', release:'2023-01', tdp:15, mc:9000,  sc:1450, game:50 },
  { id:'r3_7330u',        name:'Ryzen 3 7330U',     brand:'AMD', arch:'Zen 3',  socket:'FP6', cores:4,  threads:8,  clk:'2.3 / 4.3 GHz',  l3:'8MB',  release:'2023-01', tdp:15, mc:6200,  sc:1380, game:42 },

  /* ===== AMD · Zen 3+ 移动 (Rembrandt · Ryzen 6000) ===== */
  { id:'r9_6980hx',       name:'Ryzen 9 6980HX',    brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8, threads:16, clk:'3.3 / 5.0 GHz', l3:'16MB', release:'2022-01', tdp:45, mc:14600, sc:1580, game:64 },
  { id:'r9_6980hs',       name:'Ryzen 9 6980HS',    brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8, threads:16, clk:'3.3 / 5.0 GHz', l3:'16MB', release:'2022-01', tdp:35, mc:14500, sc:1580, game:63 },
  { id:'r9_6900hx',       name:'Ryzen 9 6900HX',    brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8, threads:16, clk:'3.3 / 4.9 GHz', l3:'16MB', release:'2022-01', tdp:45, mc:14300, sc:1560, game:63 },
  { id:'r7_6800h',        name:'Ryzen 7 6800H',     brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8, threads:16, clk:'3.2 / 4.7 GHz', l3:'16MB', release:'2022-01', tdp:45, mc:14000, sc:1500, game:62 },
  { id:'r7_6800hs',       name:'Ryzen 7 6800HS',    brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8, threads:16, clk:'3.2 / 4.7 GHz', l3:'16MB', release:'2022-01', tdp:35, mc:13800, sc:1500, game:61 },
  { id:'r7_6800u',        name:'Ryzen 7 6800U',     brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:8, threads:16, clk:'2.7 / 4.7 GHz', l3:'16MB', release:'2022-01', tdp:15, mc:12500, sc:1480, game:57 },
  { id:'r5_6600h',        name:'Ryzen 5 6600H',     brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:6, threads:12, clk:'3.3 / 4.5 GHz', l3:'16MB', release:'2022-01', tdp:45, mc:10500, sc:1450, game:55 },
  { id:'r5_6600u',        name:'Ryzen 5 6600U',     brand:'AMD', arch:'Zen 3+', socket:'FP7', cores:6, threads:12, clk:'2.9 / 4.5 GHz', l3:'16MB', release:'2022-01', tdp:15, mc:9500,  sc:1430, game:51 },

  /* ===== AMD · Zen 3 / Zen 2 移动 (Cezanne / Lucienne · Ryzen 5000) ===== */
  { id:'r9_5980hx',       name:'Ryzen 9 5980HX',    brand:'AMD', arch:'Zen 3', socket:'FP6', cores:8, threads:16, clk:'3.3 / 4.8 GHz', l3:'16MB', release:'2021-01', tdp:45, mc:13500, sc:1480, game:61 },
  { id:'r9_5900hx',       name:'Ryzen 9 5900HX',    brand:'AMD', arch:'Zen 3', socket:'FP6', cores:8, threads:16, clk:'3.3 / 4.6 GHz', l3:'16MB', release:'2021-01', tdp:45, mc:13300, sc:1460, game:60 },
  { id:'r9_5980hs',       name:'Ryzen 9 5980HS',    brand:'AMD', arch:'Zen 3', socket:'FP6', cores:8, threads:16, clk:'3.0 / 4.8 GHz', l3:'16MB', release:'2021-01', tdp:35, mc:13200, sc:1470, game:60 },
  { id:'r7_5800h',        name:'Ryzen 7 5800H',     brand:'AMD', arch:'Zen 3', socket:'FP6', cores:8, threads:16, clk:'3.2 / 4.4 GHz', l3:'16MB', release:'2021-01', tdp:45, mc:13000, sc:1450, game:60 },
  { id:'r7_5800hs',       name:'Ryzen 7 5800HS',    brand:'AMD', arch:'Zen 3', socket:'FP6', cores:8, threads:16, clk:'2.8 / 4.4 GHz', l3:'16MB', release:'2021-01', tdp:35, mc:12500, sc:1440, game:59 },
  { id:'r7_5800u',        name:'Ryzen 7 5800U',     brand:'AMD', arch:'Zen 3', socket:'FP6', cores:8, threads:16, clk:'1.9 / 4.4 GHz', l3:'16MB', release:'2021-01', tdp:15, mc:10500, sc:1420, game:53 },
  { id:'r7_5700u',        name:'Ryzen 7 5700U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:8, threads:16, clk:'1.8 / 4.3 GHz', l3:'8MB',  release:'2021-01', tdp:15, mc:10000,  sc:1300, game:52 },
  { id:'r5_5600h',        name:'Ryzen 5 5600H',     brand:'AMD', arch:'Zen 3', socket:'FP6', cores:6, threads:12, clk:'3.3 / 4.2 GHz', l3:'16MB', release:'2021-01', tdp:45, mc:10000, sc:1370, game:55 },
  { id:'r5_5600u',        name:'Ryzen 5 5600U',     brand:'AMD', arch:'Zen 3', socket:'FP6', cores:6, threads:12, clk:'2.3 / 4.2 GHz', l3:'16MB', release:'2021-01', tdp:15, mc:8300,  sc:1350, game:48 },
  { id:'r5_5500u',        name:'Ryzen 5 5500U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:6, threads:12, clk:'2.1 / 4.0 GHz', l3:'8MB',  release:'2021-01', tdp:15, mc:7800,  sc:1250, game:46 },
  { id:'r3_5300u',        name:'Ryzen 3 5300U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:4, threads:8,  clk:'2.6 / 3.8 GHz', l3:'4MB',  release:'2021-01', tdp:15, mc:5500,  sc:1180, game:38 },

  /* ===== AMD · Zen 2 移动 (Renoir · Ryzen 4000) ===== */
  { id:'r9_4900h',        name:'Ryzen 9 4900H',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:8, threads:16, clk:'3.3 / 4.4 GHz', l3:'8MB', release:'2020-03', tdp:45, mc:12500, sc:1290, game:54 },
  { id:'r9_4900hs',       name:'Ryzen 9 4900HS',    brand:'AMD', arch:'Zen 2', socket:'FP6', cores:8, threads:16, clk:'3.0 / 4.3 GHz', l3:'8MB', release:'2020-03', tdp:35, mc:12200, sc:1280, game:53 },
  { id:'r7_4800h',        name:'Ryzen 7 4800H',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:8, threads:16, clk:'2.9 / 4.2 GHz', l3:'8MB', release:'2020-03', tdp:45, mc:12000, sc:1250, game:52 },
  { id:'r7_4800hs',       name:'Ryzen 7 4800HS',    brand:'AMD', arch:'Zen 2', socket:'FP6', cores:8, threads:16, clk:'2.9 / 4.2 GHz', l3:'8MB', release:'2020-03', tdp:35, mc:11800, sc:1250, game:52 },
  { id:'r7_4800u',        name:'Ryzen 7 4800U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:8, threads:16, clk:'1.8 / 4.2 GHz', l3:'8MB', release:'2020-03', tdp:15, mc:10500, sc:1230, game:46 },
  { id:'r7_4700u',        name:'Ryzen 7 4700U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:8, threads:8,  clk:'2.0 / 4.1 GHz', l3:'8MB', release:'2020-03', tdp:15, mc:9000,  sc:1200, game:42 },
  { id:'r5_4600h',        name:'Ryzen 5 4600H',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:6, threads:12, clk:'3.0 / 4.0 GHz', l3:'8MB', release:'2020-03', tdp:45, mc:9500,  sc:1180, game:47 },
  { id:'r5_4600u',        name:'Ryzen 5 4600U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:6, threads:12, clk:'2.1 / 4.0 GHz', l3:'8MB', release:'2020-03', tdp:15, mc:8200,  sc:1170, game:42 },
  { id:'r5_4500u',        name:'Ryzen 5 4500U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:6, threads:6,  clk:'2.3 / 4.0 GHz', l3:'8MB', release:'2020-03', tdp:15, mc:7000,  sc:1150, game:38 },
  { id:'r3_4300u',        name:'Ryzen 3 4300U',     brand:'AMD', arch:'Zen 2', socket:'FP6', cores:4, threads:4,  clk:'2.7 / 3.7 GHz', l3:'4MB', release:'2020-03', tdp:15, mc:5000,  sc:1150, game:36 },

  /* ===== AMD · Zen+ 移动 (Picasso · Ryzen 3000) ===== */
  { id:'r7_3750h',        name:'Ryzen 7 3750H',     brand:'AMD', arch:'Zen+', socket:'FP5', cores:4, threads:8, clk:'2.3 / 4.0 GHz', l3:'4MB', release:'2019-01', tdp:35, mc:4500, sc:950, game:35 },
  { id:'r7_3700u',        name:'Ryzen 7 3700U',     brand:'AMD', arch:'Zen+', socket:'FP5', cores:4, threads:8, clk:'2.3 / 4.0 GHz', l3:'4MB', release:'2019-01', tdp:15, mc:3800, sc:930, game:28 },
  { id:'r5_3550h',        name:'Ryzen 5 3550H',     brand:'AMD', arch:'Zen+', socket:'FP5', cores:4, threads:8, clk:'2.1 / 3.7 GHz', l3:'4MB', release:'2019-01', tdp:35, mc:4000, sc:900, game:32 },
  { id:'r5_3500u',        name:'Ryzen 5 3500U',     brand:'AMD', arch:'Zen+', socket:'FP5', cores:4, threads:8, clk:'2.1 / 3.7 GHz', l3:'4MB', release:'2019-01', tdp:15, mc:3600, sc:880, game:27 },
  { id:'r3_3200u',        name:'Ryzen 3 3200U',     brand:'AMD', arch:'Zen+', socket:'FP5', cores:2, threads:4, clk:'2.6 / 3.5 GHz', l3:'4MB', release:'2019-01', tdp:15, mc:2100, sc:830, game:20 },

  /* ===== AMD · Zen 移动 (Raven Ridge · Ryzen 2000) ===== */
  { id:'r7_2800h',        name:'Ryzen 7 2800H',     brand:'AMD', arch:'Zen', socket:'FP5', cores:4, threads:8, clk:'3.3 / 3.8 GHz', l3:'4MB', release:'2018-09', tdp:45, mc:3900, sc:820, game:30 },
  { id:'r7_2700u',        name:'Ryzen 7 2700U',     brand:'AMD', arch:'Zen', socket:'FP5', cores:4, threads:8, clk:'2.2 / 3.8 GHz', l3:'4MB', release:'2017-10', tdp:15, mc:3500, sc:800, game:25 },
  { id:'r5_2600h',        name:'Ryzen 5 2600H',     brand:'AMD', arch:'Zen', socket:'FP5', cores:4, threads:8, clk:'3.2 / 3.6 GHz', l3:'4MB', release:'2018-09', tdp:45, mc:3600, sc:790, game:28 },
  { id:'r5_2500u',        name:'Ryzen 5 2500U',     brand:'AMD', arch:'Zen', socket:'FP5', cores:4, threads:8, clk:'2.0 / 3.6 GHz', l3:'4MB', release:'2017-10', tdp:15, mc:3000, sc:770, game:23 },
  { id:'r3_2300u',        name:'Ryzen 3 2300U',     brand:'AMD', arch:'Zen', socket:'FP5', cores:4, threads:4, clk:'2.0 / 3.4 GHz', l3:'4MB', release:'2017-10', tdp:15, mc:2400, sc:730, game:20 },

  /* ===== AMD · Excavator 移动 APU (FX / A 系列) ===== */
  { id:'fx_9830p',        name:'FX-9830P',          brand:'AMD', arch:'Excavator', socket:'FP4', cores:4, threads:4, clk:'3.0 / 3.7 GHz', l3:'—', release:'2016-06', tdp:35, mc:2200, sc:600, game:15 },
  { id:'fx_8800p',        name:'FX-8800P',          brand:'AMD', arch:'Excavator', socket:'FP4', cores:4, threads:4, clk:'2.1 / 3.4 GHz', l3:'—', release:'2015-06', tdp:15, mc:1650, sc:540, game:11 },
  { id:'a12_9700p',       name:'A12-9700P',         brand:'AMD', arch:'Excavator', socket:'FP4', cores:4, threads:4, clk:'2.5 / 3.4 GHz', l3:'—', release:'2016-06', tdp:15, mc:1550, sc:530, game:10 },
  { id:'a10_8700p',       name:'A10-8700P',         brand:'AMD', arch:'Excavator', socket:'FP4', cores:4, threads:4, clk:'1.8 / 3.2 GHz', l3:'—', release:'2015-06', tdp:15, mc:1500, sc:500, game:9 },
  { id:'a8_7410',         name:'A8-7410',           brand:'AMD', arch:'Excavator', socket:'FP4', cores:4, threads:4, clk:'2.2 / 2.5 GHz', l3:'—', release:'2015-05', tdp:15, mc:1100, sc:450, game:7 },
  { id:'e2_9000',         name:'E2-9000',           brand:'AMD', arch:'Excavator', socket:'FP4', cores:2, threads:2, clk:'1.8 / 2.2 GHz', l3:'—', release:'2016-06', tdp:10, mc:500,  sc:340, game:4 },

  /* ===== Apple Silicon (M 系列) ===== */
  { id:'apple_m1',        name:'Apple M1',          brand:'Apple', arch:'Apple M1', socket:'SoC', cores:8,  threads:8,  clk:'0.6 / 3.2 GHz',  l3:'—', release:'2020-11', tdp:15, mc:6000,  sc:1400, game:32 },
  { id:'apple_m1_pro',    name:'Apple M1 Pro',      brand:'Apple', arch:'Apple M1', socket:'SoC', cores:10, threads:10, clk:'0.6 / 3.2 GHz',  l3:'—', release:'2021-10', tdp:30, mc:9500,  sc:1450, game:40 },
  { id:'apple_m1_max',    name:'Apple M1 Max',      brand:'Apple', arch:'Apple M1', socket:'SoC', cores:10, threads:10, clk:'0.6 / 3.2 GHz',  l3:'—', release:'2021-10', tdp:40, mc:12000, sc:1500, game:55 },
  { id:'apple_m1_ultra',  name:'Apple M1 Ultra',    brand:'Apple', arch:'Apple M1', socket:'SoC', cores:20, threads:20, clk:'0.6 / 3.2 GHz',  l3:'—', release:'2022-03', tdp:60, mc:20000, sc:1500, game:58 },
  { id:'apple_m2',        name:'Apple M2',          brand:'Apple', arch:'Apple M2', socket:'SoC', cores:8,  threads:8,  clk:'0.6 / 3.5 GHz',  l3:'—', release:'2022-06', tdp:15, mc:7000,  sc:1450, game:38 },
  { id:'apple_m2_pro',    name:'Apple M2 Pro',      brand:'Apple', arch:'Apple M2', socket:'SoC', cores:12, threads:12, clk:'0.6 / 3.5 GHz',  l3:'—', release:'2023-01', tdp:30, mc:11000, sc:1500, game:48 },
  { id:'apple_m2_max',    name:'Apple M2 Max',      brand:'Apple', arch:'Apple M2', socket:'SoC', cores:12, threads:12, clk:'0.6 / 3.5 GHz',  l3:'—', release:'2023-01', tdp:40, mc:15000, sc:1550, game:62 },
  { id:'apple_m2_ultra',  name:'Apple M2 Ultra',    brand:'Apple', arch:'Apple M2', socket:'SoC', cores:24, threads:24, clk:'0.6 / 3.5 GHz',  l3:'—', release:'2023-06', tdp:60, mc:28000, sc:1550, game:66 },
  { id:'apple_m3',        name:'Apple M3',          brand:'Apple', arch:'Apple M3', socket:'SoC', cores:8,  threads:8,  clk:'0.6 / 4.05 GHz', l3:'—', release:'2023-10', tdp:20, mc:8000,  sc:1650, game:45 },
  { id:'apple_m3_pro',    name:'Apple M3 Pro',      brand:'Apple', arch:'Apple M3', socket:'SoC', cores:12, threads:12, clk:'0.6 / 4.05 GHz', l3:'—', release:'2023-10', tdp:35, mc:12000, sc:1700, game:55 },
  { id:'apple_m3_max',    name:'Apple M3 Max',      brand:'Apple', arch:'Apple M3', socket:'SoC', cores:16, threads:16, clk:'0.6 / 4.05 GHz', l3:'—', release:'2023-10', tdp:45, mc:24000, sc:1750, game:68 },
  { id:'apple_m4',        name:'Apple M4',          brand:'Apple', arch:'Apple M4', socket:'SoC', cores:10, threads:10, clk:'0.7 / 4.4 GHz',  l3:'—', release:'2024-05', tdp:20, mc:9000,  sc:1800, game:50 },
  { id:'apple_m4_pro',    name:'Apple M4 Pro',      brand:'Apple', arch:'Apple M4', socket:'SoC', cores:14, threads:14, clk:'0.7 / 4.5 GHz',  l3:'—', release:'2024-10', tdp:40, mc:18000, sc:1850, game:62 },
  { id:'apple_m4_max',    name:'Apple M4 Max',      brand:'Apple', arch:'Apple M4', socket:'SoC', cores:16, threads:16, clk:'0.7 / 4.5 GHz',  l3:'—', release:'2024-10', tdp:55, mc:25000, sc:1900, game:72 },

  /* ===== Qualcomm · Oryon (Snapdragon X 系列) ===== */
  { id:'snap_x_elite_84', name:'Snapdragon X Elite X1E-84-100', brand:'Qualcomm', arch:'Oryon', socket:'SoC', cores:12, threads:12, clk:'3.8 / 4.2 GHz', l3:'—', release:'2024-06', tdp:23, mc:14000, sc:1500, game:40 },
  { id:'snap_x_elite_80', name:'Snapdragon X Elite X1E-80-100', brand:'Qualcomm', arch:'Oryon', socket:'SoC', cores:12, threads:12, clk:'3.4 / 4.0 GHz', l3:'—', release:'2024-06', tdp:23, mc:13500, sc:1470, game:39 },
  { id:'snap_x_elite_78', name:'Snapdragon X Elite X1E-78-100', brand:'Qualcomm', arch:'Oryon', socket:'SoC', cores:12, threads:12, clk:'3.4 / 3.4 GHz', l3:'—', release:'2024-06', tdp:23, mc:13000, sc:1450, game:38 },
  { id:'snap_x_plus_64',  name:'Snapdragon X Plus X1P-64-100',  brand:'Qualcomm', arch:'Oryon', socket:'SoC', cores:10, threads:10, clk:'3.4 / 3.4 GHz', l3:'—', release:'2024-06', tdp:23, mc:11000, sc:1400, game:35 }
];

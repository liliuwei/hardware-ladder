/* 桌面端显卡 — 光栅 = 3DMark Time Spy Graphics，光追 = 3DMark Port Royal */
window.GPU_DESKTOP = [
  /* ===== NVIDIA · Blackwell (RTX 50) ===== */
  { id:'rtx5090',     name:'GeForce RTX 5090',         brand:'NVIDIA', arch:'Blackwell',     vram:'32GB GDDR7',   bus:'512-bit',   release:'2025-01', tdp:575, raster:48100, rt:26000 },
  { id:'rtx5090d',    name:'GeForce RTX 5090 D',       brand:'NVIDIA', arch:'Blackwell',     vram:'32GB GDDR7',   bus:'512-bit',   release:'2025-01', tdp:575, raster:47200, rt:25500 },
  { id:'rtx5090dv2',  name:'GeForce RTX 5090 D v2',    brand:'NVIDIA', arch:'Blackwell',     vram:'24GB GDDR7',   bus:'384-bit',   release:'2025-08', tdp:575, raster:43800, rt:23800 },
  { id:'rtx5080',     name:'GeForce RTX 5080',         brand:'NVIDIA', arch:'Blackwell',     vram:'16GB GDDR7',   bus:'256-bit',   release:'2025-01', tdp:360, raster:32300, rt:21800 },
  { id:'rtx5070ti',   name:'GeForce RTX 5070 Ti',      brand:'NVIDIA', arch:'Blackwell',     vram:'16GB GDDR7',   bus:'256-bit',   release:'2025-02', tdp:300, raster:27600, rt:18900 },
  { id:'rtx5070',     name:'GeForce RTX 5070',         brand:'NVIDIA', arch:'Blackwell',     vram:'12GB GDDR7',   bus:'192-bit',   release:'2025-03', tdp:250, raster:22100, rt:15000 },
  { id:'rtx5060ti16', name:'GeForce RTX 5060 Ti 16GB', brand:'NVIDIA', arch:'Blackwell',     vram:'16GB GDDR7',   bus:'128-bit',   release:'2025-04', tdp:180, raster:16600, rt:10400 },
  { id:'rtx5060ti8',  name:'GeForce RTX 5060 Ti 8GB',  brand:'NVIDIA', arch:'Blackwell',     vram:'8GB GDDR7',    bus:'128-bit',   release:'2025-04', tdp:180, raster:16400, rt:10300 },
  { id:'rtx5060',     name:'GeForce RTX 5060',         brand:'NVIDIA', arch:'Blackwell',     vram:'8GB GDDR7',    bus:'128-bit',   release:'2025-05', tdp:145, raster:13600, rt:7000  },
  { id:'rtx5050',     name:'GeForce RTX 5050',         brand:'NVIDIA', arch:'Blackwell',     vram:'8GB GDDR6',    bus:'128-bit',   release:'2025-07', tdp:130, raster:10500, rt:5100  },

  /* ===== NVIDIA · Ada Lovelace (RTX 40) ===== */
  { id:'rtx4090',     name:'GeForce RTX 4090',         brand:'NVIDIA', arch:'Ada Lovelace',  vram:'24GB GDDR6X',  bus:'384-bit',   release:'2022-10', tdp:450, raster:36500, rt:25400 },
  { id:'rtx4090d',    name:'GeForce RTX 4090 D',       brand:'NVIDIA', arch:'Ada Lovelace',  vram:'24GB GDDR6X',  bus:'384-bit',   release:'2024-01', tdp:425, raster:34800, rt:23900 },
  { id:'rtx4080s',    name:'GeForce RTX 4080 SUPER',   brand:'NVIDIA', arch:'Ada Lovelace',  vram:'16GB GDDR6X',  bus:'256-bit',   release:'2024-01', tdp:320, raster:28700, rt:18100 },
  { id:'rtx4080',     name:'GeForce RTX 4080',         brand:'NVIDIA', arch:'Ada Lovelace',  vram:'16GB GDDR6X',  bus:'256-bit',   release:'2022-11', tdp:320, raster:28100, rt:17800 },
  { id:'rtx4070tis',  name:'GeForce RTX 4070 Ti SUPER',brand:'NVIDIA', arch:'Ada Lovelace',  vram:'16GB GDDR6X',  bus:'256-bit',   release:'2024-01', tdp:285, raster:24200, rt:16200 },
  { id:'rtx4070ti',   name:'GeForce RTX 4070 Ti',      brand:'NVIDIA', arch:'Ada Lovelace',  vram:'12GB GDDR6X',  bus:'192-bit',   release:'2023-01', tdp:285, raster:22600, rt:15500 },
  { id:'rtx4070s',    name:'GeForce RTX 4070 SUPER',   brand:'NVIDIA', arch:'Ada Lovelace',  vram:'12GB GDDR6X',  bus:'192-bit',   release:'2024-01', tdp:220, raster:21100, rt:14000 },
  { id:'rtx4070',     name:'GeForce RTX 4070',         brand:'NVIDIA', arch:'Ada Lovelace',  vram:'12GB GDDR6X',  bus:'192-bit',   release:'2023-04', tdp:200, raster:17900, rt:11200 },
  { id:'rtx4060ti16', name:'GeForce RTX 4060 Ti 16GB', brand:'NVIDIA', arch:'Ada Lovelace',  vram:'16GB GDDR6',   bus:'128-bit',   release:'2023-07', tdp:165, raster:15200, rt:9100  },
  { id:'rtx4060ti8',  name:'GeForce RTX 4060 Ti 8GB',  brand:'NVIDIA', arch:'Ada Lovelace',  vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-05', tdp:160, raster:15000, rt:9000  },
  { id:'rtx4060',     name:'GeForce RTX 4060',         brand:'NVIDIA', arch:'Ada Lovelace',  vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-06', tdp:115, raster:11600, rt:5600  },

  /* ===== NVIDIA · Ampere (RTX 30) ===== */
  { id:'rtx3090ti',   name:'GeForce RTX 3090 Ti',      brand:'NVIDIA', arch:'Ampere',        vram:'24GB GDDR6X',  bus:'384-bit',   release:'2022-03', tdp:450, raster:22600, rt:14600 },
  { id:'rtx3090',     name:'GeForce RTX 3090',         brand:'NVIDIA', arch:'Ampere',        vram:'24GB GDDR6X',  bus:'384-bit',   release:'2020-09', tdp:350, raster:20500, rt:13100 },
  { id:'rtx3080ti',   name:'GeForce RTX 3080 Ti',      brand:'NVIDIA', arch:'Ampere',        vram:'12GB GDDR6X',  bus:'384-bit',   release:'2021-06', tdp:350, raster:20100, rt:12600 },
  { id:'rtx308012',   name:'GeForce RTX 3080 12GB',    brand:'NVIDIA', arch:'Ampere',        vram:'12GB GDDR6X',  bus:'384-bit',   release:'2022-01', tdp:350, raster:19000, rt:11300 },
  { id:'rtx3080',     name:'GeForce RTX 3080',         brand:'NVIDIA', arch:'Ampere',        vram:'10GB GDDR6X',  bus:'320-bit',   release:'2020-09', tdp:320, raster:18400, rt:11000 },
  { id:'rtx3070ti',   name:'GeForce RTX 3070 Ti',      brand:'NVIDIA', arch:'Ampere',        vram:'8GB GDDR6X',   bus:'256-bit',   release:'2021-06', tdp:290, raster:16100, rt:8600  },
  { id:'rtx3070',     name:'GeForce RTX 3070',         brand:'NVIDIA', arch:'Ampere',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2020-10', tdp:220, raster:15100, rt:8100  },
  { id:'rtx3060ti',   name:'GeForce RTX 3060 Ti',      brand:'NVIDIA', arch:'Ampere',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2020-12', tdp:200, raster:12500, rt:5600  },
  { id:'rtx3060',     name:'GeForce RTX 3060 12GB',    brand:'NVIDIA', arch:'Ampere',        vram:'12GB GDDR6',   bus:'192-bit',   release:'2021-02', tdp:170, raster:9100,  rt:4300  },
  { id:'rtx3050',     name:'GeForce RTX 3050 8GB',     brand:'NVIDIA', arch:'Ampere',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2022-01', tdp:130, raster:7500,  rt:4300  },

  /* ===== NVIDIA · Turing (RTX 20 / GTX 16) ===== */
  { id:'rtx2080ti',   name:'GeForce RTX 2080 Ti',      brand:'NVIDIA', arch:'Turing',        vram:'11GB GDDR6',   bus:'352-bit',   release:'2018-09', tdp:250, raster:14500, rt:9200  },
  { id:'rtx2080s',    name:'GeForce RTX 2080 SUPER',   brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2019-07', tdp:250, raster:12200, rt:7800  },
  { id:'rtx2080',     name:'GeForce RTX 2080',         brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2018-09', tdp:215, raster:11500, rt:7200  },
  { id:'rtx2070s',    name:'GeForce RTX 2070 SUPER',   brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2019-07', tdp:215, raster:10400, rt:6500  },
  { id:'rtx2070',     name:'GeForce RTX 2070',         brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2018-10', tdp:175, raster:9500,  rt:6000  },
  { id:'rtx2060s',    name:'GeForce RTX 2060 SUPER',   brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2019-07', tdp:175, raster:8900,  rt:5500  },
  { id:'rtx2060',     name:'GeForce RTX 2060',         brand:'NVIDIA', arch:'Turing',        vram:'6GB GDDR6',    bus:'192-bit',   release:'2019-01', tdp:160, raster:8000,  rt:5000  },
  { id:'gtx1660ti',   name:'GeForce GTX 1660 Ti',      brand:'NVIDIA', arch:'Turing',        vram:'6GB GDDR6',    bus:'192-bit',   release:'2019-02', tdp:120, raster:6650,  rt:0     },
  { id:'gtx1660s',    name:'GeForce GTX 1660 SUPER',   brand:'NVIDIA', arch:'Turing',        vram:'6GB GDDR6',    bus:'192-bit',   release:'2019-10', tdp:125, raster:6600,  rt:0     },
  { id:'gtx1660',     name:'GeForce GTX 1660',         brand:'NVIDIA', arch:'Turing',        vram:'6GB GDDR5',    bus:'192-bit',   release:'2019-03', tdp:120, raster:5800,  rt:0     },
  { id:'gtx1650s',    name:'GeForce GTX 1650 SUPER',   brand:'NVIDIA', arch:'Turing',        vram:'4GB GDDR6',    bus:'128-bit',   release:'2019-11', tdp:100, raster:5300,  rt:0     },
  { id:'gtx1650',     name:'GeForce GTX 1650',         brand:'NVIDIA', arch:'Turing',        vram:'4GB GDDR5',    bus:'128-bit',   release:'2019-04', tdp:75,  raster:4600,  rt:0     },

  /* ===== NVIDIA · Pascal (GTX 10) ===== */
  { id:'gtxtitanxp',  name:'GeForce GTX Titan Xp',     brand:'NVIDIA', arch:'Pascal',        vram:'12GB GDDR5X',  bus:'384-bit',   release:'2017-04', tdp:250, raster:10000, rt:0 },
  { id:'gtx1080ti',   name:'GeForce GTX 1080 Ti',      brand:'NVIDIA', arch:'Pascal',        vram:'11GB GDDR5X',  bus:'352-bit',   release:'2017-03', tdp:250, raster:9600,  rt:0 },
  { id:'gtx1080',     name:'GeForce GTX 1080',         brand:'NVIDIA', arch:'Pascal',        vram:'8GB GDDR5X',   bus:'256-bit',   release:'2016-05', tdp:180, raster:7300,  rt:0 },
  { id:'gtx1070ti',   name:'GeForce GTX 1070 Ti',      brand:'NVIDIA', arch:'Pascal',        vram:'8GB GDDR5',    bus:'256-bit',   release:'2017-11', tdp:180, raster:6900,  rt:0 },
  { id:'gtx1070',     name:'GeForce GTX 1070',         brand:'NVIDIA', arch:'Pascal',        vram:'8GB GDDR5',    bus:'256-bit',   release:'2016-06', tdp:150, raster:6100,  rt:0 },
  { id:'gtx1060_6g',  name:'GeForce GTX 1060 6GB',     brand:'NVIDIA', arch:'Pascal',        vram:'6GB GDDR5',    bus:'192-bit',   release:'2016-07', tdp:120, raster:4300,  rt:0 },
  { id:'gtx1060_3g',  name:'GeForce GTX 1060 3GB',     brand:'NVIDIA', arch:'Pascal',        vram:'3GB GDDR5',    bus:'192-bit',   release:'2016-08', tdp:120, raster:3900,  rt:0 },
  { id:'gtx1050ti',   name:'GeForce GTX 1050 Ti',      brand:'NVIDIA', arch:'Pascal',        vram:'4GB GDDR5',    bus:'128-bit',   release:'2016-10', tdp:75,  raster:2500,  rt:0 },
  { id:'gtx1050',     name:'GeForce GTX 1050',         brand:'NVIDIA', arch:'Pascal',        vram:'2GB GDDR5',    bus:'128-bit',   release:'2016-10', tdp:75,  raster:2000,  rt:0 },

  /* ===== NVIDIA · Maxwell (GTX 900 / 750) ===== */
  { id:'gtxtitanx',   name:'GeForce GTX Titan X',      brand:'NVIDIA', arch:'Maxwell',       vram:'12GB GDDR5',   bus:'384-bit',   release:'2015-03', tdp:250, raster:6200, rt:0 },
  { id:'gtx980ti',    name:'GeForce GTX 980 Ti',       brand:'NVIDIA', arch:'Maxwell',       vram:'6GB GDDR5',    bus:'384-bit',   release:'2015-06', tdp:250, raster:5800, rt:0 },
  { id:'gtx980',      name:'GeForce GTX 980',          brand:'NVIDIA', arch:'Maxwell',       vram:'4GB GDDR5',    bus:'256-bit',   release:'2014-09', tdp:165, raster:4800, rt:0 },
  { id:'gtx970',      name:'GeForce GTX 970',          brand:'NVIDIA', arch:'Maxwell',       vram:'4GB GDDR5',    bus:'256-bit',   release:'2014-09', tdp:145, raster:3800, rt:0 },
  { id:'gtx960',      name:'GeForce GTX 960',          brand:'NVIDIA', arch:'Maxwell',       vram:'2GB GDDR5',    bus:'128-bit',   release:'2015-01', tdp:120, raster:2300, rt:0 },
  { id:'gtx750ti',    name:'GeForce GTX 750 Ti',       brand:'NVIDIA', arch:'Maxwell',       vram:'2GB GDDR5',    bus:'128-bit',   release:'2014-02', tdp:60,  raster:1900, rt:0 },

  /* ===== NVIDIA · Kepler (GTX 700 / 600) ===== */
  { id:'gtx780ti',    name:'GeForce GTX 780 Ti',       brand:'NVIDIA', arch:'Kepler',        vram:'3GB GDDR5',    bus:'384-bit',   release:'2013-11', tdp:250, raster:3600, rt:0 },
  { id:'gtxtitan',    name:'GeForce GTX Titan',        brand:'NVIDIA', arch:'Kepler',        vram:'6GB GDDR5',    bus:'384-bit',   release:'2013-02', tdp:250, raster:3400, rt:0 },
  { id:'gtx780',      name:'GeForce GTX 780',          brand:'NVIDIA', arch:'Kepler',        vram:'3GB GDDR5',    bus:'384-bit',   release:'2013-05', tdp:250, raster:3100, rt:0 },
  { id:'gtx770',      name:'GeForce GTX 770',          brand:'NVIDIA', arch:'Kepler',        vram:'2GB GDDR5',    bus:'256-bit',   release:'2013-05', tdp:230, raster:2450, rt:0 },
  { id:'gtx680',      name:'GeForce GTX 680',          brand:'NVIDIA', arch:'Kepler',        vram:'2GB GDDR5',    bus:'256-bit',   release:'2012-03', tdp:195, raster:2150, rt:0 },
  { id:'gtx690',      name:'GeForce GTX 690 (双芯)',   brand:'NVIDIA', arch:'Kepler',        vram:'2×2GB GDDR5',  bus:'2×256-bit', release:'2012-05', tdp:300, raster:3200, rt:0 },

  /* ===== NVIDIA · Fermi (GTX 500 / 400) ===== */
  { id:'gtx590',      name:'GeForce GTX 590 (双芯)',   brand:'NVIDIA', arch:'Fermi',         vram:'2×1.5GB GDDR5',bus:'2×384-bit', release:'2011-03', tdp:365, raster:2350, rt:0 },
  { id:'gtx580',      name:'GeForce GTX 580',          brand:'NVIDIA', arch:'Fermi',         vram:'1.5GB GDDR5',  bus:'384-bit',   release:'2010-11', tdp:244, raster:1450, rt:0 },
  { id:'gtx480',      name:'GeForce GTX 480',          brand:'NVIDIA', arch:'Fermi',         vram:'1.5GB GDDR5',  bus:'384-bit',   release:'2010-03', tdp:250, raster:1150, rt:0 },

  /* ===== AMD · RDNA 4 (RX 9000) ===== */
  { id:'rx9070xt',    name:'Radeon RX 9070 XT',        brand:'AMD',    arch:'RDNA 4',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2025-03', tdp:304, raster:27100, rt:17200 },
  { id:'rx9070',      name:'Radeon RX 9070',           brand:'AMD',    arch:'RDNA 4',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2025-03', tdp:220, raster:24000, rt:14800 },
  { id:'rx9070gre',   name:'Radeon RX 9070 GRE',       brand:'AMD',    arch:'RDNA 4',        vram:'12GB GDDR6',   bus:'192-bit',   release:'2025-05', tdp:220, raster:21000, rt:13000 },
  { id:'rx9060xt16',  name:'Radeon RX 9060 XT 16GB',   brand:'AMD',    arch:'RDNA 4',        vram:'16GB GDDR6',   bus:'128-bit',   release:'2025-06', tdp:160, raster:15100, rt:8100  },
  { id:'rx9060xt8',   name:'Radeon RX 9060 XT 8GB',    brand:'AMD',    arch:'RDNA 4',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2025-06', tdp:150, raster:14900, rt:8000  },

  /* ===== AMD · RDNA 3 (RX 7000) ===== */
  { id:'rx7900xtx',   name:'Radeon RX 7900 XTX',       brand:'AMD',    arch:'RDNA 3',        vram:'24GB GDDR6',   bus:'384-bit',   release:'2022-12', tdp:355, raster:29800, rt:14500 },
  { id:'rx7900xt',    name:'Radeon RX 7900 XT',        brand:'AMD',    arch:'RDNA 3',        vram:'20GB GDDR6',   bus:'320-bit',   release:'2022-12', tdp:315, raster:25600, rt:13100 },
  { id:'rx7900gre',   name:'Radeon RX 7900 GRE',       brand:'AMD',    arch:'RDNA 3',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2024-02', tdp:260, raster:22800, rt:11800 },
  { id:'rx7800xt',    name:'Radeon RX 7800 XT',        brand:'AMD',    arch:'RDNA 3',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2023-09', tdp:263, raster:19100, rt:9600  },
  { id:'rx7700xt',    name:'Radeon RX 7700 XT',        brand:'AMD',    arch:'RDNA 3',        vram:'12GB GDDR6',   bus:'192-bit',   release:'2023-09', tdp:245, raster:16200, rt:8100  },
  { id:'rx7600xt',    name:'Radeon RX 7600 XT',        brand:'AMD',    arch:'RDNA 3',        vram:'16GB GDDR6',   bus:'128-bit',   release:'2024-01', tdp:190, raster:11500, rt:5500  },
  { id:'rx7600',      name:'Radeon RX 7600',           brand:'AMD',    arch:'RDNA 3',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-05', tdp:165, raster:10900, rt:5200  },

  /* ===== AMD · RDNA 2 (RX 6000) ===== */
  { id:'rx6950xt',    name:'Radeon RX 6950 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2022-05', tdp:335, raster:21400, rt:10900 },
  { id:'rx6900xt',    name:'Radeon RX 6900 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2020-12', tdp:300, raster:19500, rt:9900  },
  { id:'rx6800xt',    name:'Radeon RX 6800 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2020-11', tdp:300, raster:18100, rt:8500  },
  { id:'rx6800',      name:'Radeon RX 6800',           brand:'AMD',    arch:'RDNA 2',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2020-11', tdp:250, raster:15800, rt:7400  },
  { id:'rx6750xt',    name:'Radeon RX 6750 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'12GB GDDR6',   bus:'192-bit',   release:'2022-05', tdp:250, raster:14100, rt:6000  },
  { id:'rx6700xt',    name:'Radeon RX 6700 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'12GB GDDR6',   bus:'192-bit',   release:'2021-03', tdp:230, raster:13400, rt:5500  },
  { id:'rx6700',      name:'Radeon RX 6700 10GB',      brand:'AMD',    arch:'RDNA 2',        vram:'10GB GDDR6',   bus:'160-bit',   release:'2021-06', tdp:175, raster:11800, rt:4800  },
  { id:'rx6650xt',    name:'Radeon RX 6650 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2022-05', tdp:180, raster:10700, rt:4400  },
  { id:'rx6600xt',    name:'Radeon RX 6600 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2021-08', tdp:160, raster:9700,  rt:3900  },
  { id:'rx6600',      name:'Radeon RX 6600',           brand:'AMD',    arch:'RDNA 2',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2021-10', tdp:132, raster:8400,  rt:3400  },
  { id:'rx6500xt',    name:'Radeon RX 6500 XT',        brand:'AMD',    arch:'RDNA 2',        vram:'4GB GDDR6',    bus:'64-bit',    release:'2022-01', tdp:107, raster:5000,  rt:1800  },

  /* ===== AMD · RDNA 1 (RX 5000) ===== */
  { id:'rx5700xt',    name:'Radeon RX 5700 XT',        brand:'AMD',    arch:'RDNA 1',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2019-07', tdp:225, raster:9000, rt:0 },
  { id:'rx5700',      name:'Radeon RX 5700',           brand:'AMD',    arch:'RDNA 1',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2019-07', tdp:180, raster:8100, rt:0 },
  { id:'rx5600xt',    name:'Radeon RX 5600 XT',        brand:'AMD',    arch:'RDNA 1',        vram:'6GB GDDR6',    bus:'192-bit',   release:'2020-01', tdp:150, raster:7100, rt:0 },
  { id:'rx5500xt',    name:'Radeon RX 5500 XT 8GB',    brand:'AMD',    arch:'RDNA 1',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2019-12', tdp:130, raster:5200, rt:0 },

  /* ===== AMD · Vega ===== */
  { id:'radeonvii',   name:'Radeon VII',               brand:'AMD',    arch:'Vega 20',       vram:'16GB HBM2',    bus:'4096-bit',  release:'2019-02', tdp:300, raster:8100, rt:0 },
  { id:'rxvega64',    name:'Radeon RX Vega 64',        brand:'AMD',    arch:'Vega 10',       vram:'8GB HBM2',     bus:'2048-bit',  release:'2017-08', tdp:295, raster:6900, rt:0 },
  { id:'rxvega56',    name:'Radeon RX Vega 56',        brand:'AMD',    arch:'Vega 10',       vram:'8GB HBM2',     bus:'2048-bit',  release:'2017-08', tdp:210, raster:6200, rt:0 },

  /* ===== AMD · Polaris (RX 400 / 500) ===== */
  { id:'rx590',       name:'Radeon RX 590',            brand:'AMD',    arch:'Polaris 30',    vram:'8GB GDDR5',    bus:'256-bit',   release:'2018-11', tdp:225, raster:4350, rt:0 },
  { id:'rx580',       name:'Radeon RX 580 8GB',        brand:'AMD',    arch:'Polaris 20',    vram:'8GB GDDR5',    bus:'256-bit',   release:'2017-04', tdp:185, raster:4150, rt:0 },
  { id:'rx570',       name:'Radeon RX 570 4GB',        brand:'AMD',    arch:'Polaris 20',    vram:'4GB GDDR5',    bus:'256-bit',   release:'2017-04', tdp:150, raster:3800, rt:0 },
  { id:'rx480',       name:'Radeon RX 480 8GB',        brand:'AMD',    arch:'Polaris 10',    vram:'8GB GDDR5',    bus:'256-bit',   release:'2016-06', tdp:150, raster:4000, rt:0 },
  { id:'rx470',       name:'Radeon RX 470 4GB',        brand:'AMD',    arch:'Polaris 10',    vram:'4GB GDDR5',    bus:'256-bit',   release:'2016-08', tdp:120, raster:3500, rt:0 },

  /* ===== AMD · Fiji / Hawaii / Tonga ===== */
  { id:'r9furyx',     name:'Radeon R9 Fury X',         brand:'AMD',    arch:'Fiji',          vram:'4GB HBM',      bus:'4096-bit',  release:'2015-06', tdp:275, raster:4700, rt:0 },
  { id:'r9390x',      name:'Radeon R9 390X',           brand:'AMD',    arch:'Grenada',       vram:'8GB GDDR5',    bus:'512-bit',   release:'2015-06', tdp:275, raster:3900, rt:0 },
  { id:'r9390',       name:'Radeon R9 390',            brand:'AMD',    arch:'Grenada',       vram:'8GB GDDR5',    bus:'512-bit',   release:'2015-06', tdp:275, raster:3600, rt:0 },
  { id:'r9290x',      name:'Radeon R9 290X',           brand:'AMD',    arch:'Hawaii',        vram:'4GB GDDR5',    bus:'512-bit',   release:'2013-10', tdp:290, raster:3300, rt:0 },
  { id:'r9290',       name:'Radeon R9 290',            brand:'AMD',    arch:'Hawaii',        vram:'4GB GDDR5',    bus:'512-bit',   release:'2013-11', tdp:250, raster:3120, rt:0 },
  { id:'r9380x',      name:'Radeon R9 380X',           brand:'AMD',    arch:'Tonga',         vram:'4GB GDDR5',    bus:'256-bit',   release:'2015-11', tdp:190, raster:3000, rt:0 },

  /* ===== AMD · GCN 1.0 / VLIW4 ===== */
  { id:'hd7970ghz',   name:'Radeon HD 7970 GHz',       brand:'AMD',    arch:'GCN 1.0',       vram:'3GB GDDR5',    bus:'384-bit',   release:'2012-06', tdp:250, raster:2550, rt:0 },
  { id:'hd7970',      name:'Radeon HD 7970',           brand:'AMD',    arch:'GCN 1.0',       vram:'3GB GDDR5',    bus:'384-bit',   release:'2012-01', tdp:250, raster:2400, rt:0 },
  { id:'hd7950',      name:'Radeon HD 7950',           brand:'AMD',    arch:'GCN 1.0',       vram:'3GB GDDR5',    bus:'384-bit',   release:'2012-01', tdp:200, raster:2100, rt:0 },
  { id:'hd6990',      name:'Radeon HD 6990 (双芯)',    brand:'AMD',    arch:'VLIW4',         vram:'2×2GB GDDR5',  bus:'2×256-bit', release:'2011-03', tdp:375, raster:2200, rt:0 },
  { id:'hd6970',      name:'Radeon HD 6970',           brand:'AMD',    arch:'VLIW4',         vram:'2GB GDDR5',    bus:'256-bit',   release:'2010-12', tdp:250, raster:1500, rt:0 },

  /* ===== Intel Arc ===== */
  { id:'arcb580',     name:'Arc B580',                 brand:'Intel',  arch:'Battlemage',    vram:'12GB GDDR6',   bus:'192-bit',   release:'2024-12', tdp:190, raster:15600, rt:7600  },
  { id:'arcb570',     name:'Arc B570',                 brand:'Intel',  arch:'Battlemage',    vram:'10GB GDDR6',   bus:'160-bit',   release:'2025-01', tdp:150, raster:13200, rt:6400  },
  { id:'arca770',     name:'Arc A770 16GB',            brand:'Intel',  arch:'Alchemist',     vram:'16GB GDDR6',   bus:'256-bit',   release:'2022-10', tdp:225, raster:13600, rt:5800  },
  { id:'arca750',     name:'Arc A750',                 brand:'Intel',  arch:'Alchemist',     vram:'8GB GDDR6',    bus:'256-bit',   release:'2022-10', tdp:225, raster:12700, rt:5400  },
  { id:'arca580',     name:'Arc A580',                 brand:'Intel',  arch:'Alchemist',     vram:'8GB GDDR6',    bus:'256-bit',   release:'2023-10', tdp:185, raster:10800, rt:4300  },
  { id:'arca380',     name:'Arc A380',                 brand:'Intel',  arch:'Alchemist',     vram:'6GB GDDR6',    bus:'96-bit',    release:'2022-06', tdp:75,  raster:4900,  rt:1900  }
];

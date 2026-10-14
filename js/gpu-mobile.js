/* 移动端显卡 — 光栅 = 3DMark Time Spy Graphics，光追 = 3DMark Port Royal */
window.GPU_MOBILE = [
  /* ===== NVIDIA · Blackwell (RTX 50 Laptop) ===== */
  { id:'rtx5090_laptop',     name:'GeForce RTX 5090 Laptop',           brand:'NVIDIA', arch:'Blackwell',     vram:'24GB GDDR7',   bus:'256-bit',   release:'2025-03', tdp:150, raster:25000, rt:16000 },
  { id:'rtx5080_laptop',     name:'GeForce RTX 5080 Laptop',           brand:'NVIDIA', arch:'Blackwell',     vram:'16GB GDDR7',   bus:'256-bit',   release:'2025-03', tdp:150, raster:21000, rt:13500 },
  { id:'rtx5070ti_laptop',   name:'GeForce RTX 5070 Ti Laptop',        brand:'NVIDIA', arch:'Blackwell',     vram:'12GB GDDR7',   bus:'192-bit',   release:'2025-03', tdp:100, raster:17000, rt:10500 },
  { id:'rtx5070_laptop',     name:'GeForce RTX 5070 Laptop',           brand:'NVIDIA', arch:'Blackwell',     vram:'8GB GDDR7',    bus:'128-bit',   release:'2025-04', tdp:90,  raster:13500, rt:8300  },
  { id:'rtx5060_laptop',     name:'GeForce RTX 5060 Laptop',           brand:'NVIDIA', arch:'Blackwell',     vram:'8GB GDDR7',    bus:'128-bit',   release:'2025-04', tdp:85,  raster:10500, rt:6300  },
  { id:'rtx5050_laptop',     name:'GeForce RTX 5050 Laptop',           brand:'NVIDIA', arch:'Blackwell',     vram:'8GB GDDR7',    bus:'128-bit',   release:'2025-04', tdp:70,  raster:8000,  rt:4700  },

  /* ===== NVIDIA · Ada Lovelace (RTX 40 Laptop) ===== */
  { id:'rtx4090_laptop',     name:'GeForce RTX 4090 Laptop',           brand:'NVIDIA', arch:'Ada Lovelace',  vram:'16GB GDDR6',   bus:'256-bit',   release:'2023-02', tdp:150, raster:22000, rt:14000 },
  { id:'rtx4080_laptop',     name:'GeForce RTX 4080 Laptop',           brand:'NVIDIA', arch:'Ada Lovelace',  vram:'12GB GDDR6',   bus:'192-bit',   release:'2023-02', tdp:150, raster:19000, rt:11500 },
  { id:'rtx4070_laptop',     name:'GeForce RTX 4070 Laptop',           brand:'NVIDIA', arch:'Ada Lovelace',  vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-02', tdp:115, raster:13500, rt:8200  },
  { id:'rtx4060_laptop',     name:'GeForce RTX 4060 Laptop',           brand:'NVIDIA', arch:'Ada Lovelace',  vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-02', tdp:105, raster:10500, rt:6300  },
  { id:'rtx4050_laptop',     name:'GeForce RTX 4050 Laptop',           brand:'NVIDIA', arch:'Ada Lovelace',  vram:'6GB GDDR6',    bus:'96-bit',    release:'2023-02', tdp:95,  raster:7500,  rt:4400  },

  /* ===== NVIDIA · Ampere (RTX 30 Laptop) ===== */
  { id:'rtx3080ti_laptop',   name:'GeForce RTX 3080 Ti Laptop',        brand:'NVIDIA', arch:'Ampere',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2022-02', tdp:150, raster:12500, rt:7600  },
  { id:'rtx3080_laptop',     name:'GeForce RTX 3080 Laptop',           brand:'NVIDIA', arch:'Ampere',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2021-01', tdp:135, raster:11800, rt:7200  },
  { id:'rtx3070ti_laptop',   name:'GeForce RTX 3070 Ti Laptop',        brand:'NVIDIA', arch:'Ampere',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2022-02', tdp:125, raster:10800, rt:6600  },
  { id:'rtx3070_laptop',     name:'GeForce RTX 3070 Laptop',           brand:'NVIDIA', arch:'Ampere',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2021-01', tdp:115, raster:10000, rt:6100  },
  { id:'rtx3060_laptop',     name:'GeForce RTX 3060 Laptop',           brand:'NVIDIA', arch:'Ampere',        vram:'6GB GDDR6',    bus:'192-bit',   release:'2021-01', tdp:105, raster:8500,  rt:5100  },
  { id:'rtx3050ti_laptop',   name:'GeForce RTX 3050 Ti Laptop',        brand:'NVIDIA', arch:'Ampere',        vram:'4GB GDDR6',    bus:'128-bit',   release:'2021-05', tdp:75,  raster:7000,  rt:4100  },
  { id:'rtx3050_laptop',     name:'GeForce RTX 3050 Laptop',           brand:'NVIDIA', arch:'Ampere',        vram:'4GB GDDR6',    bus:'128-bit',   release:'2021-05', tdp:65,  raster:6200,  rt:3600  },

  /* ===== NVIDIA · Turing (RTX 20 Laptop) ===== */
  { id:'rtx2080super_laptop',name:'GeForce RTX 2080 Super Laptop',     brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2020-04', tdp:150, raster:9200,  rt:5600  },
  { id:'rtx2080_laptop',     name:'GeForce RTX 2080 Laptop',           brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2019-01', tdp:150, raster:8600,  rt:5200  },
  { id:'rtx2070super_laptop',name:'GeForce RTX 2070 Super Laptop',     brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2020-04', tdp:115, raster:8200,  rt:5000  },
  { id:'rtx2070_laptop',     name:'GeForce RTX 2070 Laptop',           brand:'NVIDIA', arch:'Turing',        vram:'8GB GDDR6',    bus:'256-bit',   release:'2019-01', tdp:115, raster:7800,  rt:4700  },
  { id:'rtx2060_laptop',     name:'GeForce RTX 2060 Laptop',           brand:'NVIDIA', arch:'Turing',        vram:'6GB GDDR6',    bus:'192-bit',   release:'2019-01', tdp:90,  raster:6500,  rt:3900  },

  /* ===== NVIDIA · Turing (GTX 16 Laptop) ===== */
  { id:'gtx1660ti_laptop',   name:'GeForce GTX 1660 Ti Laptop',        brand:'NVIDIA', arch:'Turing',        vram:'6GB GDDR6',    bus:'192-bit',   release:'2019-04', tdp:80,  raster:5800,  rt:0     },
  { id:'gtx1650ti_laptop',   name:'GeForce GTX 1650 Ti Laptop',        brand:'NVIDIA', arch:'Turing',        vram:'4GB GDDR6',    bus:'128-bit',   release:'2020-04', tdp:55,  raster:4300,  rt:0     },
  { id:'gtx1650_laptop',     name:'GeForce GTX 1650 Laptop',           brand:'NVIDIA', arch:'Turing',        vram:'4GB GDDR5',    bus:'128-bit',   release:'2019-04', tdp:50,  raster:3600,  rt:0     },

  /* ===== NVIDIA · Pascal (GTX 10 Laptop) ===== */
  { id:'gtx1080_laptop',     name:'GeForce GTX 1080 Laptop',           brand:'NVIDIA', arch:'Pascal',        vram:'8GB GDDR5X',   bus:'256-bit',   release:'2016-08', tdp:150, raster:6200,  rt:0     },
  { id:'gtx1070_laptop',     name:'GeForce GTX 1070 Laptop',           brand:'NVIDIA', arch:'Pascal',        vram:'8GB GDDR5',    bus:'256-bit',   release:'2016-08', tdp:115, raster:5200,  rt:0     },
  { id:'gtx1080_maxq_laptop',name:'GeForce GTX 1080 Max-Q Laptop',     brand:'NVIDIA', arch:'Pascal',        vram:'8GB GDDR5X',   bus:'256-bit',   release:'2017-06', tdp:90,  raster:5000,  rt:0     },
  { id:'gtx1070_maxq_laptop',name:'GeForce GTX 1070 Max-Q Laptop',     brand:'NVIDIA', arch:'Pascal',        vram:'8GB GDDR5',    bus:'256-bit',   release:'2017-06', tdp:85,  raster:4200,  rt:0     },
  { id:'gtx1060_laptop',     name:'GeForce GTX 1060 Laptop',           brand:'NVIDIA', arch:'Pascal',        vram:'6GB GDDR5',    bus:'192-bit',   release:'2016-08', tdp:80,  raster:3800,  rt:0     },
  { id:'gtx1060_maxq_laptop',name:'GeForce GTX 1060 Max-Q Laptop',     brand:'NVIDIA', arch:'Pascal',        vram:'6GB GDDR5',    bus:'192-bit',   release:'2017-06', tdp:60,  raster:3100,  rt:0     },
  { id:'gtx1050ti_laptop',   name:'GeForce GTX 1050 Ti Laptop',        brand:'NVIDIA', arch:'Pascal',        vram:'4GB GDDR5',    bus:'128-bit',   release:'2017-01', tdp:60,  raster:2400,  rt:0     },
  { id:'gtx1050_laptop',     name:'GeForce GTX 1050 Laptop',           brand:'NVIDIA', arch:'Pascal',        vram:'4GB GDDR5',    bus:'128-bit',   release:'2017-01', tdp:50,  raster:2100,  rt:0     },

  /* ===== NVIDIA · Maxwell (GTX 900M) ===== */
  { id:'gtx980m',            name:'GeForce GTX 980M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'8GB GDDR5',    bus:'256-bit',   release:'2014-10', tdp:100, raster:3400,  rt:0     },
  { id:'gtx970m',            name:'GeForce GTX 970M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'6GB GDDR5',    bus:'192-bit',   release:'2014-10', tdp:80,  raster:2600,  rt:0     },
  { id:'gtx960m',            name:'GeForce GTX 960M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2015-03', tdp:60,  raster:1800,  rt:0     },
  { id:'gtx950m',            name:'GeForce GTX 950M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2015-03', tdp:45,  raster:1400,  rt:0     },

  /* ===== NVIDIA · Maxwell (GTX 800M) ===== */
  { id:'gtx880m',            name:'GeForce GTX 880M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'8GB GDDR5',    bus:'256-bit',   release:'2014-03', tdp:103, raster:2500,  rt:0     },
  { id:'gtx870m',            name:'GeForce GTX 870M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'6GB GDDR5',    bus:'192-bit',   release:'2014-03', tdp:100, raster:2100,  rt:0     },
  { id:'gtx860m',            name:'GeForce GTX 860M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2014-03', tdp:75,  raster:1700,  rt:0     },
  { id:'gtx850m',            name:'GeForce GTX 850M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2014-03', tdp:45,  raster:1300,  rt:0     },
  { id:'gtx840m',            name:'GeForce GTX 840M',                  brand:'NVIDIA', arch:'Maxwell',       vram:'2GB DDR3',     bus:'64-bit',    release:'2014-03', tdp:33,  raster:900,   rt:0     },

  /* ===== NVIDIA · Kepler (GTX 700M) ===== */
  { id:'gtx780m',            name:'GeForce GTX 780M',                  brand:'NVIDIA', arch:'Kepler',        vram:'4GB GDDR5',    bus:'256-bit',   release:'2013-04', tdp:100, raster:2100,  rt:0     },
  { id:'gtx770m',            name:'GeForce GTX 770M',                  brand:'NVIDIA', arch:'Kepler',        vram:'3GB GDDR5',    bus:'192-bit',   release:'2013-04', tdp:75,  raster:1600,  rt:0     },
  { id:'gtx765m',            name:'GeForce GTX 765M',                  brand:'NVIDIA', arch:'Kepler',        vram:'2GB GDDR5',    bus:'128-bit',   release:'2013-04', tdp:60,  raster:1300,  rt:0     },
  { id:'gtx760m',            name:'GeForce GTX 760M',                  brand:'NVIDIA', arch:'Kepler',        vram:'2GB GDDR5',    bus:'128-bit',   release:'2013-04', tdp:50,  raster:1100,  rt:0     },

  /* ===== AMD · RDNA 3 (RX 7000M / 7000S) ===== */
  { id:'rx7900m',            name:'Radeon RX 7900M',                   brand:'AMD',    arch:'RDNA 3',        vram:'16GB GDDR6',   bus:'256-bit',   release:'2023-10', tdp:180, raster:16000, rt:8000  },
  { id:'rx7700s',            name:'Radeon RX 7700S',                   brand:'AMD',    arch:'RDNA 3',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-01', tdp:100, raster:9500,  rt:4800  },
  { id:'rx7600mxt',          name:'Radeon RX 7600M XT',                brand:'AMD',    arch:'RDNA 3',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-05', tdp:120, raster:9000,  rt:4600  },
  { id:'rx7600m',            name:'Radeon RX 7600M',                   brand:'AMD',    arch:'RDNA 3',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-05', tdp:90,  raster:7000,  rt:3600  },
  { id:'rx7600s',            name:'Radeon RX 7600S',                   brand:'AMD',    arch:'RDNA 3',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2023-01', tdp:75,  raster:6900,  rt:3500  },

  /* ===== AMD · RDNA 2 (RX 6000M) ===== */
  { id:'rx6850mxt',          name:'Radeon RX 6850M XT',                brand:'AMD',    arch:'RDNA 2',        vram:'12GB GDDR6',   bus:'192-bit',   release:'2022-01', tdp:165, raster:13000, rt:6500  },
  { id:'rx6800m',            name:'Radeon RX 6800M',                   brand:'AMD',    arch:'RDNA 2',        vram:'12GB GDDR6',   bus:'192-bit',   release:'2021-06', tdp:145, raster:12000, rt:6000  },
  { id:'rx6700m',            name:'Radeon RX 6700M',                   brand:'AMD',    arch:'RDNA 2',        vram:'10GB GDDR6',   bus:'160-bit',   release:'2021-06', tdp:135, raster:9500,  rt:4800  },
  { id:'rx6600m',            name:'Radeon RX 6600M',                   brand:'AMD',    arch:'RDNA 2',        vram:'8GB GDDR6',    bus:'128-bit',   release:'2021-06', tdp:100, raster:7000,  rt:3500  },
  { id:'rx6500m',            name:'Radeon RX 6500M',                   brand:'AMD',    arch:'RDNA 2',        vram:'4GB GDDR6',    bus:'64-bit',    release:'2022-01', tdp:50,  raster:4200,  rt:2100  },
  { id:'rx6300m',            name:'Radeon RX 6300M',                   brand:'AMD',    arch:'RDNA 2',        vram:'2GB GDDR6',    bus:'64-bit',    release:'2022-01', tdp:25,  raster:3000,  rt:1500  },

  /* ===== AMD · RDNA (RX 5000M) ===== */
  { id:'rx5600m',            name:'Radeon RX 5600M',                   brand:'AMD',    arch:'RDNA',          vram:'6GB HBM2',     bus:'192-bit',   release:'2020-06', tdp:95,  raster:5500,  rt:0     },
  { id:'rx5500m',            name:'Radeon RX 5500M',                   brand:'AMD',    arch:'RDNA',          vram:'4GB GDDR6',    bus:'128-bit',   release:'2019-10', tdp:85,  raster:4500,  rt:0     },
  { id:'rx5300m',            name:'Radeon RX 5300M',                   brand:'AMD',    arch:'RDNA',          vram:'3GB GDDR6',    bus:'96-bit',    release:'2019-10', tdp:65,  raster:3000,  rt:0     },

  /* ===== AMD · Polaris (RX 400M / 500M) ===== */
  { id:'rx580m',             name:'Radeon RX 580M',                    brand:'AMD',    arch:'Polaris',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2016-06', tdp:65,  raster:2600,  rt:0     },
  { id:'rx570m',             name:'Radeon RX 570M',                    brand:'AMD',    arch:'Polaris',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2016-06', tdp:50,  raster:2200,  rt:0     },
  { id:'rx560x',             name:'Radeon RX 560X',                    brand:'AMD',    arch:'Polaris',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2018-04', tdp:45,  raster:1600,  rt:0     },
  { id:'rx550_laptop',       name:'Radeon RX 550 Laptop',              brand:'AMD',    arch:'Polaris',       vram:'4GB GDDR5',    bus:'128-bit',   release:'2017-04', tdp:35,  raster:1200,  rt:0     },

  /* ===== AMD · GCN (R9 M / R7 M) ===== */
  { id:'r9_m485x',           name:'Radeon R9 M485X',                   brand:'AMD',    arch:'GCN 3.0',       vram:'4GB GDDR5',    bus:'256-bit',   release:'2016-04', tdp:100, raster:2400,  rt:0     },
  { id:'r9_m390x',           name:'Radeon R9 M390X',                   brand:'AMD',    arch:'GCN 3.0',       vram:'4GB GDDR5',    bus:'256-bit',   release:'2015-05', tdp:125, raster:2100,  rt:0     },
  { id:'r9_m290x',           name:'Radeon R9 M290X',                   brand:'AMD',    arch:'GCN 1.0',       vram:'4GB GDDR5',    bus:'256-bit',   release:'2014-02', tdp:100, raster:1700,  rt:0     },
  { id:'r7_m370',            name:'Radeon R7 M370',                    brand:'AMD',    arch:'GCN 1.0',       vram:'2GB GDDR5',    bus:'128-bit',   release:'2015-06', tdp:35,  raster:800,   rt:0     },

  /* ===== Intel · Alchemist (Arc A-Series Mobile) ===== */
  { id:'arc_a770m',          name:'Intel Arc A770M',                   brand:'Intel',  arch:'Alchemist',     vram:'16GB GDDR6',   bus:'256-bit',   release:'2022-06', tdp:150, raster:10000, rt:4500  },
  { id:'arc_a730m',          name:'Intel Arc A730M',                   brand:'Intel',  arch:'Alchemist',     vram:'12GB GDDR6',   bus:'192-bit',   release:'2022-06', tdp:120, raster:8200,  rt:3700  },
  { id:'arc_a550m',          name:'Intel Arc A550M',                   brand:'Intel',  arch:'Alchemist',     vram:'8GB GDDR6',    bus:'128-bit',   release:'2022-06', tdp:80,  raster:6200,  rt:2700  },
  { id:'arc_a370m',          name:'Intel Arc A370M',                   brand:'Intel',  arch:'Alchemist',     vram:'4GB GDDR6',    bus:'64-bit',    release:'2022-04', tdp:50,  raster:4500,  rt:1900  },
  { id:'arc_a350m',          name:'Intel Arc A350M',                   brand:'Intel',  arch:'Alchemist',     vram:'4GB GDDR6',    bus:'64-bit',    release:'2022-04', tdp:35,  raster:3600,  rt:1500  },

  /* ===== Apple Silicon (统一内存架构，无独立光追硬件单元) ===== */
  { id:'m4_max',             name:'Apple M4 Max',                      brand:'Apple',  arch:'Apple M4',      vram:'统一内存',     bus:'统一内存架构', release:'2024-10', tdp:70,  raster:15000, rt:0     },
  { id:'m4_pro',             name:'Apple M4 Pro',                      brand:'Apple',  arch:'Apple M4',      vram:'统一内存',     bus:'统一内存架构', release:'2024-10', tdp:45,  raster:9000,  rt:0     },
  { id:'m4',                 name:'Apple M4',                          brand:'Apple',  arch:'Apple M4',      vram:'统一内存',     bus:'统一内存架构', release:'2024-05', tdp:25,  raster:4500,  rt:0     },
  { id:'m3_max',             name:'Apple M3 Max',                      brand:'Apple',  arch:'Apple M3',      vram:'统一内存',     bus:'统一内存架构', release:'2023-10', tdp:65,  raster:12000, rt:0     },
  { id:'m3_pro',             name:'Apple M3 Pro',                      brand:'Apple',  arch:'Apple M3',      vram:'统一内存',     bus:'统一内存架构', release:'2023-10', tdp:40,  raster:6500,  rt:0     },
  { id:'m3',                 name:'Apple M3',                          brand:'Apple',  arch:'Apple M3',      vram:'统一内存',     bus:'统一内存架构', release:'2023-10', tdp:22,  raster:3500,  rt:0     },
  { id:'m2_ultra',           name:'Apple M2 Ultra',                    brand:'Apple',  arch:'Apple M2',      vram:'统一内存',     bus:'统一内存架构', release:'2023-06', tdp:120, raster:17000, rt:0     },
  { id:'m2_max',             name:'Apple M2 Max',                      brand:'Apple',  arch:'Apple M2',      vram:'统一内存',     bus:'统一内存架构', release:'2023-01', tdp:60,  raster:9000,  rt:0     },
  { id:'m2_pro',             name:'Apple M2 Pro',                      brand:'Apple',  arch:'Apple M2',      vram:'统一内存',     bus:'统一内存架构', release:'2023-01', tdp:35,  raster:5000,  rt:0     },
  { id:'m2',                 name:'Apple M2',                          brand:'Apple',  arch:'Apple M2',      vram:'统一内存',     bus:'统一内存架构', release:'2022-06', tdp:20,  raster:2800,  rt:0     },
  { id:'m1_ultra',           name:'Apple M1 Ultra',                    brand:'Apple',  arch:'Apple M1',      vram:'统一内存',     bus:'统一内存架构', release:'2022-03', tdp:120, raster:13000, rt:0     },
  { id:'m1_max',             name:'Apple M1 Max',                      brand:'Apple',  arch:'Apple M1',      vram:'统一内存',     bus:'统一内存架构', release:'2021-10', tdp:60,  raster:7500,  rt:0     },
  { id:'m1_pro',             name:'Apple M1 Pro',                      brand:'Apple',  arch:'Apple M1',      vram:'统一内存',     bus:'统一内存架构', release:'2021-10', tdp:30,  raster:4500,  rt:0     },
  { id:'m1',                 name:'Apple M1',                          brand:'Apple',  arch:'Apple M1',      vram:'统一内存',     bus:'统一内存架构', release:'2020-11', tdp:20,  raster:2200,  rt:0     }
];

/* 桌面端显卡补充 — 来源：第三方天梯站抓取数据 + 分数换算 */
window.GPU_DESKTOP_2 = [
  /* ===== NVIDIA · Turing (RTX 20 / GTX 16) ===== */
  { id:'titanrtx',    name:'NVIDIA TITAN RTX',          brand:'NVIDIA', arch:'Turing',        kind:'dgpu', vram:'24GB GDDR6',   bus:'384-bit',   release:'2018-12', tdp:280, raster:15600, rt:9500  },
  { id:'rtx2060_12g', name:'GeForce RTX 2060 12GB',     brand:'NVIDIA', arch:'Turing',        kind:'dgpu', vram:'12GB GDDR6',   bus:'192-bit',   release:'2021-12', tdp:185, raster:8400,  rt:5200  },
  { id:'gtx1630',     name:'GeForce GTX 1630',          brand:'NVIDIA', arch:'Turing',        kind:'dgpu', vram:'4GB GDDR6',    bus:'64-bit',    release:'2022-06', tdp:75,  raster:2050,  rt:0     },

  /* ===== NVIDIA · Volta ===== */
  { id:'titanv',      name:'NVIDIA Titan V',            brand:'NVIDIA', arch:'Volta',         kind:'dgpu', vram:'12GB HBM2',    bus:'3072-bit',  release:'2017-12', tdp:250, raster:12000, rt:0     },

  /* ===== NVIDIA · Ampere ===== */
  { id:'rtx2050',     name:'GeForce RTX 2050',          brand:'NVIDIA', arch:'Ampere',        kind:'dgpu', vram:'4GB GDDR6',    bus:'64-bit',    release:'2021-12', tdp:30,  raster:5200,  rt:2600  },

  /* ===== NVIDIA · Pascal (GTX 10) ===== */
  { id:'gtx1050_3g',  name:'GeForce GTX 1050 3GB',      brand:'NVIDIA', arch:'Pascal',        kind:'dgpu', vram:'3GB GDDR5',    bus:'96-bit',    release:'2018-05', tdp:75,  raster:2200,  rt:0     },
  { id:'gt1030',      name:'GeForce GT 1030',           brand:'NVIDIA', arch:'Pascal',        kind:'dgpu', vram:'2GB GDDR5',    bus:'64-bit',    release:'2017-05', tdp:30,  raster:1400,  rt:0     },
  { id:'gt1010',      name:'GeForce GT 1010',           brand:'NVIDIA', arch:'Pascal',        kind:'dgpu', vram:'2GB GDDR5',    bus:'64-bit',    release:'2021-01', tdp:30,  raster:750,   rt:0     },

  /* ===== NVIDIA · Maxwell (GTX 900 / 700) ===== */
  { id:'gtx950',      name:'GeForce GTX 950',           brand:'NVIDIA', arch:'Maxwell',       kind:'dgpu', vram:'2GB GDDR5',    bus:'128-bit',   release:'2015-08', tdp:90,  raster:1950,  rt:0     },
  { id:'gtx745',      name:'GeForce GTX 745',           brand:'NVIDIA', arch:'Maxwell',       kind:'dgpu', vram:'4GB DDR3',     bus:'128-bit',   release:'2014-02', tdp:55,  raster:1050,  rt:0     },

  /* ===== NVIDIA · Kepler (GTX 700 / 600) ===== */
  { id:'gtx760',      name:'GeForce GTX 760',           brand:'NVIDIA', arch:'Kepler',        kind:'dgpu', vram:'2GB GDDR5',    bus:'256-bit',   release:'2013-06', tdp:170, raster:2050,  rt:0     },
  { id:'gtx660',      name:'GeForce GTX 660',           brand:'NVIDIA', arch:'Kepler',        kind:'dgpu', vram:'2GB GDDR5',    bus:'192-bit',   release:'2012-09', tdp:140, raster:1600,  rt:0     },

  /* ===== NVIDIA · Fermi (GTX 500) ===== */
  { id:'gtx570',      name:'GeForce GTX 570',           brand:'NVIDIA', arch:'Fermi',         kind:'dgpu', vram:'1.25GB GDDR5', bus:'320-bit',   release:'2010-12', tdp:219, raster:1250,  rt:0     },

  /* ===== AMD · Vega ===== */
  { id:'vegafrontier',name:'Radeon Vega Frontier Edition', brand:'AMD', arch:'Vega 10',       kind:'dgpu', vram:'16GB HBM2',    bus:'2048-bit',  release:'2017-06', tdp:300, raster:6800,  rt:0     },

  /* ===== AMD · RDNA 2 (RX 6000) ===== */
  { id:'rx6400',      name:'Radeon RX 6400',            brand:'AMD',    arch:'RDNA 2',        kind:'dgpu', vram:'4GB GDDR6',    bus:'64-bit',    release:'2022-04', tdp:53,  raster:3900,  rt:1300  },

  /* ===== AMD · RDNA 1 (RX 5000) ===== */
  { id:'rx5500',      name:'Radeon RX 5500',            brand:'AMD',    arch:'RDNA 1',        kind:'dgpu', vram:'4GB GDDR6',    bus:'128-bit',   release:'2019-10', tdp:110, raster:4700,  rt:0     },
  { id:'rx5300',      name:'Radeon RX 5300',            brand:'AMD',    arch:'RDNA 1',        kind:'dgpu', vram:'3GB GDDR6',    bus:'96-bit',    release:'2020-08', tdp:100, raster:4400,  rt:0     },

  /* ===== AMD · Polaris (RX 400 / 500) ===== */
  { id:'rx590gme',    name:'Radeon RX 590 GME',         brand:'AMD',    arch:'Polaris 20',    kind:'dgpu', vram:'8GB GDDR5',    bus:'256-bit',   release:'2020-03', tdp:185, raster:4100,  rt:0     },
  { id:'rx580_2048sp',name:'Radeon RX 580 2048SP',      brand:'AMD',    arch:'Polaris 20',    kind:'dgpu', vram:'8GB GDDR5',    bus:'256-bit',   release:'2018-10', tdp:185, raster:3750,  rt:0     },
  { id:'rx560xt',     name:'Radeon RX 560 XT',          brand:'AMD',    arch:'Polaris 20',    kind:'dgpu', vram:'4GB GDDR5',    bus:'256-bit',   release:'2019-03', tdp:150, raster:3500,  rt:0     },
  { id:'rx470d',      name:'Radeon RX 470D',            brand:'AMD',    arch:'Polaris 10',    kind:'dgpu', vram:'4GB GDDR5',    bus:'256-bit',   release:'2016-10', tdp:110, raster:3200,  rt:0     },
  { id:'rx560',       name:'Radeon RX 560',             brand:'AMD',    arch:'Polaris 11',    kind:'dgpu', vram:'4GB GDDR5',    bus:'128-bit',   release:'2017-05', tdp:80,  raster:2300,  rt:0     },
  { id:'rx550',       name:'Radeon RX 550',             brand:'AMD',    arch:'Polaris 12',    kind:'dgpu', vram:'4GB GDDR5',    bus:'128-bit',   release:'2017-04', tdp:50,  raster:2000,  rt:0     },

  /* ===== AMD · Fiji ===== */
  { id:'r9fury',      name:'Radeon R9 Fury',            brand:'AMD',    arch:'Fiji',          kind:'dgpu', vram:'4GB HBM',      bus:'4096-bit',  release:'2015-07', tdp:275, raster:4400,  rt:0     },
  { id:'r9nano',      name:'Radeon R9 Nano',            brand:'AMD',    arch:'Fiji',          kind:'dgpu', vram:'4GB HBM',      bus:'4096-bit',  release:'2015-08', tdp:175, raster:4300,  rt:0     },

  /* ===== AMD · Tonga / Tahiti ===== */
  { id:'r9285',       name:'Radeon R9 285',             brand:'AMD',    arch:'Tonga',         kind:'dgpu', vram:'2GB GDDR5',    bus:'256-bit',   release:'2014-09', tdp:190, raster:2900,  rt:0     },
  { id:'r9380',       name:'Radeon R9 380',             brand:'AMD',    arch:'Tonga',         kind:'dgpu', vram:'4GB GDDR5',    bus:'256-bit',   release:'2015-06', tdp:190, raster:2800,  rt:0     },
  { id:'r9280x',      name:'Radeon R9 280X',            brand:'AMD',    arch:'Tahiti',        kind:'dgpu', vram:'3GB GDDR5',    bus:'384-bit',   release:'2013-10', tdp:250, raster:2650,  rt:0     },
  { id:'r9280',       name:'Radeon R9 280',             brand:'AMD',    arch:'Tahiti',        kind:'dgpu', vram:'3GB GDDR5',    bus:'384-bit',   release:'2014-03', tdp:200, raster:2150,  rt:0     },

  /* ===== AMD · Pitcairn ===== */
  { id:'r9270x',      name:'Radeon R9 270X',            brand:'AMD',    arch:'Pitcairn',      kind:'dgpu', vram:'2GB GDDR5',    bus:'256-bit',   release:'2013-10', tdp:180, raster:1900,  rt:0     },
  { id:'r7370',       name:'Radeon R7 370',             brand:'AMD',    arch:'Pitcairn',      kind:'dgpu', vram:'4GB GDDR5',    bus:'256-bit',   release:'2015-06', tdp:110, raster:1550,  rt:0     },

  /* ===== AMD · GCN 1.1 ===== */
  { id:'r7260x',      name:'Radeon R7 260X',            brand:'AMD',    arch:'GCN 1.1',       kind:'dgpu', vram:'2GB GDDR5',    bus:'128-bit',   release:'2013-10', tdp:115, raster:1250,  rt:0     },
  { id:'r7360',       name:'Radeon R7 360',             brand:'AMD',    arch:'GCN 1.1',       kind:'dgpu', vram:'2GB GDDR5',    bus:'128-bit',   release:'2015-06', tdp:100, raster:1150,  rt:0     },

  /* ===== AMD · GCN 1.0 ===== */
  { id:'hd7990',      name:'Radeon HD 7990 (双芯)',     brand:'AMD',    arch:'GCN 1.0',       kind:'dgpu', vram:'2×3GB GDDR5',  bus:'2×384-bit', release:'2013-04', tdp:375, raster:3800,  rt:0     },
  { id:'hd7870ghz',   name:'Radeon HD 7870 GHz',        brand:'AMD',    arch:'GCN 1.0',       kind:'dgpu', vram:'2GB GDDR5',    bus:'256-bit',   release:'2012-03', tdp:175, raster:1750,  rt:0     },
  { id:'hd7850',      name:'Radeon HD 7850',            brand:'AMD',    arch:'GCN 1.0',       kind:'dgpu', vram:'2GB GDDR5',    bus:'256-bit',   release:'2012-03', tdp:130, raster:1500,  rt:0     },

  /* ===== AMD · TeraScale 2 (VLIW5) ===== */
  { id:'hd6870',      name:'Radeon HD 6870',            brand:'AMD',    arch:'VLIW5',         kind:'dgpu', vram:'1GB GDDR5',    bus:'256-bit',   release:'2010-10', tdp:151, raster:1250,  rt:0     },
  { id:'hd6850',      name:'Radeon HD 6850',            brand:'AMD',    arch:'VLIW5',         kind:'dgpu', vram:'1GB GDDR5',    bus:'256-bit',   release:'2010-10', tdp:127, raster:1050,  rt:0     },
  { id:'hd5970',      name:'Radeon HD 5970 (双芯)',     brand:'AMD',    arch:'VLIW5',         kind:'dgpu', vram:'2×1GB GDDR5',  bus:'2×256-bit', release:'2009-11', tdp:294, raster:1650,  rt:0     },

  /* ===== Intel Arc ===== */
  { id:'arca310',     name:'Arc A310',                  brand:'Intel',  arch:'Alchemist',     kind:'dgpu', vram:'4GB GDDR6',    bus:'64-bit',    release:'2022-10', tdp:75,  raster:3200,  rt:1200  }
];

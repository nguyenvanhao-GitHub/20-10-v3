/**
 * 20/10 - CẢ MỘT VƯỜN THƯƠNG (DÀNH TẶNG THU PHƯƠNG)
 * Repository: https://github.com/nguyenvanhao-GitHub/20-10-v3.git
 * Ảnh cận mặt rõ nét, sắc sảo, đan xen cành lá tự nhiên chuẩn ảnh 2 mẫu.
 */

// =============================================================================
// 1. DỮ LIỆU KỶ NIỆM VÀ LỜI CHÚC DÀNH CHO THU PHƯƠNG (12 KHOẢNH KHẮC)
// =============================================================================
const PHUONG_CONFIG = {
  id: 'phuong',
  name: 'Thu Phương',
  shortName: 'Phương',
  title: 'Nàng Công Chúa Thu Phương 🌷',
  flowerType: 'rose-peach',
  brandHeader: 'Dành Thu Phương, cả một vườn thương.',
  introTitle: 'Gửi nàng công chúa dịu dàng Thu Phương...',
  introSubtitle: 'Chạm vào hoa, một điều dịu dàng đang chờ Phương ✨',
  bloomingSubtitle: 'Cả khu vườn hoa tươi thắm đang thức giấc vì Phương...',
  cardRecipient: 'Gửi Thu Phương thương mến,',
  cardGreetingTitle: 'Mong những điều ngọt ngào nhất<br>luôn nở bên Phương.',
  cardLetter: [
    'Một bông hoa có thể làm một ngày thêm tươi sáng.',
    'Còn vẻ đẹp dịu dàng của Phương làm cuộc sống này thêm thi vị và đáng yêu.',
    'Nhân ngày 20/10 chúc Phương luôn xinh đẹp như hoa, duyên dáng, đáng yêu và mãi giữ trọn nét tươi vui, hồn nhiên.',
    'Chúc Phương đón nhận muôn vàn quà tặng ngọt ngào, công việc thuận lợi và vạn sự như ý! 💕'
  ],
  cardClosing: 'Thương gửi Phương ngàn đóa hoa thơm ngát ♡',
  themeColor: '#e0689b',
  avatarPreview: 'assets/phuong/avatar-01.png',
  photos: [
    {
      id: 1,
      title: 'Nụ Cười Đáng Yêu',
      badge: '👑 Dễ Thương Vô Đối 🎀',
      wish: 'Chúc Thu Phương ngày 20/10 ngập tràn niềm vui, nụ cười luôn nở trên môi và gặp thật nhiều may mắn ngọt ngào! 💕',
      thumb: 'assets/phuong/thumb-01.jpg',
      full: 'assets/phuong/photo-01.jpg',
      avatar: 'assets/phuong/avatar-01.png'
    },
    {
      id: 2,
      title: 'Tà Áo Dài Thướt Tha',
      badge: '🌸 Nàng Thơ Dịu Dàng 👑',
      wish: 'Chúc nàng công chúa Thu Phương luôn xinh đẹp, duyên dáng và đón nhận muôn vàn yêu thương trọn vẹn! 🌸👑',
      thumb: 'assets/phuong/thumb-02.jpg',
      full: 'assets/phuong/photo-02.jpg',
      avatar: 'assets/phuong/avatar-02.png'
    },
    {
      id: 3,
      title: 'Bên Nhành Hoa Ly',
      badge: '💐 Thanh Khiết & Kiêu Sa ✨',
      wish: 'Như đóa hoa ly thanh khiết, chúc Phương luôn dịu dàng, an yên và toát lên vẻ đẹp thanh lịch khó quên! 💐✨',
      thumb: 'assets/phuong/thumb-03.jpg',
      full: 'assets/phuong/photo-03.jpg',
      avatar: 'assets/phuong/avatar-03.png'
    },
    {
      id: 4,
      title: 'Góc Nhỏ Bình Yên',
      badge: '🧸 Ấm Áp & Ngọt Ngào 💖',
      wish: 'Chúc bạn luôn có những giây phút thư thái, bình an bên những điều mình yêu thích và luôn được cưng chiều! 🧸💖',
      thumb: 'assets/phuong/thumb-04.jpg',
      full: 'assets/phuong/photo-04.jpg',
      avatar: 'assets/phuong/avatar-04.png'
    },
    {
      id: 5,
      title: 'Năng Động Trẻ Trung',
      badge: '🌿 Năng Lượng Tươi Xanh ☀️',
      wish: 'Chúc Phương luôn tràn đầy năng lượng tươi trẻ, nụ cười rạng rỡ, tự tin sải bước và chinh phục mọi mục tiêu! 🌿☀️',
      thumb: 'assets/phuong/thumb-05.jpg',
      full: 'assets/phuong/photo-05.jpg',
      avatar: 'assets/phuong/avatar-05.png'
    },
    {
      id: 6,
      title: 'Nét Đẹp Tự Nhiên',
      badge: '✨ Tinh Khôi Mắt Biếc 💖',
      wish: 'Chúc đôi mắt bạn luôn lấp lánh niềm vui và nụ cười luôn rạng rỡ trong suốt 365 ngày của năm! ✨',
      thumb: 'assets/phuong/thumb-06.jpg',
      full: 'assets/phuong/photo-06.jpg',
      avatar: 'assets/phuong/avatar-06.png'
    },
    {
      id: 7,
      title: 'Trà Chiều Thơ Mộng',
      badge: '☕ Dịu Ngọt & Thanh Lịch 🌸',
      wish: 'Chúc Phương mỗi ngày trôi qua đều ngọt ngào, thi vị và ngập tràn hạnh phúc dịu êm! ☕🍰',
      thumb: 'assets/phuong/thumb-07.jpg',
      full: 'assets/phuong/photo-07.jpg',
      avatar: 'assets/phuong/avatar-07.png'
    },
    {
      id: 8,
      title: 'Nhí Nhảnh Đáng Yêu',
      badge: '🎀 Hồn Nhiên Yêu Đời 💕',
      wish: 'Chúc bạn mãi giữ trọn vẻ nhí nhảnh, đáng yêu và luôn là niềm vui của những người xung quanh! 🎀💖',
      thumb: 'assets/phuong/thumb-08.jpg',
      full: 'assets/phuong/photo-08.jpg',
      avatar: 'assets/phuong/avatar-08.png'
    },
    {
      id: 9,
      title: 'Nụ Cười Tỏa Nắng',
      badge: '☀️ Rạng Rỡ Say Đắm 🌷',
      wish: 'Chúc nụ cười rạng ngời này sẽ luôn xua tan mọi mỏi mệt và mang lại vạn điều may mắn cho bạn! 🌷',
      thumb: 'assets/phuong/thumb-09.jpg',
      full: 'assets/phuong/photo-09.jpg',
      avatar: 'assets/phuong/avatar-09.png'
    },
    {
      id: 10,
      title: 'Dấu Chân Kỷ Niệm',
      badge: '🏰 Chuyến Đi Thanh Xuân 🌸',
      wish: 'Chúc những chuyến hành trình phía trước của Phương luôn ngập tràn hoa thơm, cảnh đẹp và kỷ niệm đáng nhớ! 🏰🌸',
      thumb: 'assets/phuong/thumb-10.jpg',
      full: 'assets/phuong/photo-10.jpg',
      avatar: 'assets/phuong/avatar-10.png'
    },
    {
      id: 11,
      title: 'Nét Duyên Trong Trẻo',
      badge: '💫 Bình Yên & May Mắn ✨',
      wish: 'Chúc bạn luôn bình an, tâm hồn thanh thản và luôn được bao bọc bởi những tình cảm chân thành nhất! 💫',
      thumb: 'assets/phuong/thumb-11.jpg',
      full: 'assets/phuong/photo-11.jpg',
      avatar: 'assets/phuong/avatar-11.png'
    }
  ]
};

const currentFriend = PHUONG_CONFIG;

// =============================================================================
// 2. BẢNG MÀU PASTEL CHUẨN NGHỆ THUẬT (KHỚP ẢNH 2 MẪU)
// =============================================================================
const COLOR_PALETTES = [
  {
    type: 'pink',
    name: 'Hồng phấn',
    baseLight: '#f8cbd5',
    baseMid: '#eda5b7',
    baseDark: '#d97b98',
    coreColor: '#bb6482',
    lineColor: '#a76079',
    sepalColor: '#2e7d32'
  },
  {
    type: 'peach',
    name: 'Cam đào / Apricot',
    baseLight: '#f9dfca',
    baseMid: '#efbda0',
    baseDark: '#dc957f',
    coreColor: '#bc786c',
    lineColor: '#b37d71',
    sepalColor: '#2e7d32'
  },
  {
    type: 'mint',
    name: 'Xanh bơ / Mint',
    baseLight: '#e0efd2',
    baseMid: '#bddca9',
    baseDark: '#90be83',
    coreColor: '#75a673',
    lineColor: '#77966f',
    sepalColor: '#2e7d32'
  },
  {
    type: 'blue',
    name: 'Lam ngọc / Sky Blue',
    baseLight: '#e1f1f7',
    baseMid: '#b4ddf0',
    baseDark: '#7fbee0',
    coreColor: '#579ac4',
    lineColor: '#6293b1',
    sepalColor: '#2e7d32'
  },
  {
    type: 'cream',
    name: 'Vàng kem bơ',
    baseLight: '#fff5df',
    baseMid: '#f4e4b9',
    baseDark: '#e7cd9b',
    coreColor: '#c9aa79',
    lineColor: '#b9a17f',
    sepalColor: '#2e7d32'
  },
  {
    type: 'lavender',
    name: 'Tím oải hương',
    baseLight: '#f2e4f0',
    baseMid: '#dec6df',
    baseDark: '#bf9dc6',
    coreColor: '#a583ad',
    lineColor: '#9a789e',
    sepalColor: '#2e7d32'
  }
];

const ROSE_IMAGE_SRC = 'assets/rose-pink.png';
const ROSE_COLOR_FILTERS = {
  pink: 'saturate(.88) brightness(1.03)',
  peach: 'hue-rotate(36deg) saturate(.75) brightness(1.08)',
  mint: 'hue-rotate(128deg) saturate(.65) brightness(1.12)',
  blue: 'hue-rotate(215deg) saturate(.70) brightness(1.10)',
  cream: 'hue-rotate(72deg) saturate(.58) brightness(1.12)',
  lavender: 'hue-rotate(298deg) saturate(.68) brightness(1.08)'
};

function createRoseImageHTML(palette) {
  const colorFilter = ROSE_COLOR_FILTERS[palette.type] || 'none';
  return `<img class="rose-bloom-image" src="${ROSE_IMAGE_SRC}" alt="" draggable="false" loading="eager" decoding="async" style="filter: ${colorFilter}">`;
}

const BUD_IMAGE_SRCS = {
  red: 'assets/rosebud-red.png',
  azure: 'assets/rosebud-azure.png',
  turquoise: 'assets/rosebud-turquoise.png',
  white: 'assets/rosebud-white.png',
  blue: 'assets/rosebud-blue.png',
  peach: 'assets/rosebud-peach.png'
};
const BUD_VARIANTS = ['red', 'azure', 'turquoise', 'white', 'blue', 'peach'];

function createBudImageHTML(variant) {
  return `<img class="rosebud-image" src="${BUD_IMAGE_SRCS[variant]}" alt="" draggable="false" loading="eager" decoding="async">`;
}

function createOrganicButtonSVG(palette, uniqueId, size = 90) {
  const { baseLight, baseMid, coreColor, lineColor } = palette;
  const cx = 45, cy = 45;
  return `
  <svg viewBox="0 0 90 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cx}" cy="${cy}" r="38" fill="${baseLight}" stroke="${lineColor}" stroke-width="0.9"/>
    <circle cx="${cx}" cy="${cy}" r="28" fill="${baseMid}" stroke="${lineColor}" stroke-width="0.8"/>
    <path d="M ${cx} ${cy - 18} A 18 18 0 1 1 ${cx - 0.1} ${cy - 18} M ${cx} ${cy - 10} A 10 10 0 1 1 ${cx - 0.1} ${cy - 10}" 
          fill="none" stroke="${lineColor}" stroke-width="0.9" stroke-linecap="round"/>
    <path d="M ${cx} ${cy - 18} A 18 18 0 1 1 ${cx - 0.1} ${cy - 18}" 
          fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/>
    <circle cx="${cx}" cy="${cy}" r="4" fill="${coreColor}"/>
  </svg>`;
}

const STEM_IMAGE_SRC = 'assets/rose-stem-leaves.png';
function createStemImageHTML(flip = false) {
  return `<img class="stem-leaves-image${flip ? ' flipped' : ''}" src="${STEM_IMAGE_SRC}" alt="" draggable="false" loading="eager" decoding="async">`;
}

// =============================================================================
// 3. KHỞI TẠO VƯỜN HOA THOÁNG ĐÃNG, CÓ HÉ CẢ THÂN, 5 ĐÓA HOA CÔNG CHÚA CẬN MẶT NÉT
// =============================================================================
let gardenFlowersData = [];

function buildGarden() {
  const container = document.getElementById('garden-container');
  if (!container) return;
  container.innerHTML = '';
  gardenFlowersData = [];

  // Seeded random để bố cục ổn định và hài hòa mỗi lần mở
  let seed = 20261020;
  const rand = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobile = width <= 768;
  const containerHeight = height * (isMobile ? 0.72 : 0.65);
  const sizeScale = isMobile
    ? Math.min(0.88, Math.max(0.68, width / 480))
    : Math.min(1.4, Math.max(0.85, width / 1280));

  const gardenPalette = i => COLOR_PALETTES[i % COLOR_PALETTES.length];
  const flowerItems = [];

  // =========================================================================
  // VƯỜN HOA CHI CHÍT DÀY ĐẶC NHƯ BAN ĐẦU (~150-180 HOA TRÊN DESKTOP, ~90 TRÊN MOBILE)
  // =========================================================================
  // Số lượng hoa tối ưu 60FPS: Dày đặc chi chít nhưng chạy siêu mượt không lag
  const countT1 = isMobile ? 10 : 20;
  const countT2 = isMobile ? 10 : 20;
  const countT3 = isMobile ? 9 : 18;
  const countT4 = isMobile ? 8 : 15;
  const countT5 = isMobile ? 5 : 10;
  const fillerCount = isMobile ? 6 : 14;
  const accentBudCount = isMobile ? 6 : 12;

  // TẦNG 1: Tiền cảnh phủ sát đáy (hoa to, dày đặc ôm trọn chân vườn)
  for (let i = 0; i < countT1; i++) {
    const xPct = (i / (countT1 - 1)) * 96 + 2 + (rand() * 4 - 2);
    flowerItems.push({
      xPct: Math.max(1, Math.min(99, xPct)),
      sizePx: Math.floor((125 + rand() * 38) * sizeScale),
      heightPx: Math.floor(containerHeight * (0.05 + rand() * 0.14)),
      type: 'rose',
      layer: 28,
      palette: gardenPalette(i),
      bend: (rand() - 0.5) * 16,
      stemLengthPx: Math.floor((60 + rand() * 25) * sizeScale),
      hasStem: true
    });
  }

  // TẦNG 2: Hoa lớn tầng trung lấp toàn bộ khoảng trống
  for (let i = 0; i < countT2; i++) {
    const xPct = ((i + 0.5) / countT2) * 94 + 3 + (rand() * 4 - 2);
    flowerItems.push({
      xPct: Math.max(1, Math.min(99, xPct)),
      sizePx: Math.floor((115 + rand() * 36) * sizeScale),
      heightPx: Math.floor(containerHeight * (0.18 + rand() * 0.17)),
      type: 'rose',
      layer: 22,
      palette: gardenPalette(i + 2),
      bend: (rand() - 0.5) * 20,
      stemLengthPx: Math.floor((75 + rand() * 30) * sizeScale),
      hasStem: true
    });
  }

  // TẦNG 3: Hoa hồng nở rộ đan xen cành lá xanh vươn cao
  for (let i = 0; i < countT3; i++) {
    const xPct = (i / (countT3 - 1)) * 92 + 4 + (rand() * 5 - 2.5);
    const isBud = rand() < 0.16;
    flowerItems.push({
      xPct: Math.max(1, Math.min(99, xPct)),
      sizePx: Math.floor((isBud ? 52 : 92 + rand() * 38) * sizeScale),
      heightPx: Math.floor(containerHeight * (0.32 + rand() * 0.19)),
      type: isBud ? 'bud' : 'rose',
      layer: 16,
      palette: isBud ? (rand() < 0.5 ? COLOR_PALETTES[3] : COLOR_PALETTES[1]) : gardenPalette(i + 4),
      bend: (rand() - 0.5) * 22,
      stemLengthPx: Math.floor((95 + rand() * 35) * sizeScale),
      hasStem: true
    });
  }

  // TẦNG 4: Hoa cúc xoắn, hoa hồng nền trời
  for (let i = 0; i < countT4; i++) {
    const xPct = (i / (countT4 - 1)) * 92 + 4 + (rand() * 6 - 3);
    const r = rand();
    const type = r < 0.2 ? 'button' : (r < 0.4 ? 'bud' : 'rose');
    flowerItems.push({
      xPct: Math.max(1, Math.min(99, xPct)),
      sizePx: Math.floor((type === 'button' ? 56 : (type === 'bud' ? 50 : 75 + rand() * 30)) * sizeScale),
      heightPx: Math.floor(containerHeight * (0.48 + rand() * 0.18)),
      type,
      layer: 11,
      palette: gardenPalette(i + 1),
      bend: (rand() - 0.5) * 25,
      stemLengthPx: Math.floor((110 + rand() * 35) * sizeScale),
      hasStem: true
    });
  }

  // TẦNG 5: Nụ hoa và hoa vươn cao hai bên nền trời
  for (let i = 0; i < countT5; i++) {
    const xPct = (i / (countT5 - 1)) * 94 + 3 + (rand() * 3 - 1.5);
    if (Math.abs(xPct - 50) < 8) continue;
    const r = rand();
    const type = r < 0.3 ? 'button' : (r < 0.5 ? 'bud' : 'rose');
    flowerItems.push({
      xPct: Math.max(1, Math.min(99, xPct)),
      sizePx: Math.floor((type === 'bud' ? 44 : 54 + rand() * 26) * sizeScale),
      heightPx: Math.floor(containerHeight * (0.62 + rand() * 0.15)),
      type,
      layer: 7,
      palette: gardenPalette(i + 5),
      bend: (rand() - 0.5) * 25,
      stemLengthPx: Math.floor((125 + rand() * 30) * sizeScale),
      hasStem: true
    });
  }

  // HAI DẢI HOA FILLER LẤP KÍN MỌI KẼ HỞ (HOA DÀY ĐẶC KHÔNG BỊ TRỐNG)
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < fillerCount; i++) {
      const xPct = ((i + (row ? 0.68 : 0.18)) / fillerCount) * 98 + 1 + (rand() * 3 - 1.5);
      const heightRatio = row === 0 ? 0.22 + rand() * 0.18 : 0.40 + rand() * 0.18;
      const baseSize = row === 0 ? 108 : 88;
      flowerItems.push({
        xPct: Math.max(1, Math.min(99, xPct)),
        sizePx: Math.floor((baseSize + rand() * 36) * sizeScale),
        heightPx: Math.floor(containerHeight * heightRatio),
        type: 'rose',
        layer: row === 0 ? 19 : 13,
        palette: gardenPalette(i + row * 3),
        bend: (rand() - 0.5) * 12,
        stemLengthPx: Math.floor((65 + rand() * 25) * sizeScale),
        hasStem: true
      });
    }
  }

  // NỤ HOA XEN KẼ LẤP LÁNH
  for (let i = 0; i < accentBudCount; i++) {
    const xPct = ((i + 0.5) / accentBudCount) * 96 + 2 + (rand() * 4 - 2);
    flowerItems.push({
      xPct: Math.max(1, Math.min(99, xPct)),
      sizePx: Math.floor((40 + rand() * 15) * sizeScale),
      heightPx: Math.floor(containerHeight * (0.35 + rand() * 0.25)),
      type: 'bud',
      budVariant: BUD_VARIANTS[i % BUD_VARIANTS.length],
      layer: 15,
      palette: COLOR_PALETTES[3],
      bend: (rand() - 0.5) * 18,
      stemLengthPx: Math.floor((70 + rand() * 22) * sizeScale),
      hasStem: true
    });
  }

  // =========================================================================
  // ĐÓA HOA CAMEO NÀNG CÔNG CHÚA - NỔI BẬT RỰC RỠ, HIỂN THỊ ĐỦ TRỌN BỘ ẢNH!
  // =========================================================================
  const photos = currentFriend.photos;
  const cameoSize = Math.floor(isMobile ? 120 * sizeScale : 152 * sizeScale);

    const goldenCameoPositions = isMobile ? [
    // 11 vị trí hoa trên Mobile phân tầng nhấp nhô tuyệt đẹp khắp màn hình
    { xPct: 14, hRatio: 0.58, photoIdx: 0, layer: 34, bend: -3 },
    { xPct: 50, hRatio: 0.62, photoIdx: 1, layer: 34, bend: 0 },
    { xPct: 86, hRatio: 0.58, photoIdx: 2, layer: 34, bend: 3 },
    { xPct: 28, hRatio: 0.44, photoIdx: 3, layer: 36, bend: -4 },
    { xPct: 72, hRatio: 0.44, photoIdx: 4, layer: 36, bend: 4 },
    { xPct: 10, hRatio: 0.32, photoIdx: 5, layer: 38, bend: -3 },
    { xPct: 50, hRatio: 0.34, photoIdx: 6, layer: 38, bend: 0 },
    { xPct: 90, hRatio: 0.32, photoIdx: 7, layer: 38, bend: 3 },
    { xPct: 26, hRatio: 0.19, photoIdx: 8, layer: 42, bend: -2 },
    { xPct: 50, hRatio: 0.16, photoIdx: 9, layer: 44, bend: 0 },
    { xPct: 74, hRatio: 0.19, photoIdx: 10, layer: 42, bend: 2 }
  ] : [
    // 11 vị trí hoa trên Desktop trải đều hình sóng đôi từ trái sang phải
    { xPct: 7,  hRatio: 0.46, photoIdx: 0, layer: 36, bend: -4 },
    { xPct: 15, hRatio: 0.28, photoIdx: 1, layer: 38, bend: 3 },
    { xPct: 24, hRatio: 0.58, photoIdx: 2, layer: 34, bend: -5 },
    { xPct: 33, hRatio: 0.36, photoIdx: 3, layer: 38, bend: 4 },
    { xPct: 42, hRatio: 0.22, photoIdx: 4, layer: 40, bend: -3 },
    { xPct: 50, hRatio: 0.62, photoIdx: 5, layer: 35, bend: 0 },
    { xPct: 58, hRatio: 0.22, photoIdx: 6, layer: 40, bend: 3 },
    { xPct: 67, hRatio: 0.36, photoIdx: 7, layer: 38, bend: -4 },
    { xPct: 76, hRatio: 0.58, photoIdx: 8, layer: 34, bend: 5 },
    { xPct: 85, hRatio: 0.28, photoIdx: 9, layer: 38, bend: -3 },
    { xPct: 93, hRatio: 0.46, photoIdx: 10, layer: 36, bend: 4 }
  ];

  goldenCameoPositions.forEach((pos, idx) => {
    const photoItem = photos[pos.photoIdx % photos.length];
    flowerItems.push({
      xPct: pos.xPct,
      sizePx: cameoSize,
      heightPx: Math.floor(containerHeight * pos.hRatio),
      type: 'rose',
      layer: pos.layer || 38,
      palette: gardenPalette(idx * 2),
      bend: pos.bend || (idx % 2 === 0 ? -4 : 4),
      stemLengthPx: Math.floor((95 + (idx % 2) * 20) * sizeScale),
      hasStem: true,
      photoFriend: photoItem.id
    });
  });

// TẠO PHẦN TỬ DOM CHO TOÀN BỘ KHU VƯỜN
  let budIndex = 0;
  const fragment = document.createDocumentFragment();

  flowerItems.forEach((item, idx) => {
    const distFromCenter = Math.abs(item.xPct - 50) / 50;
    const delay = (0.04 + distFromCenter * 0.38 + rand() * 0.18).toFixed(2);
    const swayDuration = (3.8 + rand() * 2.0).toFixed(1) + 's';
    const swayDelay = (-rand() * 4).toFixed(1) + 's';
    const baseRot = ((rand() - 0.5) * 4).toFixed(1) + 'deg';

    const flowerEl = document.createElement('div');
    flowerEl.className = 'garden-flower';
    flowerEl.style.left = `${item.xPct}%`;
    flowerEl.style.zIndex = item.layer;
    flowerEl.style.setProperty('--sway-duration', swayDuration);
    flowerEl.style.setProperty('--sway-delay', swayDelay);
    flowerEl.style.setProperty('--base-rot', baseRot);

    const headWrap = document.createElement('div');
    headWrap.className = 'flower-head-wrap';
    const headHeight = item.type === 'bud' ? item.sizePx * 1.55 : item.sizePx;
    headWrap.style.width = `${item.sizePx}px`;
    headWrap.style.height = `${headHeight}px`;
    headWrap.style.bottom = `${item.heightPx - headHeight / 2}px`;

    if (item.photoFriend) {
      const pData = photos.find(x => x.id === item.photoFriend) || photos[0];
      headWrap.classList.add('has-photo-cameo');
      headWrap.innerHTML = createRoseImageHTML(item.palette) +
        '<div class="flower-photo-cameo" data-photo-id="' + pData.id + '" title="Chạm để xem ảnh của Thu Phương!">' +
          '<div class="cameo-crown">👑</div>' +
          '<div class="cameo-avatar-frame">' +
            '<img src="' + pData.avatar + '" alt="' + pData.title + '" class="photo-cameo-img">' +
            '<div class="photo-cameo-ring"></div>' +
            '<div class="photo-cameo-sparkles">' +
              '<span class="cameo-star star-1">✨</span>' +
              '<span class="cameo-star star-2">💖</span>' +
            '</div>' +
          '</div>' +
          '<div class="cameo-ribbon-bow">🎀</div>' +
          '<div class="cameo-name-tag">Thu Phương</div>' +
        '</div>';
    } else if (item.type === 'button') {
      headWrap.innerHTML = createOrganicButtonSVG(item.palette, `g-${idx}`, item.sizePx);
    } else if (item.type === 'bud') {
      headWrap.classList.add('bud-head');
      headWrap.innerHTML = createBudImageHTML(item.budVariant || BUD_VARIANTS[budIndex % BUD_VARIANTS.length]);
      budIndex++;
    } else {
      headWrap.innerHTML = createRoseImageHTML(item.palette);
    }

    if (item.hasStem) {
      const stemWrap = document.createElement('div');
      stemWrap.className = 'flower-stem-wrap';
      const stemLength = Math.min(item.heightPx, item.stemLengthPx);
      stemWrap.style.bottom = `${Math.max(0, item.heightPx - item.sizePx / 2 - stemLength + 10)}px`;
      stemWrap.style.height = `${stemLength}px`;
      stemWrap.innerHTML = createStemImageHTML(item.bend < 0);
      flowerEl.appendChild(stemWrap);
    }

    flowerEl.appendChild(headWrap);

    flowerEl.addEventListener('click', (e) => {
      e.stopPropagation();
      playChimeNote(440 + Math.random() * 400);
      flowerEl.style.transform = 'scale(1.12) translateY(-8px)';
      setTimeout(() => { flowerEl.style.transform = ''; }, 300);

      const rect = headWrap.getBoundingClientRect();
      const clickX = e.clientX || (rect.left + rect.width / 2);
      const clickY = e.clientY || (rect.top + rect.height / 3);
      spawnBurstParticles(clickX, clickY, item.photoFriend ? 18 : 8);

      if (item.photoFriend) {
        openFriendPhotoModal(item.photoFriend);
      } else {
        showFlowerLoveWhisper(clickX, clickY - 12);
      }
    });

    fragment.appendChild(flowerEl);
    gardenFlowersData.push({ element: flowerEl, delay: parseFloat(delay) });
  });

  container.appendChild(fragment);
}

// =============================================================================
// 4. KỊCH BẢN NỞ HOA & HIỆU ỨNG (BLOOM ENGINE)
// =============================================================================
let hasBloomed = false;
let isBlooming = false;

function triggerGardenBloom() {
  if (isBlooming || hasBloomed) return;
  isBlooming = true;

  startAudioEngine();
  playBloomArpeggio();
  startPetalRain();

  const butterflies = document.getElementById('butterflies-container');
  if (butterflies) {
    setTimeout(() => { butterflies.classList.add('active'); }, 400);
  }

  const heroWrapper = document.getElementById('hero-flower');
  const heroIndicator = document.getElementById('hero-click-indicator');
  if (heroIndicator) heroIndicator.style.display = 'none';

  if (heroWrapper) {
    heroWrapper.style.transform = 'translateX(-50%) scale(1.06)';
    setTimeout(() => { heroWrapper.style.transform = 'translateX(-50%) scale(1.0)'; }, 450);
  }

  const introContainer = document.getElementById('intro-text-box');
  const introSubtitle = document.getElementById('intro-subtitle');
  if (introContainer && introSubtitle) {
    introContainer.classList.add('blooming-state');
    introSubtitle.textContent = PHUONG_CONFIG.bloomingSubtitle;
  }

  gardenFlowersData.forEach(item => {
    setTimeout(() => {
      item.element.classList.add('bloomed');
    }, item.delay * 1000);
  });

  setTimeout(() => {
    hasBloomed = true;
    isBlooming = false;

    if (introContainer) introContainer.classList.add('bloomed-done');

    const bottomActions = document.getElementById('bottom-actions');
    if (bottomActions) bottomActions.classList.add('visible');

    setTimeout(() => { openCardModal(); }, 700);
  }, 1250);
}

function resetGardenBloom() {
  hasBloomed = false;
  isBlooming = false;

  closeCardModal();

  const butterflies = document.getElementById('butterflies-container');
  if (butterflies) butterflies.classList.remove('active');

  const bottomActions = document.getElementById('bottom-actions');
  if (bottomActions) bottomActions.classList.remove('visible');

  const introContainer = document.getElementById('intro-text-box');
  const introSubtitle = document.getElementById('intro-subtitle');
  if (introContainer && introSubtitle) {
    introContainer.classList.remove('blooming-state', 'bloomed-done');
    introSubtitle.textContent = PHUONG_CONFIG.introSubtitle;
  }

  const heroIndicator = document.getElementById('hero-click-indicator');
  if (heroIndicator) heroIndicator.style.display = 'block';

  gardenFlowersData.forEach(item => {
    item.element.classList.remove('bloomed');
  });
}

// =============================================================================
// 5. THIỆP CHÚC MỪNG 20/10 CỦA THU PHƯƠNG
// =============================================================================
function openCardModal() {
  const modal = document.getElementById('card-modal');
  if (!modal) return;
  modal.classList.add('open');
  playChimeNote(523.25, 0, 1.2);
}

function closeCardModal() {
  const modal = document.getElementById('card-modal');
  if (modal) modal.classList.remove('open');
}

function renderCardContent() {
  const recipientEl = document.getElementById('card-recipient');
  if (recipientEl) recipientEl.textContent = PHUONG_CONFIG.cardRecipient;

  const titleEl = document.getElementById('card-title');
  if (titleEl) titleEl.innerHTML = PHUONG_CONFIG.cardGreetingTitle;

  const bodyEl = document.querySelector('.card-body-text');
  if (bodyEl) {
    let html = '';
    PHUONG_CONFIG.cardLetter.forEach(p => {
      html += `<p class="card-paragraph">${p}</p>`;
    });
    html += `<div class="card-closing">${PHUONG_CONFIG.cardClosing}</div>`;
    bodyEl.innerHTML = html;
  }

  renderCardCarousel();
}

function renderCardCarousel() {
  const track = document.getElementById('card-carousel-track');
  if (!track) return;
  track.innerHTML = '';

  PHUONG_CONFIG.photos.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card-polaroid-item';
    card.innerHTML = `
      <div class="polaroid-pin">📌</div>
      <div class="polaroid-photo-frame">
        <img src="${item.avatar}" alt="${item.title}" class="polaroid-img" loading="lazy">
        <div class="polaroid-sparkle">✨</div>
      </div>
      <div class="polaroid-caption">
        <span class="polaroid-title">${item.title}</span>
        <span class="polaroid-badge">${item.badge}</span>
      </div>
    `;
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openFriendPhotoModal(item.id);
    });
    track.appendChild(card);
  });
}

// =============================================================================
// 6. LIGHTBOX XEM ẢNH NÀNG THƠ SẮC NÉT (PRINCESS LIGHTBOX MODAL)
// =============================================================================
let currentPhotoIndex = 0;

function openFriendPhotoModal(photoId) {
  const idx = PHUONG_CONFIG.photos.findIndex(p => p.id === photoId);
  currentPhotoIndex = idx >= 0 ? idx : 0;
  showPhotoAtIndex(currentPhotoIndex);

  const modal = document.getElementById('friend-photo-modal');
  if (modal) {
    modal.classList.add('open');
    playChimeNote(659.25, 0, 1.2);
  }
}

function closeFriendPhotoModal() {
  const modal = document.getElementById('friend-photo-modal');
  if (modal) modal.classList.remove('open');
}

function showPhotoAtIndex(idx) {
  const photos = PHUONG_CONFIG.photos;
  currentPhotoIndex = (idx + photos.length) % photos.length;
  const item = photos[currentPhotoIndex];

  const imgEl = document.getElementById('friend-modal-img');
  if (imgEl) {
    imgEl.style.opacity = '0';
    imgEl.src = item.full;
    imgEl.onload = () => { imgEl.style.opacity = '1'; };
  }

  const badgeEl = document.getElementById('friend-modal-badge');
  if (badgeEl) badgeEl.textContent = item.badge;

  const counterEl = document.getElementById('photo-counter-tag');
  if (counterEl) counterEl.textContent = `Ảnh ${currentPhotoIndex + 1} / ${photos.length}`;

  const nameEl = document.getElementById('friend-modal-name');
  if (nameEl) nameEl.textContent = `${item.title} - Thu Phương`;

  const wishEl = document.getElementById('friend-modal-wish');
  if (wishEl) wishEl.textContent = item.wish;
}

function showNextPhoto() { showPhotoAtIndex(currentPhotoIndex + 1); }
function showPrevPhoto() { showPhotoAtIndex(currentPhotoIndex - 1); }

// =============================================================================
// 7. TRIỂN LÃM ALBUM KỶ NIỆM 20/10 (ALBUM GALLERY MODAL)
// =============================================================================
function openAlbumModal() {
  renderAlbumGrid();
  const modal = document.getElementById('album-gallery-modal');
  if (modal) {
    modal.classList.add('open');
    playChimeNote(587.33, 0, 1.2);
  }
}

function closeAlbumModal() {
  const modal = document.getElementById('album-gallery-modal');
  if (modal) modal.classList.remove('open');
}

function renderAlbumGrid() {
  const grid = document.getElementById('album-masonry-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const subtitle = document.querySelector('.album-modal-subtitle');
  if (subtitle) {
    subtitle.textContent = `Trọn bộ 12 khoảnh khắc rạng rỡ của Thu Phương 💖`;
  }

  PHUONG_CONFIG.photos.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'album-polaroid-card';
    card.innerHTML = `
      <div class="album-polaroid-tape"></div>
      <div class="album-polaroid-media">
        <img src="${item.thumb || item.full}" alt="${item.title}" class="album-polaroid-img" loading="lazy">
        <div class="album-media-badge">${item.badge}</div>
      </div>
      <div class="album-polaroid-desc">
        <h4 class="album-card-title">${item.title}</h4>
        <p class="album-card-wish">${item.wish}</p>
        <div class="album-card-action">
          <span class="album-date">20/10/2026 ✨</span>
          <button class="btn-album-zoom" title="Xem ảnh lớn">🔍 Phóng to</button>
        </div>
      </div>
    `;
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      openFriendPhotoModal(item.id);
    });
    grid.appendChild(card);
  });
}

// =============================================================================
// 8. TIỆN ÍCH SAO CHÉP LỜI CHÚC & THÔNG BÁO TOAST
// =============================================================================
function copyWishToClipboard() {
  const wishText = `🌸 CHÚC MỪNG 20/10 THU PHƯƠNG! 🌸\n\n` +
    PHUONG_CONFIG.cardLetter.join('\n\n') +
    `\n\n${PHUONG_CONFIG.cardClosing}\n${window.location.href}`;

  navigator.clipboard.writeText(wishText).then(() => {
    showToast('💖 Đã sao chép lời chúc gửi Thu Phương!');
  }).catch(() => {
    showToast('✨ Lời chúc đã sẵn sàng!');
  });
}

function showToast(msg) {
  let toast = document.getElementById('action-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'action-toast';
    toast.className = 'action-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 2400);
}

// =============================================================================
// 9. ÂM THANH WEB AUDIO DU DƯƠNG
// =============================================================================
let audioCtx = null;
let isAudioPlaying = false;
let audioMelodyTimer = null;
let customAudioEl = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playChimeNote(freq, delay = 0, duration = 1.2) {
  try {
    initAudioContext();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.14, audioCtx.currentTime + delay + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + duration + 0.1);
  } catch (err) {}
}

function playBloomArpeggio() {
  const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
  notes.forEach((freq, i) => {
    playChimeNote(freq, i * 0.11, 1.4);
  });
}

const CHORD_PROGRESSIONS = [
  [261.63, 329.63, 392.00, 523.25],
  [220.00, 261.63, 329.63, 440.00],
  [174.61, 220.00, 261.63, 349.23],
  [196.00, 246.94, 293.66, 392.00]
];
let chordIndex = 0;

function startGenerativeMusic() {
  if (audioMelodyTimer) clearInterval(audioMelodyTimer);
  chordIndex = 0;
  playNextChord();
  audioMelodyTimer = setInterval(playNextChord, 3800);
}

function playNextChord() {
  if (!isAudioPlaying) return;
  const chord = CHORD_PROGRESSIONS[chordIndex % CHORD_PROGRESSIONS.length];
  chordIndex++;
  chord.forEach((freq, idx) => {
    playChimeNote(freq, idx * 0.16, 2.8);
  });
}

function startAudioEngine() {
  initAudioContext();
  isAudioPlaying = true;
  updateMusicBtnUI(true);

  if (!customAudioEl) {
    customAudioEl = new Audio('music.mp3');
    customAudioEl.loop = true;
    customAudioEl.volume = 0.5;
  }

  customAudioEl.play().catch(() => {
    startGenerativeMusic();
  });
}

function toggleAudio() {
  if (isAudioPlaying) {
    isAudioPlaying = false;
    if (customAudioEl) customAudioEl.pause();
    if (audioMelodyTimer) clearInterval(audioMelodyTimer);
    updateMusicBtnUI(false);
  } else {
    startAudioEngine();
  }
}

function updateMusicBtnUI(playing) {
  const btn = document.getElementById('music-toggle-btn');
  if (btn) {
    btn.innerHTML = playing ? '<span class="control-icon">🎶</span> Tắt nhạc' : '<span class="control-icon">🎵</span> Bật nhạc';
    btn.classList.toggle('playing', playing);
  }
}

// =============================================================================
// 10. CANVAS HIỆU ỨNG CÁNH HOA BAY & ĐOM ĐÓM LUNG LINH
// =============================================================================
let canvas, ctx;
let particles = [];
let isCanvasRunning = false;

function initCanvasFX() {
  canvas = document.getElementById('fx-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  for (let i = 0; i < 24; i++) {
    particles.push(createParticle(true));
  }
  isCanvasRunning = true;
  requestAnimationFrame(loopFX);
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticle(isAmbient = false) {
  const colors = ['rgba(255, 182, 193, 0.7)', 'rgba(255, 218, 185, 0.65)', 'rgba(255, 240, 245, 0.8)', 'rgba(255, 228, 225, 0.7)'];
  return {
    x: Math.random() * (canvas ? canvas.width : window.innerWidth),
    y: isAmbient ? Math.random() * (canvas ? canvas.height : window.innerHeight) : -20,
    size: 6 + Math.random() * 8,
    speedX: (Math.random() - 0.5) * 1.5,
    speedY: 1.0 + Math.random() * 1.6,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 0.5 + Math.random() * 0.5
  };
}

function startPetalRain() {
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      if (particles.length < 80) particles.push(createParticle(false));
    }, i * 70);
  }
}

function spawnBurstParticles(x, y, count = 16) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 5;
    particles.push({
      x: x,
      y: y,
      size: 4 + Math.random() * 6,
      speedX: Math.cos(angle) * speed,
      speedY: Math.sin(angle) * speed - 1.2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      color: Math.random() > 0.4 ? 'rgba(255, 105, 180, 0.85)' : 'rgba(255, 215, 0, 0.85)',
      opacity: 1,
      life: 1.0,
      decay: 0.02 + Math.random() * 0.03,
      isBurst: true
    });
  }
}

function showFlowerLoveWhisper(x, y) {
  const whispers = [
    'Xinh đẹp rạng ngời 🌸',
    'Nụ cười tỏa nắng ☀️',
    'Công chúa ngọt ngào 👑',
    'Hạnh phúc ngập tràn 💖',
    'Vạn sự như ý 🌷',
    'Mãi mãi đáng yêu 🎀',
    'Bình an & Rạng rỡ ✨',
    'Nàng thơ kiêu sa 💐',
    'Yêu đời tươi vui 💕',
    'Duyên dáng tự tin 🌹'
  ];
  const text = whispers[Math.floor(Math.random() * whispers.length)];
  const el = document.createElement('div');
  el.className = 'flower-whisper-bubble';
  el.textContent = text;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.body.appendChild(el);
  setTimeout(() => { el.remove(); }, 2000);
}

function loopFX() {
  if (!isCanvasRunning || !ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    if (p.isBurst) {
      p.life -= p.decay;
      p.opacity = Math.max(0, p.life);
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
    }

    p.x += p.speedX;
    p.y += p.speedY;
    p.rotation += p.rotSpeed;

    ctx.save();
    ctx.globalAlpha = p.opacity || 1;
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);

    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.moveTo(0, -p.size);
    ctx.quadraticCurveTo(p.size * 0.8, -p.size * 0.4, p.size * 0.6, p.size * 0.6);
    ctx.quadraticCurveTo(0, p.size, -p.size * 0.6, p.size * 0.6);
    ctx.quadraticCurveTo(-p.size * 0.8, -p.size * 0.4, 0, -p.size);
    ctx.fill();
    ctx.restore();

    if (p.y > canvas.height + 25 || p.x > canvas.width + 25 || p.x < -25) {
      if (!p.isBurst) {
        particles[i] = createParticle(false);
      }
    }
  }

  requestAnimationFrame(loopFX);
}

function setupButterflies() {
  const container = document.getElementById('butterflies-container');
  if (!container) return;
  const butterflies = container.querySelectorAll('.butterfly');
  const butterflyNotes = [783.99, 880, 987.77];
  butterflies.forEach((b, idx) => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      playChimeNote(butterflyNotes[idx % butterflyNotes.length], 0, 1.4);
      const rect = b.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      spawnBurstParticles(x, y, 12);
      showFlowerLoveWhisper(x, y - 10);
      b.style.transform = 'scale(1.4) rotate(360deg)';
      setTimeout(() => { b.style.transform = ''; }, 600);
    });
  });
}

// =============================================================================
// 11. KHỞI CHẠY KHI TẢI XONG TRANG WEB
// =============================================================================
// =============================================================================
// TÍNH NĂNG BẤT NGỜ HOÀNH TRÁNG: CƠN MƯA YÊU THƯƠNG & BÃO TIM PHÁO HOA
// =============================================================================
function triggerLoveStorm() {
  playBloomArpeggio();
  startPetalRain();

  // 1. Pháo hoa sóng chấn động vàng kim
  const heroFlower = document.getElementById('hero-flower');
  if (heroFlower) {
    const shockwave = document.createElement('div');
    shockwave.className = 'grand-shockwave';
    heroFlower.appendChild(shockwave);
    setTimeout(() => shockwave.remove(), 1800);
  }

  // 2. Tung hạt pháo hoa khắp màn hình
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight * 0.45;
  spawnBurstParticles(cx, cy, 45);
  spawnBurstParticles(cx - 150, cy + 50, 25);
  spawnBurstParticles(cx + 150, cy + 50, 25);

  // 3. Hiển thị bảng chúc mừng hoàng gia bay lượn
  const existingBanner = document.querySelector('.royal-celebration-banner');
  if (existingBanner) existingBanner.remove();

  const banner = document.createElement('div');
  banner.className = 'royal-celebration-banner';
  banner.innerHTML = `🌸 Chúc Mừng 20/10 Thu Phương! 🌸<br><span style="font-size: 0.8em; font-weight: normal; color: #a43258;">Cả một vườn thương ngập tràn nụ cười & hạnh phúc ngọt ngào nhất! 👑💖</span>`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 4200);

  // 4. Rung rinh tất cả hoa trong vườn
  const flowers = document.querySelectorAll('.garden-flower');
  flowers.forEach((fl, idx) => {
    setTimeout(() => {
      fl.style.transform = 'scale(1.15) translateY(-8px)';
      setTimeout(() => { fl.style.transform = ''; }, 320);
    }, (idx % 12) * 50);
  });
}

function downloadCurrentPhoto() {
  const photos = currentFriend.photos;
  const item = photos[currentPhotoIndex] || photos[0];
  const link = document.createElement('a');
  link.href = item.full;
  link.download = `20-10-phuong-${String(item.id).padStart(2, '0')}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('📥 Đã tải ảnh kỷ niệm về máy!');
}

function spawnFloatingHearts(x, y) {
  const emojis = ['💖', '💕', '🥰', '😘', '🌸', '✨', '👑', '🌷'];
  for (let i = 0; i < 7; i++) {
    const h = document.createElement('div');
    h.className = 'floating-heart-burst';
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = `${x}px`;
    h.style.top = `${y}px`;
    h.style.setProperty('--dx', `${(Math.random() - 0.5) * 120}px`);
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 1800);
  }
}


window.addEventListener('DOMContentLoaded', () => {
  document.title = 'Thu Phương - Cả một vườn thương 20/10';

  const heroHead = document.getElementById('hero-rose-head');
  if (heroHead) heroHead.innerHTML = createRoseImageHTML(COLOR_PALETTES[0]);

  const heroStem = document.getElementById('hero-stem-image');
  if (heroStem) heroStem.innerHTML = createStemImageHTML();

  const cardIcon = document.getElementById('card-rose-icon');
  if (cardIcon) cardIcon.innerHTML = createRoseImageHTML(COLOR_PALETTES[0]);

  buildGarden();
  initCanvasFX();
  setupButterflies();
  renderCardContent();

  const heroFlower = document.getElementById('hero-flower');
  if (heroFlower) heroFlower.addEventListener('click', triggerGardenBloom);

  const btnReplay = document.getElementById('btn-replay-bloom');
  if (btnReplay) btnReplay.addEventListener('click', resetGardenBloom);

  const btnReadCard = document.getElementById('btn-read-card');
  if (btnReadCard) btnReadCard.addEventListener('click', openCardModal);

  const btnCloseCard = document.getElementById('btn-close-card');
  if (btnCloseCard) btnCloseCard.addEventListener('click', closeCardModal);

  const btnViewGarden = document.getElementById('btn-view-garden');
  if (btnViewGarden) btnViewGarden.addEventListener('click', closeCardModal);

  const cardBackdrop = document.getElementById('card-modal');
  if (cardBackdrop) {
    cardBackdrop.addEventListener('click', (e) => {
      if (e.target === cardBackdrop) closeCardModal();
    });
  }

  const musicBtn = document.getElementById('music-toggle-btn');
  if (musicBtn) musicBtn.addEventListener('click', toggleAudio);

  const btnOpenAlbum = document.getElementById('btn-open-album');
  if (btnOpenAlbum) btnOpenAlbum.addEventListener('click', openAlbumModal);

  const btnCloseAlbum = document.getElementById('btn-close-album-modal');
  if (btnCloseAlbum) btnCloseAlbum.addEventListener('click', closeAlbumModal);

  const btnAlbumBack = document.getElementById('btn-album-back-garden');
  if (btnAlbumBack) btnAlbumBack.addEventListener('click', closeAlbumModal);

  const albumBackdrop = document.getElementById('album-gallery-modal');
  if (albumBackdrop) {
    albumBackdrop.addEventListener('click', (e) => {
      if (e.target === albumBackdrop) closeAlbumModal();
    });
  }

  const btnCloseFriendModal = document.getElementById('btn-close-friend-modal');
  if (btnCloseFriendModal) btnCloseFriendModal.addEventListener('click', closeFriendPhotoModal);

  const btnPrevPhoto = document.getElementById('btn-prev-photo');
  if (btnPrevPhoto) btnPrevPhoto.addEventListener('click', (e) => { e.stopPropagation(); showPrevPhoto(); });

  const btnNextPhoto = document.getElementById('btn-next-photo');
  if (btnNextPhoto) btnNextPhoto.addEventListener('click', (e) => { e.stopPropagation(); showNextPhoto(); });

  const friendModalBackdrop = document.getElementById('friend-photo-modal');
  if (friendModalBackdrop) {
    friendModalBackdrop.addEventListener('click', (e) => {
      if (e.target === friendModalBackdrop) closeFriendPhotoModal();
    });
  }

    const btnMagicStorm = document.getElementById('btn-magic-storm');
  if (btnMagicStorm) btnMagicStorm.addEventListener('click', triggerLoveStorm);

  const btnFriendDownload = document.getElementById('btn-friend-download');
  if (btnFriendDownload) btnFriendDownload.addEventListener('click', downloadCurrentPhoto);

  const btnFriendHeart = document.getElementById('btn-friend-heart');
  if (btnFriendHeart) {
    btnFriendHeart.addEventListener('click', (e) => {
      e.stopPropagation();
      playChimeNote(880);
      const rect = btnFriendHeart.getBoundingClientRect();
      spawnBurstParticles(rect.left + rect.width / 2, rect.top, 35);
      btnFriendHeart.textContent = '💖 Đã gửi ngàn yêu thương!';
      setTimeout(() => { btnFriendHeart.textContent = '💖 Bắn tim yêu thương'; }, 1800);
    });
  }

  const btnCopyWish = document.getElementById('btn-copy-wish');
  if (btnCopyWish) btnCopyWish.addEventListener('click', copyWishToClipboard);

  window.addEventListener('keydown', (e) => {
    const friendModal = document.getElementById('friend-photo-modal');
    if (friendModal && friendModal.classList.contains('open')) {
      if (e.key === 'ArrowRight') showNextPhoto();
      else if (e.key === 'ArrowLeft') showPrevPhoto();
      else if (e.key === 'Escape') closeFriendPhotoModal();
    }
    const albumModal = document.getElementById('album-gallery-modal');
    if (albumModal && albumModal.classList.contains('open')) {
      if (e.key === 'Escape') closeAlbumModal();
    }
  });

  let touchStartX = 0;
  const friendModalBox = document.querySelector('.friend-modal-box');
  if (friendModalBox) {
    friendModalBox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    friendModalBox.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) showNextPhoto();
      else if (touchEndX - touchStartX > 45) showPrevPhoto();
    }, { passive: true });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildGarden();
      if (hasBloomed) {
        gardenFlowersData.forEach(item => {
          item.element.classList.add('bloomed');
        });
      }
    }, 150);
  });
});

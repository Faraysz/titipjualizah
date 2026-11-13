
/**
 * KONFIGURASI TERPUSAT - TITIP JUAL IZAH
 * 
 * Semua data penting (nomor WhatsApp, 7 kategori barang, FAQ,
 * komisi, dan daftar gambar) dikelola dari satu file ini.
 */

export interface CategoryItem {
  slug: string;
  nama: string;
  foto: string; // File di src/assets/kategori/
  alt: string;
  sub: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  priceSold: string;
  durationSold: string;
  condition: string;
  imagePath: string; // File di src/assets/barang/
  alt: string;
  caption: string;
  isPlaceholder: boolean;
}

export interface TestimonialItem {
  id: string;
  senderName: string;
  itemSold: string;
  message: string;
  date: string;
  imagePath: string; // File di src/assets/testimoni/
  alt: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CommissionTier {
  category: string;
  rate: string; // [KOMISI: ...%]
  description: string;
  features: string[];
}

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITAS
  // ==========================================
  brandName: 'Titip Jual Izah',
  ownerName: 'Kak Izah',
  tagline: 'Titip jual barang cewekmu, biar Izah yang urus sampai laku',
  description: 'Layanan titip jual barang cewek terpercaya oleh Kak Izah: baju, tas, sepatu, hijab, sampai skincare. Praktis tanpa ribet foto ulang, balas ratusan chat, atau COD.',
  siteUrl: 'https://titipjualayyu.vercel.app',

  // ==========================================
  // 2. KONTAK & WHATSAPP RESMI
  // ==========================================
  whatsappNumber: '6282139956462',
  whatsappDisplay: '+62 821-3995-6462',
  defaultWaMessage: 'Halo Kak Izah, saya mau titip jual barang',
  commissionWaMessage: 'Halo Kak Izah, saya mau tanya skema komisi untuk barang titipan saya',
  
  // ==========================================
  // 3. MEDIA SOSIAL RESMI
  // ==========================================
  instagramUrl: 'https://instagram.com/titipjual_izah',
  instagramHandle: '@titipjual_izah',

  // ==========================================
  // 4. DAFTAR 7 KATEGORI BARANG YANG DITERIMA
  // Urutan persis: Baju, Celana, Tas, Jam tangan, Sepatu & sandal, Hijab, Skincare & makeup
  // ==========================================
  categories: [
    {
      slug: 'baju',
      nama: 'Baju',
      foto: 'baju.jpg',
      alt: '[GANTI] Foto kategori baju preloved berkualitas',
      sub: 'Dress, blazer, tunik, kemeja, blouse, knitwear',
    },
    {
      slug: 'celana',
      nama: 'Celana',
      foto: 'celana.jpg',
      alt: '[GANTI] Foto kategori celana cewek',
      sub: 'Celana bahan, kulot, denim/jeans, rok panjang',
    },
    {
      slug: 'tas',
      nama: 'Tas',
      foto: 'tas.jpg',
      alt: '[GANTI] Foto kategori tas wanita preloved mulus',
      sub: 'Handbag, shoulder bag, tote bag, sling bag, dompet',
    },
    {
      slug: 'jam-tangan',
      nama: 'Jam tangan',
      foto: 'jam-tangan.jpg',
      alt: '[GANTI] Foto kategori jam tangan wanita',
      sub: 'Jam tangan wanita original, lengkap box & kartu',
    },
    {
      slug: 'sepatu-sandal',
      nama: 'Sepatu & sandal',
      foto: 'sepatu-sandal.jpg',
      alt: '[GANTI] Foto kategori sepatu dan sandal wanita',
      sub: 'Pointed heels, flat shoes, sneakers cewek, mules',
    },
    {
      slug: 'hijab',
      nama: 'Hijab',
      foto: 'hijab.jpg',
      alt: '[GANTI] Foto kategori hijab dan scarf wanita',
      sub: 'Pashmina silk, scarf motif, square hijab premium',
    },
    {
      slug: 'skincare-makeup',
      nama: 'Skincare & makeup',
      foto: 'skincare-makeup.jpg',
      alt: '[GANTI] Foto kategori skincare dan makeup baru',
      sub: 'Kondisi [GANTI: Wajib Baru & Masih Bersegel Resmi]',
    },
  ] as CategoryItem[],

  // ==========================================
  // 5. SKEMA BIAYA & KOMISI
  // ==========================================
  commissionTiers: [
    {
      category: 'Baju, Celana & Hijab',
      rate: '[KOMISI: ...%]',
      description: 'Dress, blazer, celana, kulot, tunik, dan koleksi hijab.',
      features: [
        'Free foto estetik & penulisan deskripsi rapi',
        'Promosi berkala di katalog & media sosial',
        'Packing rapi dan aman dikirim ke pembeli',
      ],
    },
    {
      category: 'Tas & Jam Tangan Branded',
      rate: '[KOMISI: ...%]',
      description: 'Tas designer/branded, jam tangan original, dompet kulit.',
      features: [
        'Pemeriksaan keaslian dan kondisi detail',
        'Promosi prioritas ke pencari tas & jam tangan',
        'Dukungan asuransi pengiriman ekspedisi',
      ],
    },
    {
      category: 'Sepatu & Sandal, Skincare & Makeup',
      rate: '[KOMISI: ...%]',
      description: 'Heels, sneakers cewek, flat shoes, skincare/makeup baru.',
      features: [
        'Validasi segel & tanggal kedaluwarsa resmi',
        'Target pembeli cewek yang loyal & cepat deal',
        'Pengemasan ekstra aman dengan bubble wrap',
      ],
    },
  ] as CommissionTier[],

  // ==========================================
  // 6. CONTOH BARANG TERJUAL (GALERI)
  // ==========================================
  soldGallery: [
    {
      id: 'barang-1',
      title: 'Coach Sierra Satchel Crossbody',
      category: 'Tas',
      priceSold: 'Rp 1.450.000',
      durationSold: 'Terjual dalam 2 hari',
      condition: 'Kondisi 95% mulus lengkap dustbag',
      imagePath: 'barang-1.svg',
      alt: 'Foto tas Coach preloved cokelat terawat',
      caption: 'Titipan Kak N dari Jakarta Selatan',
      isPlaceholder: true,
    },
    {
      id: 'barang-2',
      title: 'Zara Oversized Structured Blazer',
      category: 'Baju',
      priceSold: 'Rp 480.000',
      durationSold: 'Terjual dalam 24 jam',
      condition: 'Size S, Like New (1x pakai)',
      imagePath: 'barang-2.svg',
      alt: 'Foto blazer Zara warna beige kondisi prima',
      caption: 'Titipan Kak R dari Bandung',
      isPlaceholder: true,
    },
    {
      id: 'barang-3',
      title: 'Charles & Keith Pointed Pumps',
      category: 'Sepatu & sandal',
      priceSold: 'Rp 390.000',
      durationSold: 'Terjual dalam 3 hari',
      condition: 'Size 38, lengkap kotak original',
      imagePath: 'barang-3.svg',
      alt: 'Foto sepatu Charles and Keith heels hitam',
      caption: 'Titipan Kak D dari Surabaya',
      isPlaceholder: true,
    },
    {
      id: 'barang-4',
      title: 'Miss Dior Blooming Bouquet 100ml',
      category: 'Skincare & makeup',
      priceSold: 'Rp 1.850.000',
      durationSold: 'Terjual dalam 4 hari',
      condition: 'Baru 100% masih segel plastik resmi',
      imagePath: 'barang-4.svg',
      alt: 'Foto parfum Dior baru bersegel',
      caption: 'Titipan Kak M dari Tangerang',
      isPlaceholder: true,
    },
    {
      id: 'barang-5',
      title: 'Gentle Woman Canvas Tote Bag',
      category: 'Tas',
      priceSold: 'Rp 260.000',
      durationSold: 'Terjual dalam 1 hari',
      condition: 'Original Bangkok, mulus bersih',
      imagePath: 'barang-5.svg',
      alt: 'Foto tas Gentle Woman canvas tote',
      caption: 'Titipan Kak A dari Bekasi',
      isPlaceholder: true,
    },
    {
      id: 'barang-6',
      title: 'Fossil Rose Gold Mesh Watch',
      category: 'Jam tangan',
      priceSold: 'Rp 850.000',
      durationSold: 'Terjual dalam 5 hari',
      condition: 'Lengkap kotak kaleng & kartu garansi',
      imagePath: 'barang-6.svg',
      alt: 'Foto jam tangan Fossil rose gold wanita',
      caption: 'Titipan Kak T dari Depok',
      isPlaceholder: true,
    },
  ] as GalleryItem[],

  // ==========================================
  // 7. TESTIMONI ASLI (DARI PENGGUNA)
  // ==========================================
  testimonials: [
    {
      id: 'testi-1',
      senderName: 'Testimonial Penitip',
      itemSold: '3 Pcs Baju Sold di TikTok',
      message: 'Kemaren itu pas tipjul pertamaa gacor bgt di tiktok ada 3 baju yg sold, trs pas tipjul keduaa banyak bgt yg wa aku uda ada 2 baju yg soldd, skrng uda mau tipjul yg ke 3 kalinya 😭😭❤️❤️',
      date: 'Testimoni Asli @titipjual_izah',
      imagePath: 'testi-1.jpg',
      alt: 'Screenshot chat WhatsApp bukti kepuasan penitip baju di Titip Jual Izah',
      isPlaceholder: false,
    },
    {
      id: 'testi-2',
      senderName: 'Testimonial Penitip',
      itemSold: 'Jasa Titip Jual Baju',
      message: 'Trima kasih banyak kak. Sangat bermanfaat sekalii 🙏🏼... Oke terima kasih banyak kk puas bngt pakek jatipnya kk 🥰❤️',
      date: 'Testimoni Asli @titipjual_izah',
      imagePath: 'testi-2.jpg',
      alt: 'Screenshot testimoni puas penitip di Titip Jual Izah',
      isPlaceholder: false,
    },
  ] as TestimonialItem[],

  // ==========================================
  // 8. FAQ (PERTANYAAN UMUM)
  // ==========================================
  faqs: [
    {
      question: 'Barang apa saja yang bisa dititip di Titip Jual Izah?',
      answer: 'Kami menerima 7 kategori utama barang wanita: 1. Baju (blazer, dress, kemeja, outerwear), 2. Celana (bahan, kulot, jeans, rok), 3. Tas (handbag, shoulder bag, tote bag, dompet), 4. Jam tangan (original wanita), 5. Sepatu & sandal (heels, flat shoes, sneakers cewek), 6. Hijab (pashmina, scarf silk, square), dan 7. Skincare & makeup (wajib kondisi baru/tersegel). Punya barang di luar daftar ini? Kamu bisa tanyakan dulu langsung via WhatsApp ke Kak Izah!',
    },
    {
      question: 'Apa syarat kondisi khusus untuk titip skincare & makeup?',
      answer: 'Khusus skincare dan makeup, [GANTI: Syarat Kondisi — Wajib 100% baru, belum pernah dibuka atau dicolek, masih dalam segel/plastik resmi pabrik, memiliki izin BPOM/resmi, dan masa kedaluwarsa (expired date) minimal 6-12 bulan ke depan demi higienitas dan kenyamanan pembeli].',
    },
    {
      question: 'Apakah barang titipan saya aman di tangan Kak Izah?',
      answer: 'Sangat aman. Seluruh barang titipan yang disimpan diperlakukan dengan higienis di ruang penyimpanan bersih khusus, bebas lembab, dan bebas asap rokok/hewan peliharaan. Setiap barang ditandai dengan identitas penitip yang tertib.',
    },
    {
      question: 'Kapan dan lewat apa uang hasil penjualan ditransfer?',
      answer: 'Setelah barang diterima oleh pembeli dan dikonfirmasi tanpa kendala (maksimal 1x24 jam sejak resi menunjukkan status delivered), dana penjualan dikurangi komisi langsung ditransfer ke rekening bank kamu (BCA, Mandiri, BRI, BNI) atau e-wallet. Bukti transfer resmi dikirimkan langsung ke WhatsApp kamu.',
    },
    {
      question: 'Bagaimana kalau barang saya tidak kunjung laku?',
      answer: 'Kami akan mengevaluasi bersama secara berkala (misal evaluasi penyesuaian harga atau perbaruan konten promosi). Jika setelah masa promosi yang disepakati (misal 30–60 hari) barang belum terjual dan kamu ingin mengambilnya kembali, barang bisa ditarik tanpa denda apa pun (ongkos kirim retur ditanggung pemilik barang).',
    },
    {
      question: 'Barang apa saja yang TIDAK BISA dititipkan?',
      answer: 'Kami TIDAK menerima barang tiruan/KW/palsu (KW Super, 1:1, dsb), pakaian yang bernoda membandel atau sobek parah, pakaian dalam, serta produk kosmetik/skincare yang sudah terbuka atau bekas pakai demi alasan kebersihan dan keamanan.',
    },
    {
      question: 'Siapa yang menentukan harga jual barang?',
      answer: 'Harga jual ditentukan atas persetujuan bersama. Kamu bisa mengajukan nominal yang diharapkan (harga bersih/nett), dan Kak Izah akan memberikan saran harga pasar preloved yang realistis agar barangmu cepat dilirik calon pembeli.',
    },
  ] as FaqItem[],
};

/**
 * Helper untuk membuat URL WhatsApp dinamis
 */
export function getWhatsAppUrl(customText?: string): string {
  const text = customText || siteConfig.defaultWaMessage;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/**
 * Helper WhatsApp spesifik untuk kategori barang
 */
export function getCategoryWhatsAppUrl(categoryName: string): string {
  const text = `Halo Kak Izah, saya mau titip jual ${categoryName}`;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

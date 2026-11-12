/**
 * KONFIGURASI TERPUSAT - TITIP JUAL IZAH
 * 
 * Semua data penting (nomor WhatsApp, persentase komisi, link medsos,
 * kategori, FAQ, dan daftar gambar) dikelola dari satu file ini.
 */

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

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  exampleBrands: string;
  iconName: 'shirt' | 'shopping-bag' | 'footprints' | 'watch' | 'sparkles';
  imagePath: string; // File di src/assets/kategori/
  alt: string;
  isPlaceholder: boolean;
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
  description: 'Layanan titip jual khusus barang wanita terpercaya oleh Kak Izah. Fashion, tas, sepatu, aksesoris, dan beauty. Praktis tanpa ribet foto ulang, balas ratusan chat, atau COD.',
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
  // 4. SKEMA BIAYA & KOMISI
  // ==========================================
  commissionTiers: [
    {
      category: 'Fashion & Pakaian',
      rate: '[KOMISI: ...%]',
      description: 'Dress, blazer, tunik, celana, rok, dan knitwear.',
      features: [
        'Free foto estetik & penulisan deskripsi rapi',
        'Promosi berkala di katalog & media sosial',
        'Packing rapi dan aman dikirim ke pembeli',
      ],
    },
    {
      category: 'Tas & Sepatu Branded',
      rate: '[KOMISI: ...%]',
      description: 'Coach, Michael Kors, Charles & Keith, heels, sneakers.',
      features: [
        'Pemeriksaan keaslian dan kondisi detail',
        'Promosi prioritas ke pencari tas/sepatu',
        'Dukungan asuransi pengiriman ekspedisi',
      ],
    },
    {
      category: 'Skincare, Makeup & Aksesoris',
      rate: '[KOMISI: ...%]',
      description: 'Khusus skincare baru bersegel, jam tangan, kacamata.',
      features: [
        'Validasi tanggal kedaluwarsa & segel original',
        'Target pembeli cewek yang loyal & cepat deal',
        'Pengemasan ekstra aman dengan bubble wrap',
      ],
    },
  ] as CommissionTier[],

  // ==========================================
  // 5. KATEGORI BARANG YANG DITERIMA
  // ==========================================
  categories: [
    {
      id: 'fashion',
      name: 'Pakaian & Fashion',
      description: 'Blazer kantor, dress pesta, oversized shirt, outerwear, celana bahan.',
      exampleBrands: 'Zara, Mango, H&M, Love Bonito, Uniqlo, brand lokal terkurasi',
      iconName: 'shirt',
      imagePath: 'kategori-fashion.svg',
      alt: 'Contoh pakaian cewek preloved berkualitas',
      isPlaceholder: true,
    },
    {
      id: 'bags',
      name: 'Tas & Dompet',
      description: 'Handbag, shoulder bag, tote bag canvas, wallet, sling bag.',
      exampleBrands: 'Coach, Kate Spade, Charles & Keith, Gentle Woman, Marhen.J',
      iconName: 'shopping-bag',
      imagePath: 'kategori-tas.svg',
      alt: 'Contoh tas wanita preloved mulus',
      isPlaceholder: true,
    },
    {
      id: 'shoes',
      name: 'Sepatu & Sandal',
      description: 'Pointed heels, flat shoes, block heels, sneakers cewek.',
      exampleBrands: 'Pedro, Charles & Keith, Melissa, Nike, Adidas, Veja',
      iconName: 'footprints',
      imagePath: 'kategori-sepatu.svg',
      alt: 'Contoh sepatu wanita terawat',
      isPlaceholder: true,
    },
    {
      id: 'accessories',
      name: 'Jam & Aksesoris',
      description: 'Jam tangan wanita, kacamata hitam, scarf sutra, aksesoris premium.',
      exampleBrands: 'Fossil, Daniel Wellington, Ray-Ban, Olivia Burton',
      iconName: 'watch',
      imagePath: 'kategori-aksesoris.svg',
      alt: 'Contoh jam tangan dan aksesoris wanita',
      isPlaceholder: true,
    },
    {
      id: 'beauty',
      name: 'Skincare & Makeup (Baru)',
      description: 'Wajib kondisi 100% BARU dan masih tersegel (sealed / unopened).',
      exampleBrands: 'Dior, SK-II, Rare Beauty, Somethinc, Laneige, Rom&nd',
      iconName: 'sparkles',
      imagePath: 'kategori-skincare.svg',
      alt: 'Contoh skincare baru bersegel resmi',
      isPlaceholder: true,
    },
  ] as CategoryItem[],

  // ==========================================
  // 6. CONTOH BARANG TERJUAL (GALERI)
  // ==========================================
  soldGallery: [
    {
      id: 'barang-1',
      title: 'Coach Sierra Satchel Crossbody',
      category: 'Tas Wanita',
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
      category: 'Fashion',
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
      category: 'Footwear',
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
      category: 'Beauty',
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
      category: 'Tas Wanita',
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
      category: 'Aksesoris & Jam',
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
      answer: 'Kami TIDAK menerima barang palsu/KW/tiruan (KW Super, 1:1, dsb), pakaian yang bernoda membandel atau sobek, pakaian dalam, serta skincare/makeup yang sudah pernah dibuka atau bekas pakai demi alasan kebersihan dan keamanan.',
    },
    {
      question: 'Siapa yang menentukan harga jual barang?',
      answer: 'Harga jual ditentukan atas persetujuan bersama. Kamu bisa mengajukan nominal yang diharapkan (harga bersih/nett), dan Kak Izah akan memberikan saran harga pasar preloved yang realistis agar barangmu cepat dilirik calon pembeli.',
    },
    {
      question: 'Apakah identitas saya sebagai penitip dirahasiakan?',
      answer: 'Ya, 100% anonim bila kamu menginginkannya. Kami tidak akan mempublikasikan nama akun media sosial atau nomor pribadi kamu ke calon pembeli.',
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

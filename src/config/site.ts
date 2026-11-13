
/**
 * KONFIGURASI TERPUSAT - TITIP JUAL IZAH
 * 
 * Semua data penting (nomor WhatsApp, sistem layanan, alur daftar,
 * syarat & ketentuan, FAQ, dan media sosial) dikelola dari satu file ini.
 */

export interface ServiceSystem {
  id: 'terima-beres' | 'titip-biasa';
  nama: string;
  badge: string;
  isPopular?: boolean;
  tagline: string;
  keunggulan: string;
  cocokUntuk: string;
  biaya: string;
  biayaDetail: string;
  checklistTitle: string;
  checklist: string[];
  mediaPromosi: string;
  catatanPenitip: string;
  buttonText: string;
  waMessage: string;
}

export interface ComparisonRow {
  fitur: string;
  terimaBeres: string;
  titipBiasa: string;
}

export interface StepItem {
  number: string;
  title: string;
  desc: string;
}

export interface TermItem {
  systemTitle: string;
  systemSubtitle: string;
  terms: string[];
  closingNote: string;
}

export interface CategoryItem {
  slug: string;
  nama: string;
  foto: string;
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
  imagePath: string;
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
  imagePath: string;
  alt: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ClosingSectionConfig {
  greetingBubble: string;
  title: string;
  description: string;
  buttonText: string;
  photoAlt: string;
}

export const siteConfig = {
  // ==========================================
  // 1. BRAND & IDENTITAS
  // ==========================================
  brandName: 'Titip Jual Izah',
  ownerName: 'Kak Izah',
  tagline: 'Lemari Penuh Jadi Uang? Biar Izah yang Urus Sampai Laku!',
  description: 'Jasa titip jual baju & fashion preloved wanita terpercaya oleh Kak Izah. Tersedia Sistem Terima Beres dan Titip Jual Biasa.',
  siteUrl: 'https://titipjualizah.vercel.app',

  // ==========================================
  // 2. KONTAK & WHATSAPP RESMI
  // ==========================================
  whatsappNumber: '6282139956462',
  whatsappDisplay: '+62 821-3995-6462',
  defaultWaMessage: 'Halo Kak Izah, saya mau titip jual barang',
  terimaBeresWaMessage: 'Halo Kak Izah, saya tertarik sistem Terima Beres',
  titipBiasaWaMessage: 'Halo Kak Izah, saya tertarik sistem Titip Jual Biasa',
  paymentNote: 'Metode pembayaran: transfer bank, e-wallet, dan QRIS (info lengkap lewat chat WhatsApp)',
  
  // ==========================================
  // 3. MEDIA SOSIAL RESMI (@titipjualizah)
  // ==========================================
  socialHandle: '@titipjualizah',
  instagramUrl: 'https://instagram.com/titipjualizah',
  tiktokUrl: 'https://tiktok.com/@titipjualizah',
  threadsUrl: 'https://threads.net/@titipjualizah',

  // ==========================================
  // 3B. BAGIAN PENUTUP PERSONAL (FOTO IZAH + WA)
  // ==========================================
  closingSection: {
    greetingBubble: 'Halo, aku Izah!',
    title: 'Yuk ngobrol dulu, barangnya biar aku yang urus.',
    description: 'Punya baju atau fashion yang menumpuk di lemari? Kirimkan saja fotonya lewat WhatsApp, santai tanya-tanya dulu tanpa komitmen.',
    buttonText: 'Chat Izah di WhatsApp',
    photoAlt: 'Izah, pemilik Titip Jual Izah',
  } as ClosingSectionConfig,

  // ==========================================
  // 4. DUA SISTEM LAYANAN (PILIH SISTEMMU)
  // ==========================================
  serviceSystems: [
    {
      id: 'terima-beres',
      nama: 'Sistem Terima Beres',
      badge: 'Paling Praktis',
      isPopular: true,
      tagline: 'Kirim barang ke admin, kamu tinggal santai menunggu laporan penjualan.',
      keunggulan: 'Praktis, hemat waktu, tanpa repot teknis penjualan sama sekali.',
      cocokUntuk: 'Cocok untuk penitip yang sibuk atau ingin layanan menyeluruh.',
      biaya: 'Rp7.000 / baju',
      biayaDetail: 'DP Rp4.000/baju di awal setelah paket diterima admin, sisa Rp3.000/baju saat barang sudah ada yang checkout.',
      checklistTitle: 'Yang Kak Izah kerjakan:',
      checklist: [
        'Foto aesthetic produk yang memikat pembeli',
        'Ukur lengkap pakaian (LD, PJ, dan detail bahan)',
        'Posting di 4 media sosial secara konsisten',
        'Packing rapi + diberi parfum biar wangi & premium',
        'Kirim langsung paket ke kantor ekspedisi',
      ],
      mediaPromosi: 'Grup WA + Story WA (900–1.000 penonton & anggota aktif), Instagram Feed & Story, TikTok Postingan & Story, serta Threads.',
      catatanPenitip: 'Penitip cukup kirim barang ke alamat admin (ongkir ditanggung penitip) lalu tunggu laporan cuan!',
      buttonText: 'Daftar Terima Beres',
      waMessage: 'Halo Kak Izah, saya tertarik sistem Terima Beres',
    },
    {
      id: 'titip-biasa',
      nama: 'Sistem Titip Jual Biasa',
      badge: 'Lebih Ekonomis',
      isPopular: false,
      tagline: 'Barang tetap di rumahmu. Admin bantu postingkan promosi ke ribuan calon pembeli.',
      keunggulan: 'Biaya jasa sangat ekonomis, barang tidak perlu dikirim ke admin.',
      cocokUntuk: 'Cocok untuk penitip yang punya waktu luang dan ingin hemat biaya jasa.',
      biaya: 'Mulai Rp5.000 / foto',
      biayaDetail: 'Paket Hemat Rp25.000 untuk 10 foto (hanya Rp2.500/foto) atau Satuan Rp5.000/foto. Dihitung PER FOTO (kolase 4–6 baju dalam 1 frame tetap dihitung 1 foto!).',
      checklistTitle: 'Benefit tiap foto yang diposting:',
      checklist: [
        '1x Posting Instagram Feed + Story',
        '1x Posting Threads',
        '1x Posting TikTok',
        '1x Share ke Grup WhatsApp 200+ member aktif',
      ],
      mediaPromosi: 'Instagram, TikTok, Threads, dan Grup WhatsApp 200+ anggota aktif.',
      catatanPenitip: 'Penitip yang foto, ukur, packing, dan kirim sendiri ke pembeli. Customer akan langsung chat ke WhatsApp kamu.',
      buttonText: 'Daftar Titip Jual Biasa',
      waMessage: 'Halo Kak Izah, saya tertarik sistem Titip Jual Biasa',
    },
  ] as ServiceSystem[],

  // ==========================================
  // 4B. TABEL PERBANDINGAN SINGKAT SISTEM
  // ==========================================
  comparisonRows: [
    {
      fitur: 'Pengambilan & Edit Foto',
      terimaBeres: 'Admin yang foto (aesthetic & rapi)',
      titipBiasa: 'Penitip foto sendiri dari rumah',
    },
    {
      fitur: 'Pengukuran Baju (LD / PJ)',
      terimaBeres: 'Admin ukur lengkap & detail',
      titipBiasa: 'Penitip ukur mandiri',
    },
    {
      fitur: 'Keberadaan Barang Fisik',
      terimaBeres: 'Dikirim ke alamat admin (ongkir dari penitip)',
      titipBiasa: 'Barang tetap disimpan di rumah penitip',
    },
    {
      fitur: 'Packing & Kirim ke Pembeli',
      terimaBeres: 'Admin packing rapi + disemprot parfum wangi',
      titipBiasa: 'Penitip packing dan kirim mandiri',
    },
    {
      fitur: 'Komunikasi Calon Pembeli',
      terimaBeres: 'Ditangani penuh oleh admin sampai deal',
      titipBiasa: 'Customer langsung chat ke WhatsApp penitip',
    },
    {
      fitur: 'Biaya Jasa',
      terimaBeres: 'Rp7.000 / baju (DP Rp4.000 + Pelunasan Rp3.000)',
      titipBiasa: 'Rp5.000 / foto (Paket Hemat 10 foto Rp25.000)',
    },
    {
      fitur: 'Media Jangkauan Promosi',
      terimaBeres: '4 Sosmed + Story/Grup WA (900–1.000 viewers & members)',
      titipBiasa: '4 Sosmed + Grup WA (200+ members aktif)',
    },
  ] as ComparisonRow[],

  // ==========================================
  // 5. ALUR DAFTAR (TITIP JUAL BIASA)
  // ==========================================
  registrationSteps: [
    {
      number: '01',
      title: 'Transfer Biaya Sesuai Foto',
      desc: 'Pilih paket satuan atau paket hemat, lalu transfer biaya jasa dan kirimkan bukti transfer ke WhatsApp Kak Izah.',
    },
    {
      number: '02',
      title: 'Isi Format Data & Kirim Foto',
      desc: 'Isi format data penitip serta kirimkan foto-foto baju yang ingin diposting (bisa foto satuan atau kolase 4–6 baju per frame).',
    },
    {
      number: '03',
      title: 'Quality Control (QC) Admin',
      desc: 'Admin akan mengecek kelayakan foto, kelengkapan caption, dan memastikan baju memenuhi kriteria (maksimal 1x24 jam).',
    },
    {
      number: '04',
      title: 'Lolos QC & Siap Tayang',
      desc: 'Foto yang lolos langsung dijadwalkan posting di Instagram, TikTok, Threads, dan Grup WhatsApp. Tunggu chat dari pembeli!',
    },
  ] as StepItem[],

  captionFormatRule: 'Tiap foto wajib dilengkapi caption rapi: detail bahan, LD (Lebar Dada), PJ (Panjang Baju), harga jual, dan kondisi/minus secara jujur tanpa typo harga agar tidak membingungkan pembeli.',

  // ==========================================
  // 6. SYARAT & KETENTUAN (TERIMA BERES & TITIP BIASA)
  // ==========================================
  termsAndConditions: [
    {
      systemTitle: 'Syarat & Ketentuan Sistem Terima Beres',
      systemSubtitle: 'Wajib dibaca sebelum mengirimkan paket baju ke alamat admin Kak Izah.',
      terms: [
        'Wajib follow akun TikTok dan Instagram @titipjualizah sebelum mendaftar.',
        'Sebelum kirim barang, wajib kirim foto satu per satu via WhatsApp untuk dicek model oleh admin (ada beberapa kriteria model yang tidak diterima).',
        'Pakaian wajib dalam kondisi bersih, sudah dicuci, dan tidak berdebu.',
        'Layak pakai dan layak jual. Minus minor (noda samar, sedikit transfer warna) masih bisa diterima. Kerusakan mayor (bolong, noda besar, luntur parah) tidak bisa diproses.',
        'Jumlah barang: minimal 10 pcs, maksimal 30 pcs per sekali pengiriman.',
        'Ongkos kirim paket ke alamat admin ditanggung oleh penitip.',
        'Biaya jasa Rp7.000/pcs: DP Rp4.000/pcs dibayar setelah paket diterima admin, dan sisa Rp3.000/pcs dilunasi saat 50% dari total barang terjual.',
        'Harga jual ditentukan oleh penitip sendiri atau bisa mengikuti rekomendasi realistis dari admin.',
      ],
      closingNote: 'Dengan menitipkan barang ke sistem Terima Beres, penitip dianggap telah membaca dan menyetujui seluruh ketentuan di atas.',
    },
    {
      systemTitle: 'Syarat & Ketentuan Sistem Titip Jual Biasa',
      systemSubtitle: 'Wajib dipahami oleh penitip yang memilih memegang barang sendiri.',
      terms: [
        'Wajib follow akun TikTok dan Instagram @titipjualizah sebelum mendaftar.',
        'Foto wajib lengkap dengan caption detail (bahan, LD, PJ, harga, kondisi, serta minus secara jujur).',
        'Barang harus layak pakai dan layak jual (tanpa sobek, bolong, atau luntur parah). Jika terbukti menipu customer, penitip langsung di-blacklist permanen.',
        'Posting foto dilakukan setelah: lunas pembayaran biaya jasa, mengisi format data lengkap, dan foto dinyatakan lolos QC admin.',
        'Biaya dihitung per foto mulai Rp5.000/foto (foto kolase 4–6 baju dalam 1 frame tetap dihitung sebagai 1 foto).',
      ],
      closingNote: 'Catatan penting: Admin tidak bertanggung jawab atas transaksi pembayaran dan pengiriman antara penitip dan customer; tugas admin hanya di bagian promosi. Penitip wajib fast respon saat ada pembeli yang menghubungi.',
    },
  ] as TermItem[],

  // ==========================================
  // 7. DAFTAR 7 KATEGORI BARANG YANG DITERIMA
  // ==========================================
  categories: [
    {
      slug: 'baju',
      nama: 'Baju',
      foto: 'baju.jpg',
      alt: 'Kategori baju wanita preloved berkualitas di Titip Jual Izah',
      sub: 'Dress, blazer, tunik, kemeja, blouse, knitwear',
    },
    {
      slug: 'celana',
      nama: 'Celana',
      foto: 'celana.jpg',
      alt: 'Kategori celana wanita di Titip Jual Izah',
      sub: 'Celana bahan, kulot, denim/jeans, rok panjang',
    },
    {
      slug: 'tas',
      nama: 'Tas',
      foto: 'tas.jpg',
      alt: 'Kategori tas wanita preloved di Titip Jual Izah',
      sub: 'Handbag, shoulder bag, tote bag, sling bag, dompet',
    },
    {
      slug: 'jam-tangan',
      nama: 'Jam tangan',
      foto: 'jam-tangan.jpg',
      alt: 'Kategori jam tangan wanita di Titip Jual Izah',
      sub: 'Jam tangan wanita original, lengkap box & kartu',
    },
    {
      slug: 'sepatu-sandal',
      nama: 'Sepatu & sandal',
      foto: 'sepatu-sandal.jpg',
      alt: 'Kategori sepatu dan sandal wanita di Titip Jual Izah',
      sub: 'Pointed heels, flat shoes, sneakers cewek, mules',
    },
    {
      slug: 'hijab',
      nama: 'Hijab',
      foto: 'hijab.jpg',
      alt: 'Kategori hijab dan scarf wanita di Titip Jual Izah',
      sub: 'Pashmina silk, scarf motif, square hijab premium',
    },
    {
      slug: 'skincare-makeup',
      nama: 'Skincare & makeup',
      foto: 'skincare-makeup.jpg',
      alt: 'Kategori skincare dan makeup baru di Titip Jual Izah',
      sub: 'Wajib 100% Baru & Masih Bersegel Pabrik',
    },
  ] as CategoryItem[],

  // ==========================================
  // 8. CONTOH BARANG TERJUAL (GALERI)
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
      isPlaceholder: false,
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
      isPlaceholder: false,
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
      isPlaceholder: false,
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
      isPlaceholder: false,
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
      isPlaceholder: false,
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
      isPlaceholder: false,
    },
  ] as GalleryItem[],

  // ==========================================
  // 9. TESTIMONI ASLI (CHAT WHATSAPP PENITIP)
  // ==========================================
  testimonials: [
    {
      id: 'testi-1',
      senderName: 'Testimonial Penitip',
      itemSold: '3 Pcs Baju Sold di TikTok',
      message: 'Kemaren itu pas tipjul pertamaa gacor bgt di tiktok ada 3 baju yg sold, trs pas tipjul keduaa banyak bgt yg wa aku uda ada 2 baju yg soldd, skrng uda mau tipjul yg ke 3 kalinya 😭😭❤️❤️',
      date: 'Testimoni Asli @titipjualizah',
      imagePath: 'testi-1.jpg',
      alt: 'Screenshot chat WhatsApp bukti kepuasan penitip baju di Titip Jual Izah',
      isPlaceholder: false,
    },
    {
      id: 'testi-2',
      senderName: 'Testimonial Penitip',
      itemSold: 'Jasa Titip Jual Baju',
      message: 'Trima kasih banyak kak. Sangat bermanfaat sekalii 🙏🏼... Oke terima kasih banyak kk puas bngt pakek jatipnya kk 🥰❤️',
      date: 'Testimoni Asli @titipjualizah',
      imagePath: 'testi-2.jpg',
      alt: 'Screenshot testimoni puas penitip di Titip Jual Izah',
      isPlaceholder: false,
    },
  ] as TestimonialItem[],

  // ==========================================
  // 10. FAQ (PERTANYAAN UMUM LENGKAP DENGAN 2 SISTEM)
  // ==========================================
  faqs: [
    {
      question: 'Bedanya sistem Terima Beres dan Titip Jual Biasa apa, Kak?',
      answer: 'Di sistem Terima Beres, kamu tinggal kirim baju ke alamat admin. Kak Izah yang urus foto aesthetic, ukur LD/PJ, posting, packing wangi, sampai kirim ke pembeli (biaya Rp7.000/baju). Sedangkan di sistem Titip Jual Biasa, baju tetap di rumahmu; kamu yang foto, ukur, dan kirim sendiri, admin hanya bantu promosikan fotomu ke 4 sosmed (biaya mulai Rp5.000/foto atau paket hemat Rp25.000/10 foto).',
    },
    {
      question: 'Barang apa saja yang bisa dititip di Titip Jual Izah?',
      answer: 'Fokus utama kami adalah pakaian/baju wanita (dress, blazer, tunik, kemeja, blouse, knitwear, celana, kulot, rok, dan hijab). Kami juga menerima tas preloved mulus, jam tangan original, sepatu & sandal wanita, serta skincare/makeup yang wajib 100% baru dan masih bersegel resmi pabrik.',
    },
    {
      question: 'Barang saya ditolak saat cek model, kenapa ya?',
      answer: 'Admin melakukan kurasi model terlebih dahulu sebelum kamu mengirim paket untuk memastikan barang yang masuk memang diminati calon pembeli dan cepat laku. Kriteria penolakan biasanya karena model sudah terlalu out-of-date, kondisi kotor/berdebu, ada noda permanen, robek/bolong, atau bukan kategori yang kami terima.',
    },
    {
      question: 'Kapan pembayaran sisa biaya jasa untuk sistem Terima Beres?',
      answer: 'Di sistem Terima Beres, kamu hanya membayar DP sebesar Rp4.000/pcs setelah barangmu sampai dan diverifikasi oleh admin. Sisa biaya Rp3.000/pcs baru dilunasi nanti saat 50% dari total barang yang kamu titipkan sudah laku terjual.',
    },
    {
      question: 'Kalau barang saya tidak kunjung laku, bagaimana?',
      answer: 'Untuk sistem Titip Jual Biasa, postingan tetap tayang sesuai paket. Untuk sistem Terima Beres, admin akan mengevaluasi penyesuaian harga bersama kamu atau membuat konten promo ulang. Jika setelah masa titip yang disepakati barang belum terjual dan ingin ditarik kembali, barang bisa dikirim balik ke alamatmu [KONFIRMASI IZAH: syarat dan opsi retur barang titipan].',
    },
    {
      question: 'Bagaimana cara bayar biaya jasanya?',
      answer: 'Metode pembayaran kami mendukung transfer bank (BCA, Mandiri, BRI, BNI), e-wallet (GoPay, OVO, ShopeePay, DANA), dan QRIS. Detail nomor pembayaran resmi akan dikirimkan langsung oleh Kak Izah melalui chat WhatsApp saat kamu mendaftar.',
    },
    {
      question: 'Apakah barang tiruan atau KW bisa dititipkan?',
      answer: 'Sama sekali TIDAK. Kami hanya menerima 100% barang original. Jika pada sistem Titip Jual Biasa penitip terbukti mengirimkan barang palsu atau menipu pembeli, penitip akan langsung di-blacklist permanen.',
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

REVISI 5: BAGIAN PENUTUP (FOTO IZAH + WHATSAPP)

Ubah section terakhir (CtaFooter) menjadi bagian penutup yang personal, menggabungkan foto Izah dan tombol WhatsApp. Hapus section "Tentang" terpisah kalau ada, jangan ada foto Izah di tempat lain.

## Isi & layout
- Desktop: dua kolom. Foto di satu sisi, teks dan CTA di sisi lain. Mobile: foto di atas, teks dan tombol di bawahnya.
- Foto: src/assets/tentang/izah.jpg (placeholder netral [GANTI] bila belum ada), lewat <Image />, alt "Izah, pemilik Titip Jual Izah". Bingkai dengan bentuk lembut yang khas (misalnya lengkung/arch atau sudut sangat membulat) dengan sedikit offset blok pink pastel di belakangnya. Tanpa efek glow atau gradient berlebihan.
- Sentuhan lucu: gelembung chat kecil di dekat foto bertuliskan sapaan singkat (misalnya "Halo, aku Izah!") dengan animasi muncul pelan. Tombol WhatsApp tampil seperti gelembung balasan/chat bubble pink pekat.
- Teks: judul pendek bernada personal dalam bahasa santai (contoh arah: "Yuk ngobrol dulu, barangnya biar aku yang urus"), satu kalimat penutup yang hangat, lalu tombol "Chat Izah di WhatsApp". Di bawahnya tautan Instagram kecil. Jangan memakai kalimat klise.
- Tombol memakai link WA dari src/config/site.ts dengan pesan default "Halo Kak Izah, saya mau titip jual barang".
- Teks sapaan, judul, dan alt foto disimpan di src/config/site.ts supaya mudah diganti.

## Perilaku
- Tombol WhatsApp mengambang disembunyikan saat section penutup ini terlihat di layar (IntersectionObserver kecil), supaya tidak ada dua tombol WA bertumpuk.
- Animasi muncul saat scroll (fade-up ringan), hormati prefers-reduced-motion.
- Tetap mobile-first, kontras teks memadai, dan tetap pakai font Cormorant Garamond untuk judul dan DM Sans untuk teks lainnya.

## Anti slop
- Foto asli Izah saja, bukan ilustrasi atau gambar stok.
- Tanpa bintang rating, angka statistik, atau badge "terpercaya" buatan.





REVISI 6: ISI LAYANAN, HARGA, DAN KETENTUAN (kontennya final, jangan diubah maknanya)

Ganti section "Biaya/komisi" dan "Cara kerja" dengan konten layanan nyata berikut. Semua teks, harga, dan syarat disimpan di src/config/site.ts agar mudah diedit. Gaya bahasa: santai, hangat, sapaan "Kak", bahasa Indonesia sehari-hari.

## Section "Pilih sistemmu" (dua pilihan, desain tidak identik)
Tampilkan dua kartu berdampingan (mobile: bertumpuk). Kartu Terima Beres diberi penekanan sedikit lebih menonjol (label "Paling praktis"), kartu Titip Jual Biasa lebih ringan. Tambahkan tabel perbandingan singkat di bawahnya (siapa yang foto, packing, kirim, biaya, media promosi).

### 1. Sistem TERIMA BERES
- Alur: penitip kirim barang ke alamat admin (ongkir ditanggung penitip). Admin urus semuanya: foto aesthetic, ukur lengkap, posting, packing, kirim ke pembeli.
- Keunggulan: praktis, hemat waktu, tanpa repot teknis penjualan.
- Cocok untuk: penitip yang sibuk atau ingin layanan menyeluruh.
- Biaya: Rp7.000 per baju. DP Rp4.000/baju di awal, sisa Rp3.000/baju saat barang sudah ada yang CO.
- Yang admin kerjakan (checklist): foto aesthetic, ukur lengkap, posting di 4 sosmed, packing + diberi parfum biar wangi, kirim ke kantor ekspedisi.
- Media promosi: Grup WA + Story WA (900-1000 penonton & anggota aktif), Instagram feed & story, TikTok postingan & story, Threads.
- Penitip tinggal menunggu laporan penjualan dari admin.
- Tombol: "Daftar Terima Beres" (pesan WA otomatis: "Halo Kak Izah, saya tertarik sistem Terima Beres").

### 2. Sistem TITIP JUAL BIASA
- Alur: penitip foto, ukur LD/PJ, tentukan harga, packing, dan kirim ke customer sendiri. Barang TIDAK dikirim ke admin. Admin hanya mempostingkan foto di IG, TikTok, Threads, dan Grup WA. Kalau ada yang beli, customer langsung chat penitip.
- Keunggulan: biaya jasa lebih ekonomis.
- Cocok untuk: penitip yang punya waktu luang dan ingin hemat biaya jasa.
- Pricelist: Paket Hemat Rp25.000 untuk 10 foto; satuan Rp5.000/foto. Dihitung PER FOTO (kolase 4 atau 6 baju dalam 1 frame dihitung 1 foto).
- Benefit tiap foto: 1x posting IG Feed + Story, 1x Threads, 1x TikTok, 1x share ke Grup WA 200+ member aktif.
- Media promosi: Instagram, TikTok, Threads, Grup WhatsApp 200+ anggota aktif.
- Tombol: "Daftar Titip Jual Biasa" (pesan WA otomatis: "Halo Kak Izah, saya tertarik sistem Titip Jual Biasa").

## Section "Alur daftar" (Titip Jual Biasa)
Langkah bernomor: 1) Transfer sesuai jumlah foto lalu kirim bukti via WA. 2) Isi format data dan kirim foto yang mau diposting. 3) Admin QC maksimal 1x24 jam. 4) Lolos QC langsung dijadwalkan posting.
Aturan format foto: tiap foto wajib punya caption berisi detail bahan, LD, PJ, harga, dan kondisi minus secara jujur, tanpa typo harga.

## Section "Syarat & ketentuan" (accordion <details>, satu per sistem)
Terima Beres:
1. Wajib follow akun TikTok dan Instagram @titipjualizah.
2. Sebelum kirim barang, wajib kirim foto satu per satu untuk dicek model oleh admin (ada beberapa kriteria yang tidak diterima).
3. Pakaian bersih, sudah dicuci, tidak berdebu.
4. Layak pakai dan layak jual. Minus minor (noda samar, sedikit transfer warna) masih bisa diterima. Kerusakan mayor (bolong, noda besar, luntur parah) tidak bisa diproses.
5. Jumlah minimal 10 pcs, maksimal 30 pcs per sekali kirim.
6. Ongkir ke alamat admin ditanggung penitip.
7. Biaya jasa Rp7.000/pcs: DP Rp4.000/pcs setelah paket diterima admin, sisa Rp3.000/pcs dilunasi saat 50% dari total barang terjual.
8. Harga jual ditentukan penitip sendiri atau mengikuti rekomendasi admin.
Dengan menitipkan barang, penitip dianggap setuju dengan semua syarat di atas.

Titip Jual Biasa:
1. Wajib follow akun TikTok dan Instagram @titipjualizah sebelum daftar.
2. Foto wajib lengkap dengan caption (bahan, LD, PJ, harga, kondisi minus jujur).
3. Barang layak pakai dan layak jual (tanpa sobek, bolong, luntur parah). Jika terbukti menipu, penitip
 di-blacklist.
4. Posting dilakukan setelah: lunas pembayaran, isi format data, dan foto lolos QC admin.
5. Biaya dihitung per foto, mulai Rp5.000/foto.
Catatan penting: admin tidak bertanggung jawab atas transaksi antara penitip dan customer; tugas admin hanya promosi. Penitip harus fast respon saat ada yang chat mau membeli.

## Yang JANGAN dimasukkan ke website
- Nomor rekening, nomor DANA, nama pemilik rekening, atau QRIS. Info pembayaran hanya dikirim lewat WhatsApp. Di website cukup tulis "Metode pembayaran: transfer bank, e-wallet, dan QRIS (info lengkap lewat chat WhatsApp)".

## Penyesuaian lain
- Handle sosmed: @titipjualizah di Instagram, TikTok, dan Threads. Siapkan tautan di site.ts (link TikTok dan Threads diberi placeholder [GANTI] bila belum ada).
- Hero dan FAQ disesuaikan: fokus utama layanan baju/pakaian; jelaskan dua sistem secara singkat dan arahkan ke section pilihan sistem.
- FAQ tambahan: "Bedanya Terima Beres dan Titip Jual Biasa apa?", "Barang saya ditolak, kenapa?", "Kapan bayar sisa biaya?", "Kalau barang tidak laku bagaimana?" (jawaban yang belum pasti diberi [KONFIRMASI IZAH], jangan dikarang).
- Tetap ikuti aturan anti-slop, font Cormorant Garamond + DM Sans, dan bagian penutup foto Izah + WhatsApp dari revisi sebelumnya.
# 🌸 Titip Jual Izah (Project: `titipjualizah`)

Landing page resmi **Titip Jual Izah** — Jasa titip jual barang-barang cewek oleh **Kak Izah**. Dibangun dengan arsitektur **Astro (Static)**, **Tailwind CSS**, dan **TypeScript**.

Desain berkonsep feminin pastel (*soft blush*, *peach*, *warm cream*, aksen *deep rose*), bersih, terstruktur, bebas AI slop, dan mobile-first dengan performa tinggi.

---

## 📞 Informasi Kontak Resmi Terpasang

- **WhatsApp Resmi:** `+62 821-3995-6462`
  - URL Chat: `https://wa.me/6282139956462?text=Halo%20Kak%20Izah,%20saya%20mau%20titip%20jual%20barang`
- **Instagram Resmi:** [@titipjual_izah](https://instagram.com/titipjual_izah)
- **Logo Resmi:** Menggunakan aset logo `titipjual IZAH` warna pink dengan pita di atas huruf t.
- **Testimoni Nyata:** Dilengkapi screenshot bukti chat WhatsApp asli dari penitip puas (@titipjual_izah).

---

## 📁 Mengapa Folder di Komputer Masih `titipjualayyu`?

Di sistem operasi Windows, sebuah folder **tidak dapat di-rename saat sedang aktif dibuka oleh aplikasi/terminal** (*directory in use lock*).

**Cara mudah me-rename foldernya menjadi `titipjualizah`:**
1. Tutup aplikasi Antigravity / VS Code / terminal ini.
2. Buka File Explorer dan masuk ke folder `D:\joki_child\Ayuu\`.
3. Klik kanan folder `titipjualayyu`, pilih **Rename** ➔ ganti menjadi **`titipjualizah`**.
4. Buka kembali folder `titipjualizah` di Antigravity / editor Anda. Selesai!

> Seluruh konfigurasi di dalamnya (`package.json`, Vercel, branding, dan komponen) sudah 100% menggunakan identitas **`titipjualizah`**.

---

## ⚙️ Pengaturan Komisi (Tersisa yang Perlu Anda Isi)

Buka file [`src/config/site.ts`](src/config/site.ts), bagian `commissionTiers`:
- Ubah `'[KOMISI: ...%]'` untuk Fashion (misal `'15%'`)
- Ubah `'[KOMISI: ...%]'` untuk Tas & Sepatu Branded (misal `'10% - 12%'`)
- Ubah `'[KOMISI: ...%]'` untuk Skincare & Aksesoris (misal `'10%'`)

---

## 💻 Cara Menjalankan & Preview

1. **Jalankan local dev server:**
   ```bash
   npm run dev
   ```
   Buka di browser: [http://localhost:4321](http://localhost:4321)

2. **Build produksi:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🚀 Cara Deploy ke Vercel (`titipjualayyu.vercel.app`)

1. Push ke repository GitHub Anda.
2. Di [vercel.com](https://vercel.com), import repository tersebut.
3. Vercel otomatis mendeteksi framework preset **Astro**.
4. Beri nama project `titipjualayyu` agar beralamat di `titipjualayyu.vercel.app`.
5. Klik **Deploy**!

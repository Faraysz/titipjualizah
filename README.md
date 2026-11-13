# 🌸 Titip Jual Izah (Project: `titipjualizah`)

Landing page resmi **Titip Jual Izah** — Jasa titip jual barang-barang cewek oleh **Kak Izah**. Dibangun dengan arsitektur **Astro (Static)**, **Tailwind CSS**, dan **TypeScript**.

Desain berkonsep feminin pastel (*soft blush*, *peach*, *warm cream*, aksen *deep rose*), terinspirasi dari prinsip desain rapi & terpercaya [ALLU Indonesia](https://allu-id.com/id/), bebas AI slop, dan mobile-first dengan performa tinggi.

---

## 🎨 Tipografi Final (Self-Hosted via Fontsource)

- **Heading:** `Cormorant Garamond` (bobot 500 dan 600, plus italic 500 di hero)
- **Body & Controls:** `DM Sans` (bobot 400, 500, 600)
- **CSS Variables:** `--font-heading` (fallback: `Georgia, serif`) dan `--font-body` (fallback: `system-ui, sans-serif`)
- Preloaded dan `font-display: swap` untuk performa render cepat tanpa layout shift.

---

## 👗 7 Kategori Barang yang Diterima

Daftar 7 kategori resmi disusun rapi dan disimpan di [`src/config/site.ts`](src/config/site.ts):

1. **Baju** (`baju.jpg`) — Blazer, dress, kemeja, tunik, blouse, knitwear
2. **Celana** (`celana.jpg`) — Celana bahan, kulot, denim/jeans, rok panjang
3. **Tas** (`tas.jpg`) — Handbag, shoulder bag, tote bag, sling bag, dompet
4. **Jam tangan** (`jam-tangan.jpg`) — Jam tangan wanita original, lengkap box & kartu
5. **Sepatu & sandal** (`sepatu-sandal.jpg`) — Pointed heels, flat shoes, sneakers cewek, mules
6. **Hijab** (`hijab.jpg`) — Pashmina silk, scarf motif, square hijab premium
7. **Skincare & makeup** (`skincare-makeup.jpg`) — Kondisi: **[GANTI: Wajib Baru & Masih Bersegel Resmi]**

> *Tiap kartu kategori dapat diklik langsung untuk membuka WhatsApp dengan pesan otomatis, misalnya: `"Halo Kak Izah, saya mau titip jual Baju"`.*  
> *Dilengkapi kartu ke-8 sebagai penutup simetris: **"Lainnya? Tanya dulu lewat WhatsApp"**.*

---

## 🖼️ Tempat Menaruh Foto Asli (`src/assets/`)

| Folder Asset | Deskripsi | Ukuran/Rasio Ideal |
|---|---|---|
| **`src/assets/kategori/`** | 7 Foto Kategori (`baju.jpg`, `celana.jpg`, `tas.jpg`, `jam-tangan.jpg`, `sepatu-sandal.jpg`, `hijab.jpg`, `skincare-makeup.jpg`) | 1:1 (Persegi, 600x600 px) |
| **`src/assets/hero/`** | Foto showcase hero utama (`hero-showcase.svg`) | 4:3 (800x600 px) |
| **`src/assets/barang/`** | Foto barang terjual (`barang-1.svg` s/d `barang-6.svg`) | 1:1 (600x600 px) |
| **`src/assets/testimoni/`** | Screenshot chat WhatsApp asli (`testi-1.jpg`, `testi-2.jpg`) | 9:16 Story / Portrait |
| **`src/assets/logo.jpg`** | Logo resmi Titip Jual Izah (sudah terpasang) | Persegi / Monogram |

---

## 📞 Kontak & Medsos Resmi Terpasang

- **WhatsApp:** `+62 821-3995-6462`
- **Instagram:** [@titipjual_izah](https://instagram.com/titipjual_izah)

---

## ⚙️ Pengaturan Komisi (Tersisa yang Perlu Anda Isi)

Buka file [`src/config/site.ts`](src/config/site.ts), bagian `commissionTiers`:
- Ubah `'[KOMISI: ...%]'` untuk **Baju, Celana & Hijab** (misal `'15%'`)
- Ubah `'[KOMISI: ...%]'` untuk **Tas & Jam Tangan Branded** (misal `'10% - 12%'`)
- Ubah `'[KOMISI: ...%]'` untuk **Sepatu & Sandal, Skincare & Makeup** (misal `'10%'`)

---

## 💻 Cara Menjalankan & Preview Lokal

1. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Buka browser di: [http://localhost:4321](http://localhost:4321)

2. **Uji build statis produksi:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🚀 Deploy ke Vercel (`titipjualayyu.vercel.app`)

1. Commit dan push project ke GitHub.
2. Di [vercel.com](https://vercel.com), klik **Import Project**.
3. Vercel otomatis mendeteksi preset framework **Astro**.
4. Beri nama project `titipjualayyu` (agar otomatis beralamat di `titipjualayyu.vercel.app`).
5. Klik **Deploy**!

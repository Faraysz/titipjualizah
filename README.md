<div align="center">

# 🌸 Titip Jual Izah

**Landing Page Resmi Jasa Titip Jual Barang Wanita oleh Kak Izah**

[![Astro](https://img.shields.io/badge/Astro-Static%20Site-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3/4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-4CAF50?style=for-the-badge)](LICENSE)

</div>

---

## 🎯 Tentang Proyek Ini

**Titip Jual Izah** adalah website landing page resmi untuk layanan jasa titip jual barang-barang wanita (fashion, tas & sepatu branded, skincare, dan aksesoris) yang dikelola oleh **Kak Izah**. 

Dibangun dengan arsitektur **Static Site Generation (SSG)** menggunakan **Astro** dan **Tailwind CSS**, website ini menghadirkan desain berkonsep feminin pastel (*soft blush, peach, warm cream*, dengan aksen *deep rose*) yang bersih, terstruktur, *mobile-first*, dan memiliki performa muat yang sangat tinggi.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---------|-------------|
| 🎨 **Desain Feminin & Modern** | Palet warna pastel yang elegan, tipografi rapi, dan tata letak yang membangun kepercayaan (*trust*). |
| ⚡ **Performa Tinggi (Astro)** | Output HTML statis murni dengan *zero JavaScript by default*, memastikan skor Lighthouse 95-100. |
| 📱 **Mobile-First Responsive** | Tampilan optimal di semua perangkat, mengingat mayoritas pengguna mengakses via smartphone. |
| 💬 **Integrasi Kontak Langsung** | Tombol WhatsApp yang terhubung langsung ke `+62 821-3995-6462` dengan pesan template otomatis. |
| ⭐ **Testimoni Nyata** | Bagian khusus yang menampilkan bukti screenshot chat WhatsApp asli dari penitip yang puas. |
| 📊 **Tabel Komisi Transparan** | Informasi persentase komisi yang jelas untuk berbagai kategori barang (Fashion, Tas/Sepatu, Skincare). |

---

## 📂 Struktur Proyek

```text
titipjualizah/
├── public/                 # Aset statis (logo, favicon, screenshot testimoni, robots.txt)
├── src/
│   ├── components/         # Komponen UI modular (Navbar, Hero, CommissionTable, Testimonials, Footer)
│   ├── config/
│   │   └── site.ts         # 📍 PUSAT KONFIGURASI: Kontak, link sosial media, dan persentase komisi
│   ├── layouts/
│   │   └── Base.astro      # Shell HTML utama, meta tags SEO, dan global styles
│   ├── pages/
│   │   └── index.astro     # Halaman utama landing page
│   └── styles/
│       └── global.css      # Design tokens kustom (warna pastel) dan utilitas Tailwind
├── astro.config.mjs        # Konfigurasi Astro & integrasi
├── tailwind.config.mjs     # Konfigurasi tema warna pastel kustom
├── package.json            # Dependensi dan skrip npm
└── vercel.json             # Konfigurasi deployment untuk Vercel

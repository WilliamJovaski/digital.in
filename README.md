# Digital.in

Platform yang menghubungkan **UMKM** dengan **talenta mahasiswa** untuk digitalisasi usaha —
konten sosial media, logo & branding, website, setup marketplace, dan pembukuan digital.

## Stack

- **React 18** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS** (design token khas: evergreen + terracotta, font Fraunces + Inter)
- **React Router**

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build produksi

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  components/   # primitives: Button, Icon, Logo, Header, Footer
  sections/     # bagian landing page (Hero, HowItWorks, dst.)
  pages/        # halaman (Landing)
  lib/          # util kecil
  index.css     # design tokens & utility Tailwind
tailwind.config.js  # palet warna, font, radius, shadow khas
```

## Identitas visual

Warna utama hijau hutan (evergreen) dengan aksen terakota (clay) dan kanvas krem hangat (sand).
Judul memakai serif modern **Fraunces**, teks memakai **Inter**. Tujuannya: terasa lokal,
profesional, dan punya karakter — bukan template generik.

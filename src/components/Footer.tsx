import { Logo } from './Logo'

const columns = [
  {
    title: 'Platform',
    links: ['Cara kerja', 'Untuk UMKM', 'Untuk Mahasiswa', 'Kategori jasa'],
  },
  {
    title: 'Perusahaan',
    links: ['Tentang kami', 'Karier', 'Blog', 'Kontak'],
  },
  {
    title: 'Bantuan',
    links: ['Pusat bantuan', 'Keamanan', 'Syarat & ketentuan', 'Kebijakan privasi'],
  },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-sand-200 bg-sand-100/60">
      <div className="container-x grid grid-cols-2 gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Menghubungkan usaha kecil dengan talenta mahasiswa untuk tumbuh di dunia digital,
            dengan harga yang masuk akal dan hasil yang nyata.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-faint">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-ink-muted transition hover:text-forest-700"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-sand-200">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-faint md:flex-row">
          <p>© {new Date().getFullYear()} Digital.in. Dibuat untuk UMKM Indonesia.</p>
          <p>Karya mahasiswa, untuk usaha kecil yang mau naik kelas.</p>
        </div>
      </div>
    </footer>
  )
}

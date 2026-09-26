import { IconStar } from '../components/Icon'

const testimonials = [
  {
    quote:
      'Konten Instagram warung saya jadi rapi dan konsisten. Pesanan naik hampir dua kali lipat dalam sebulan.',
    name: 'Ibu Sari',
    role: 'Warung Ibu Sari, Yogyakarta',
    bg: 'bg-clay-100 text-clay-700',
  },
  {
    quote:
      'Dapat proyek website pertama lewat Digital.in. Portofolio bertambah dan sekarang ada pemasukan tetap.',
    name: 'Rangga Saputra',
    role: 'Mahasiswa Informatika, ITB',
    bg: 'bg-forest-100 text-forest-700',
  },
  {
    quote:
      'Pembukuan usaha akhirnya rapi. Waktu ajukan pinjaman modal, laporannya langsung diterima bank.',
    name: 'Pak Budi',
    role: 'Berkah Furniture, Jepara',
    bg: 'bg-sand-300 text-forest-800',
  },
]

export function Testimonials() {
  return (
    <section className="bg-sand-100/50 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Cerita mereka</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-[38px]">
            Usaha tumbuh, mahasiswa berkembang.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-card border border-sand-200 bg-white p-6 shadow-soft">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} size={16} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full font-semibold ${t.bg}`}>
                  {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { Button } from '../components/Button'
import { IconStore, IconCap, IconSpark } from '../components/Icon'

type Role = 'umkm' | 'mahasiswa'

const config: Record<
  Role,
  { badge: string; Icon: typeof IconStore; name: string; greeting: string; cards: { label: string; value: string }[]; next: string }
> = {
  umkm: {
    badge: 'Pemilik UMKM',
    Icon: IconStore,
    name: 'Kopi Anteng',
    greeting: 'Halo, Kopi Anteng',
    cards: [
      { label: 'Proyek aktif', value: '1' },
      { label: 'Lamaran masuk', value: '8' },
      { label: 'Pesan belum dibaca', value: '3' },
    ],
    next: 'Posting kebutuhan usaha & cari talenta',
  },
  mahasiswa: {
    badge: 'Mahasiswa',
    Icon: IconCap,
    name: 'Nadia Putri',
    greeting: 'Halo, Nadia',
    cards: [
      { label: 'Proyek berjalan', value: '2' },
      { label: 'Lamaran terkirim', value: '5' },
      { label: 'Penghasilan bulan ini', value: 'Rp1,2jt' },
    ],
    next: 'Cari proyek baru yang cocok dengan skill-mu',
  },
}

export default function Dashboard({ role }: { role: Role }) {
  const c = config[role]
  return (
    <div className="relative z-10 min-h-screen">
      <header className="border-b border-sand-200 bg-sand-50/85 backdrop-blur-md">
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <span className="chip">
              <c.Icon size={14} /> {c.badge}
            </span>
            <Link to="/" className="text-sm font-semibold text-forest-700 hover:underline">
              Keluar
            </Link>
          </div>
        </div>
      </header>

      <main className="container-x py-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-3xl font-semibold text-ink">{c.greeting} 👋</h1>
          <p className="text-ink-muted">Berikut ringkasan aktivitasmu di Digital.in.</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {c.cards.map((card) => (
            <div key={card.label} className="card p-6">
              <p className="text-sm text-ink-muted">{card.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-forest-700">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 rounded-card border border-dashed border-forest-200 bg-forest-50/50 p-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-600 text-sand-50">
            <IconSpark />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Langkah berikutnya</h2>
            <p className="mt-1 text-ink-muted">{c.next}</p>
          </div>
          <Button variant="primary">
            {role === 'umkm' ? 'Posting kebutuhan' : 'Cari proyek'}
          </Button>
          <p className="text-xs text-ink-faint">
            Ini halaman contoh. Fitur lengkap dashboard akan tersambung setelah back end siap.
          </p>
        </div>
      </main>
    </div>
  )
}

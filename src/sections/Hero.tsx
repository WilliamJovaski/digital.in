import { LinkButton } from '../components/Button'
import { IconArrow, IconSpark, IconStar, IconCheck } from '../components/Icon'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft organic backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-forest-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-clay-100/50 blur-3xl"
      />

      <div className="container-x grid items-center gap-14 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <IconSpark size={14} />
            Digitalisasi UMKM, oleh talenta muda
          </span>

          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.08] tracking-tight text-ink md:text-[56px]">
            Usaha kecilmu,{' '}
            <span className="relative whitespace-nowrap text-forest-700">
              naik kelas
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-clay-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c40-6 120-6 196 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            secara digital.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Digital.in mempertemukan pemilik UMKM dengan mahasiswa berbakat untuk urusan konten,
            desain, website, sampai pembukuan. Hasil profesional, harga bersahabat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton to="/daftar?peran=umkm" size="lg" variant="primary">
              Saya punya usaha
              <IconArrow size={18} />
            </LinkButton>
            <LinkButton to="/daftar?peran=mahasiswa" size="lg" variant="outline">
              Saya mahasiswa
            </LinkButton>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-2">
              <IconCheck size={16} className="text-forest-600" /> Tanpa biaya pendaftaran
            </span>
            <span className="inline-flex items-center gap-2">
              <IconCheck size={16} className="text-forest-600" /> Pembayaran aman
            </span>
          </div>
        </div>

        {/* Composed visual card — crafted, not a stock hero image */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="card overflow-hidden p-2">
            <div className="rounded-[10px] bg-gradient-to-br from-forest-700 to-forest-900 p-6 text-sand-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-forest-100">
                  Proyek berjalan
                </span>
                <span className="chip border-forest-400/40 bg-forest-600/40 text-forest-50">
                  Aktif
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Konten Instagram — Kopi Anteng
              </h3>
              <div className="mt-5 h-2 w-full overflow-hidden rounded-pill bg-forest-600/50">
                <div className="h-full w-3/4 rounded-pill bg-clay-400" />
              </div>
              <p className="mt-2 text-sm text-forest-100">3 dari 4 tahap selesai</p>
            </div>

            <div className="grid gap-2 p-3">
              <TalentRow name="Nadia Putri" role="DKV · Univ. Indonesia" rating="4,9" bg="bg-clay-100" />
              <TalentRow name="Rangga Saputra" role="Informatika · ITB" rating="5,0" bg="bg-forest-100" />
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-card border border-sand-200 bg-white px-4 py-3 shadow-lift sm:block">
            <p className="text-xs font-semibold text-ink-faint">Rata-rata selesai</p>
            <p className="font-display text-xl font-semibold text-forest-700">7 hari</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TalentRow({
  name,
  role,
  rating,
  bg,
}: {
  name: string
  role: string
  rating: string
  bg: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-sand-200 bg-white p-3">
      <div className={`grid h-11 w-11 place-items-center rounded-full ${bg} font-display font-semibold text-forest-800`}>
        {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{name}</p>
        <p className="truncate text-xs text-ink-muted">{role}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink">
        <IconStar size={14} className="text-gold" />
        {rating}
      </span>
    </div>
  )
}

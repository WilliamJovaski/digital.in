import { LinkButton } from '../components/Button'
import { IconShield, IconClock } from '../components/Icon'

export function CtaBand() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[24px] bg-forest-700 px-8 py-14 text-center text-sand-50 md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-forest-500/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-clay-500/30 blur-3xl"
          />

          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight md:text-[42px]">
            Siap membawa usahamu ke dunia digital?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-forest-100">
            Gabung gratis hari ini. Temukan talenta yang tepat atau proyek pertamamu dalam hitungan
            menit.
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton to="/daftar?peran=umkm" variant="accent" size="lg">
              Saya punya usaha
            </LinkButton>
            <LinkButton
              to="/daftar?peran=mahasiswa"
              size="lg"
              variant="outline"
              className="border-forest-300/50 text-sand-50 hover:bg-forest-600"
            >
              Saya mahasiswa
            </LinkButton>
          </div>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-forest-100">
            <span className="inline-flex items-center gap-2">
              <IconShield size={16} /> Pembayaran ditahan sampai selesai
            </span>
            <span className="inline-flex items-center gap-2">
              <IconClock size={16} /> Rata-rata proyek selesai 7 hari
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

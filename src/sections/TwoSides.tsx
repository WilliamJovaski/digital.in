import { LinkButton } from '../components/Button'
import { IconStore, IconCap, IconCheck, IconArrow } from '../components/Icon'

const umkmPoints = [
  'Konten sosial media yang konsisten tiap bulan',
  'Logo & identitas merek yang berkarakter',
  'Website dan toko online siap jualan',
  'Pembukuan rapi untuk ajukan modal usaha',
]

const mahaPoints = [
  'Proyek nyata untuk isi portofolio',
  'Penghasilan tambahan yang fleksibel',
  'Jam kerja diatur sendiri, remote',
  'Bangun reputasi lewat rating & ulasan',
]

export function TwoSides() {
  return (
    <section className="bg-sand-100/50 py-20 md:py-28">
      <div className="container-x grid gap-6 lg:grid-cols-2">
        {/* UMKM */}
        <div
          id="untuk-umkm"
          className="relative overflow-hidden rounded-[20px] bg-forest-800 p-8 text-sand-50 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-forest-600/40 blur-2xl"
          />
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-600 text-sand-50">
            <IconStore />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold md:text-3xl">Untuk pemilik UMKM</h3>
          <p className="mt-3 max-w-md text-forest-100">
            Serahkan urusan digital ke tangan yang tepat, dengan biaya yang jauh lebih ringan
            dibanding agensi.
          </p>
          <ul className="mt-6 space-y-3">
            {umkmPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px]">
                <IconCheck size={18} className="mt-0.5 shrink-0 text-clay-300" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <LinkButton to="/daftar?peran=umkm" variant="accent" size="lg" className="mt-8">
            Posting kebutuhan usaha
            <IconArrow size={18} />
          </LinkButton>
        </div>

        {/* Mahasiswa */}
        <div
          id="untuk-mahasiswa"
          className="relative overflow-hidden rounded-[20px] border border-sand-200 bg-white p-8 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-clay-100/60 blur-2xl"
          />
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-clay-100 text-clay-600">
            <IconCap />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold text-ink md:text-3xl">
            Untuk mahasiswa
          </h3>
          <p className="mt-3 max-w-md text-ink-muted">
            Ubah skill dan waktu luangmu jadi pengalaman nyata sekaligus penghasilan, tanpa
            mengganggu kuliah.
          </p>
          <ul className="mt-6 space-y-3">
            {mahaPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-ink-soft">
                <IconCheck size={18} className="mt-0.5 shrink-0 text-forest-600" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <LinkButton to="/daftar?peran=mahasiswa" variant="primary" size="lg" className="mt-8">
            Mulai cari proyek
            <IconArrow size={18} />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}

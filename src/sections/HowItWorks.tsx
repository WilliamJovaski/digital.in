const steps = [
  {
    num: '01',
    title: 'Ceritakan kebutuhanmu',
    desc: 'Tulis apa yang usahamu perlukan — konten, logo, website, atau pembukuan. Cukup beberapa menit.',
  },
  {
    num: '02',
    title: 'Pilih talenta yang cocok',
    desc: 'Lihat portofolio, rating, dan harga mahasiswa. Pilih yang paling pas dengan gaya usahamu.',
  },
  {
    num: '03',
    title: 'Kerjakan bersama',
    desc: 'Diskusi lewat pesan, pantau progres per tahap, dan beri masukan langsung sampai puas.',
  },
  {
    num: '04',
    title: 'Bayar setelah beres',
    desc: 'Dana ditahan aman dan baru cair ke mahasiswa saat hasil sudah kamu setujui.',
  },
]

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Cara kerja</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-[38px]">
            Dari ide sampai hasil, dalam empat langkah.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Kami buat prosesnya sesederhana mungkin — supaya kamu bisa fokus ke usahamu, bukan
            ribet urusan teknis.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="group relative rounded-card border border-sand-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="font-display text-4xl font-semibold text-sand-300 transition group-hover:text-clay-300">
                {s.num}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

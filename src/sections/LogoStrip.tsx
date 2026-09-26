const stats = [
  { value: '1.200+', label: 'UMKM terbantu' },
  { value: '850+', label: 'Mahasiswa aktif' },
  { value: '4,9/5', label: 'Rata-rata rating' },
  { value: 'Rp2,3M', label: 'Tersalurkan ke mahasiswa' },
]

export function LogoStrip() {
  return (
    <section className="border-y border-sand-200 bg-sand-100/50">
      <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-display text-2xl font-semibold text-forest-700 md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

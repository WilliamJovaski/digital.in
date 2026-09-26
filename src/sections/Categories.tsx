import { IconChat, IconPalette, IconGlobe, IconTag, IconBook, IconStore } from '../components/Icon'
import type { ComponentType } from 'react'

type Category = {
  icon: ComponentType<{ size?: number; className?: string }>
  title: string
  desc: string
  from: string
}

const categories: Category[] = [
  { icon: IconChat, title: 'Konten Sosial Media', desc: 'Feed, reels, dan caption yang menjual', from: 'Rp300rb' },
  { icon: IconPalette, title: 'Logo & Branding', desc: 'Identitas visual yang mudah diingat', from: 'Rp400rb' },
  { icon: IconGlobe, title: 'Website & Toko Online', desc: 'Profil usaha sampai sistem pesanan', from: 'Rp1,2jt' },
  { icon: IconStore, title: 'Setup Marketplace', desc: 'Daftar & optimasi Shopee, Tokopedia', from: 'Rp275rb' },
  { icon: IconBook, title: 'Pembukuan Digital', desc: 'Laporan rapi, siap ajukan modal', from: 'Rp250rb' },
  { icon: IconTag, title: 'Desain Promosi', desc: 'Menu, banner, dan materi kampanye', from: 'Rp200rb' },
]

export function Categories() {
  return (
    <section id="kategori" className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Kategori jasa</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-[38px]">
              Apa pun kebutuhan digital usahamu, ada talentanya.
            </h2>
          </div>
          <a
            href="#kategori"
            className="text-sm font-semibold text-forest-700 underline-offset-4 hover:underline"
          >
            Lihat semua kategori →
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <a
              key={c.title}
              href="#kategori"
              className="group flex items-start gap-4 rounded-card border border-sand-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-forest-200 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-600 transition group-hover:bg-forest-600 group-hover:text-sand-50">
                <c.icon />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{c.desc}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-clay-600">
                  Mulai {c.from}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

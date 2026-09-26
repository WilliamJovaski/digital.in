import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { LinkButton } from './Button'
import { IconMenu } from './Icon'
import { cn } from '../lib/cn'

const links = [
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Untuk UMKM', href: '#untuk-umkm' },
  { label: 'Untuk Mahasiswa', href: '#untuk-mahasiswa' },
  { label: 'Kategori', href: '#kategori' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/85 backdrop-blur-md">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-muted transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/masuk"
            className="text-sm font-semibold text-forest-700 transition hover:text-forest-900"
          >
            Masuk
          </Link>
          <LinkButton to="/daftar" variant="primary">
            Mulai gratis
          </LinkButton>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-sand-300 text-ink-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          <IconMenu />
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-sand-200 bg-sand-50 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
        )}
        style={{ transition: 'max-height 0.28s ease' }}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-soft hover:bg-forest-50"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 px-1">
            <LinkButton to="/masuk" variant="outline" className="w-full">
              Masuk
            </LinkButton>
            <LinkButton to="/daftar" variant="primary" className="w-full">
              Mulai gratis
            </LinkButton>
          </div>
        </nav>
      </div>
    </header>
  )
}

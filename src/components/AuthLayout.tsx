import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { IconStar, IconShield, IconCheck } from './Icon'

/**
 * Two-panel auth shell: brand story on the left (desktop), form on the right.
 * Keeps the crafted, non-generic feel consistent with the landing page.
 */
export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string
  subtitle: ReactNode
  children: ReactNode
  footer: ReactNode
}) {
  return (
    <div className="relative z-10 grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      {/* Brand panel */}
      <aside className="relative hidden overflow-hidden bg-forest-800 p-12 text-sand-50 lg:flex lg:flex-col">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-forest-600/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-clay-500/25 blur-3xl"
        />

        <Logo light />

        <div className="relative my-auto max-w-md">
          <h2 className="font-display text-[34px] font-semibold leading-tight">
            Karya mahasiswa, untuk usaha kecil yang mau naik kelas.
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              'Talenta terverifikasi dengan portofolio nyata',
              'Pembayaran ditahan aman sampai proyek selesai',
              'Harga bersahabat, hasil profesional',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-forest-50">
                <IconCheck size={18} className="mt-0.5 shrink-0 text-clay-300" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center gap-6 text-sm text-forest-100">
          <span className="inline-flex items-center gap-1.5">
            <IconStar size={15} className="text-gold" /> 4,9 rata-rata rating
          </span>
          <span className="inline-flex items-center gap-1.5">
            <IconShield size={15} /> Transaksi aman
          </span>
        </div>
      </aside>

      {/* Form panel */}
      <main className="flex items-center justify-center px-6 py-10 md:px-10">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink">{title}</h1>
          <p className="mt-2 text-ink-muted">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="mt-8 text-center text-sm text-ink-muted">{footer}</p>

          <p className="mt-6 text-center">
            <Link to="/" className="text-sm font-semibold text-forest-700 hover:underline">
              ← Kembali ke beranda
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

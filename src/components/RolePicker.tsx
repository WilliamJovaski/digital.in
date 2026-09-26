import { IconStore, IconCap } from './Icon'
import { cn } from '../lib/cn'

export type Role = 'umkm' | 'mahasiswa'

const options: { value: Role; title: string; desc: string; Icon: typeof IconStore }[] = [
  { value: 'umkm', title: 'Pemilik UMKM', desc: 'Cari talenta untuk usaha', Icon: IconStore },
  { value: 'mahasiswa', title: 'Mahasiswa', desc: 'Cari proyek & penghasilan', Icon: IconCap },
]

export function RolePicker({
  value,
  onChange,
}: {
  value: Role | null
  onChange: (r: Role) => void
}) {
  return (
    <div className="mb-5 grid grid-cols-2 gap-3">
      {options.map((o) => {
        const active = value === o.value
        return (
          <button
            type="button"
            key={o.value}
            onClick={() => onChange(o.value)}
            aria-pressed={active}
            className={cn(
              'flex flex-col items-start gap-2 rounded-card border p-4 text-left transition',
              active
                ? 'border-forest-500 bg-forest-50 ring-1 ring-forest-500'
                : 'border-sand-300 bg-white hover:border-forest-300',
            )}
          >
            <span
              className={cn(
                'grid h-10 w-10 place-items-center rounded-xl transition',
                active ? 'bg-forest-600 text-sand-50' : 'bg-forest-50 text-forest-600',
              )}
            >
              <o.Icon size={20} />
            </span>
            <span className="text-sm font-bold text-ink">{o.title}</span>
            <span className="text-xs text-ink-muted">{o.desc}</span>
          </button>
        )
      })}
    </div>
  )
}

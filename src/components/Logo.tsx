import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-forest-600 font-display text-lg font-bold text-sand-50">
        D
        <span className="sr-only">Digital.in</span>
      </span>
      <span
        className={cn(
          'font-display text-[19px] font-semibold tracking-tight',
          light ? 'text-sand-50' : 'text-ink',
        )}
      >
        Digital<span className="text-clay-500">.in</span>
      </span>
    </Link>
  )
}

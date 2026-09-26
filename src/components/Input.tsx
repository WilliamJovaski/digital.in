import type { InputHTMLAttributes, ReactNode } from 'react'
import { useId } from 'react'
import { cn } from '../lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  hint?: ReactNode
  error?: string
}

export function Input({ label, hint, error, className, id, ...rest }: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-ink-soft">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          'w-full rounded-xl border bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-faint',
          'transition focus:outline-none focus:ring-2 focus:ring-forest-500/40',
          error ? 'border-clay-400 focus:border-clay-500' : 'border-sand-300 focus:border-forest-500',
          className,
        )}
        {...rest}
      />
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-clay-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-ink-faint">{hint}</p>
      ) : null}
    </div>
  )
}

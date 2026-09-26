import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AuthLayout } from '../components/AuthLayout'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { RolePicker, type Role } from '../components/RolePicker'

export default function Register() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const initialRole = (params.get('peran') as Role) || null
  const [role, setRole] = useState<Role | null>(
    initialRole === 'umkm' || initialRole === 'mahasiswa' ? initialRole : null,
  )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!role) next.role = 'Pilih dulu kamu daftar sebagai apa.'
    if (!name.trim()) next.name = role === 'umkm' ? 'Nama usaha wajib diisi.' : 'Nama lengkap wajib diisi.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Masukkan email yang valid.'
    if (password.length < 6) next.password = 'Kata sandi minimal 6 karakter.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // Belum ada back end — arahkan ke dashboard placeholder sesuai peran.
    navigate(role === 'umkm' ? '/dashboard/umkm' : '/dashboard/mahasiswa')
  }

  return (
    <AuthLayout
      title="Buat akun gratis"
      subtitle="Mulai dalam beberapa menit. Tidak ada biaya pendaftaran."
      footer={
        <>
          Sudah punya akun?{' '}
          <Link to="/masuk" className="font-semibold text-forest-700 hover:underline">
            Masuk di sini
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <p className="mb-2 text-sm font-semibold text-ink-soft">Saya daftar sebagai</p>
        <RolePicker value={role} onChange={(r) => setRole(r)} />
        {errors.role && <p className="-mt-3 mb-4 text-xs font-medium text-clay-600">{errors.role}</p>}

        <Input
          label={role === 'umkm' ? 'Nama usaha' : 'Nama lengkap'}
          placeholder={role === 'umkm' ? 'mis. Kopi Anteng' : 'mis. Nadia Putri'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        <Input
          label="Email"
          type="email"
          placeholder="kamu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <Input
          label="Kata sandi"
          type="password"
          placeholder="Minimal 6 karakter"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <Button type="submit" size="lg" className="mt-2 w-full">
          Buat akun
        </Button>

        <p className="mt-4 text-center text-xs text-ink-faint">
          Dengan mendaftar, kamu setuju dengan Syarat & Ketentuan serta Kebijakan Privasi kami.
        </p>
      </form>
    </AuthLayout>
  )
}

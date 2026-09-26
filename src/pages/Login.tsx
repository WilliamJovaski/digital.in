import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from '../components/AuthLayout'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { RolePicker, type Role } from '../components/RolePicker'

export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState<Role | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!role) next.role = 'Pilih dulu kamu masuk sebagai apa.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Masukkan email yang valid.'
    if (!password) next.password = 'Kata sandi wajib diisi.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // Belum ada back end — arahkan ke dashboard placeholder sesuai peran.
    navigate(role === 'umkm' ? '/dashboard/umkm' : '/dashboard/mahasiswa')
  }

  return (
    <AuthLayout
      title="Selamat datang kembali"
      subtitle="Masuk untuk melanjutkan proyekmu."
      footer={
        <>
          Belum punya akun?{' '}
          <Link to="/daftar" className="font-semibold text-forest-700 hover:underline">
            Daftar gratis
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <p className="mb-2 text-sm font-semibold text-ink-soft">Saya masuk sebagai</p>
        <RolePicker value={role} onChange={(r) => setRole(r)} />
        {errors.role && <p className="-mt-3 mb-4 text-xs font-medium text-clay-600">{errors.role}</p>}

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
          placeholder="Masukkan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          hint={
            <Link to="/masuk" className="font-medium text-forest-700 hover:underline">
              Lupa kata sandi?
            </Link>
          }
        />

        <Button type="submit" size="lg" className="mt-2 w-full">
          Masuk
        </Button>
      </form>
    </AuthLayout>
  )
}

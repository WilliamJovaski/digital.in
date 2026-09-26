import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/masuk" element={<Login />} />
      <Route path="/daftar" element={<Register />} />
      <Route path="/dashboard/umkm" element={<Dashboard role="umkm" />} />
      <Route path="/dashboard/mahasiswa" element={<Dashboard role="mahasiswa" />} />
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Email } from './pages/Emails'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/emails" element={<Email />} />
      </Route>
    </Routes>
  )
}

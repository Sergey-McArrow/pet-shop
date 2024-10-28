import { Footer } from '@/layout/footer'
import { Header } from '@/layout/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
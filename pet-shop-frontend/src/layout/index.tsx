import { Breadcrumbs } from '@/components/ui/crumbs'
import { Footer } from '@/layout/footer'
import { Header } from '@/layout/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <main className="flex-grow">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

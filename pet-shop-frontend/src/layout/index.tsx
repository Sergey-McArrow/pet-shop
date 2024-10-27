import { Footer } from '@/layout/footer'
import { Header } from '@/layout/header'
import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" container mx-auto flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

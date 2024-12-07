import { useState } from 'react'
import { Link } from 'react-router-dom'

import { BurgerMenu } from '@/components/ui/burger-menu'
import { CartMenu } from '@/components/ui/cart-menu'
import { Logo } from '@/components/ui/logo'
import { ModeToggle } from '@/components/ui/toggle-mode'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? 'unset' : 'hidden'
  }

  return (
    <header className="flex h-32 items-center justify-between px-4 md:px-10 py-4 shadow-inner rounded-md relative">
      <Link to="/">
        <Logo />
      </Link>

      <nav className="hidden md:flex space-x-8 transition-transform duration-1000">
        <Link to="/" className="hover:scale-105">
          Main Page
        </Link>
        <Link to="/categories" className="hover:scale-105">
          Categories
        </Link>
        <Link to="/products" className="hover:scale-105">
          All products
        </Link>
        <Link to="/sales" className="hover:scale-105">
          All sales
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <CartMenu />
        <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  )
}

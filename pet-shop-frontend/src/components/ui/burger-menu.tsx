import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

interface BurgerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

export const BurgerMenu = ({ isOpen, toggleMenu }: BurgerMenuProps) => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden z-50 bg-transparent hover:scale-105 transition-transform duration-300 p-2"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        ) : (
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        )}
      </Button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`z-40 fixed top-0 right-0 h-full w-64 bg-neutral-300 dark:bg-neutral-900 shadow-inner rounded-l-md transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 pt-20">
          <Link
            to="/"
            className="hover:scale-105 transition-transform duration-300 py-2"
            onClick={toggleMenu}
          >
            Main Page
          </Link>
          <Link
            to="/categories"
            className="hover:scale-105 transition-transform duration-300 py-2"
            onClick={toggleMenu}
          >
            Categories
          </Link>
          <Link
            to="/products"
            className="hover:scale-105 transition-transform duration-300 py-2"
            onClick={toggleMenu}
          >
            All products
          </Link>
          <Link
            to="/sales"
            className="hover:scale-105 transition-transform duration-300 py-2"
            onClick={toggleMenu}
          >
            All sales
          </Link>
        </nav>
      </div>
    </>
  )
}

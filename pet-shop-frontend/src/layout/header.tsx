import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { ModeToggle } from '@/components/ui/toggle-mode'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="flex h-32 items-center justify-between px-10 py-4 shadow-inner rounded-md">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="flex space-x-8 transition-transform duration-1000">
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
        <Link to="/cart" className="">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
      </div>
    </header>
  )
}

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { ModeToggle } from '@/components/ui/toggle-mode'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="flex h-32 items-center justify-between px-10 py-4 shadow-inner rounded-md">
      <div className="flex items-center">
        <Logo />
      </div>
      <nav className="flex space-x-8">
        <Link to="/" className="">
          Main Page
        </Link>
        <Link to="/categories" className="">
          Categories
        </Link>
        <Link to="/all-products" className="">
          All products
        </Link>
        <Link to="/all-sales" className="">
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

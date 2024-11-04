import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  Table,
} from '@/components/ui/table'
import { ModeToggle } from '@/components/ui/toggle-mode'
import { RootState } from '@/store'
import { clearCart } from '@/store/cartSlice'
import { ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Header = () => {
  const cart = useSelector((state: RootState) => state.cartReducer)
  const dispatch = useDispatch()
  const quantity = cart.products.reduce((acc, val) => (acc += val.quantity), 0)
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
        <Popover>
          <PopoverTrigger className="bg-transparent relative">
            <ShoppingCart className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <Badge className="absolute -right-2 -top-1 px-1">{quantity}</Badge>
          </PopoverTrigger>
          <PopoverContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Products</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.products.map((el) => (
                  <TableRow key={el.id}>
                    <TableCell className="font-medium">{el.title}</TableCell>
                    <TableCell className="text-center">{el.quantity}</TableCell>
                    <TableCell className="text-right">
                      {el.discont_price ?? el.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total :</TableCell>
                  <TableCell className="text-right whitespace-nowrap">
                    $ {cart.totalAmount}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            <div className="flex justify-between">
              <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
              <Link to="/cart" className="ml-auto w-fit">
                <Button>Go to cart</Button>
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

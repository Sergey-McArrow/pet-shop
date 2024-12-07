import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { RootState } from '@/store'
import { clearCart } from '@/store/cartSlice'

export const CartMenu = () => {
  const cart = useSelector((state: RootState) => state.cartReducer)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const quantity = cart.products.reduce((acc, val) => (acc += val.quantity), 0)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent hover:scale-105 transition-transform duration-300 p-2 relative"
        >
          <ShoppingCart className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <Badge className="absolute -right-2 -top-1 px-1">{quantity}</Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent onMouseLeave={() => setIsOpen(false)} className="w-80">
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
                  {el.discount_price ?? el.price}
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
  )
}

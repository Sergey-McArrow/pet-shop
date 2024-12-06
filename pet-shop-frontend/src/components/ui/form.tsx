import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { useOrder } from '@/hooks/useOrder'
import { RootState } from '@/store'
import { clearCart } from '@/store/cartSlice'

type FormData = {
  name: string
  phone: string
  email: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const { mutate: createOrder } = useOrder()

  const cart = useAppSelector((state: RootState) => state.cartReducer)
  const dispatch = useAppDispatch()
  const onSubmit = (data: FormData) => {
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      total: cart.totalAmount,
      products: cart.products.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
    }
    createOrder(orderData, {
      onSuccess: () => {
        dispatch(clearCart())
        alert('Order placed successfully!')
      },
      onError: (error) => {
        alert('Failed to place order. Please try again.')
        console.error('Order error:', error)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-8">
      <Input
        type="text"
        placeholder="Name"
        className="placeholder:text-white"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      <Input
        className="placeholder:text-white"
        type="text"
        placeholder="Phone number"
        {...register('phone', { required: 'Phone number is required' })}
      />
      {errors.phone && <span>{errors.phone.message}</span>}
      <Input
        className="placeholder:text-white"
        type="email"
        placeholder="Email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <Button
        // disabled={isLoading}
        type="submit"
        variant={'secondary'}
        className="w-full dark:bg-neutral-50 dark:text-black dark:hover:bg-neutral-50/80"
      >
        Get a discount
      </Button>
    </form>
  )
}

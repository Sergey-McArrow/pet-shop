import { configureStore } from '@reduxjs/toolkit'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { TProduct } from '@/types/data'

import { Cart } from '../cart'

jest.mock('@/components/ui/form', () => ({
  Form: () => <div data-testid="mock-form">Form</div>,
}))

const mockProduct: TProduct = {
  id: 1,
  title: 'Dog Food',
  price: 29.99,
  discount_price: 9.99,
  description: 'Premium dog food',
  image: '/product_img/1.jpeg',
  categoryId: 1,
}

const mockProduct2: TProduct = {
  id: 2,
  title: 'Cat Food',
  price: 24.99,
  discount_price: 9.99,
  description: 'Premium cat food',
  image: '/product_img/2.jpeg',
  categoryId: 1,
}

describe('Cart Page', () => {
  const createMockStore = (
    products: Array<TProduct & { quantity: number }> = []
  ) => {
    const totalAmount = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    )

    return configureStore({
      reducer: {
        cartReducer: () => ({
          products,
          totalAmount,
        }),
      },
    })
  }

  const renderCart = (store = createMockStore()) => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  }

  it('renders empty cart message when cart is empty', () => {
    renderCart()

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /back to store/i })
    ).toBeInTheDocument()
  })

  it('renders cart items when cart has products', () => {
    const products = [{ ...mockProduct, quantity: 1 }]
    const store = createMockStore(products)
    renderCart(store)

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument()
    const priceElements = screen.getAllByText('$29.99')
    expect(priceElements.length).toBeGreaterThan(0)
    expect(screen.getByText('1 item')).toBeInTheDocument()
    expect(screen.getByTestId('mock-form')).toBeInTheDocument()
  })

  it('displays correct total and items count for multiple products', () => {
    const products = [
      { ...mockProduct, quantity: 2 },
      { ...mockProduct2, quantity: 1 },
    ]
    const store = createMockStore(products)
    renderCart(store)

    expect(screen.getByText('3 items')).toBeInTheDocument()
    expect(screen.getByText('$84.97')).toBeInTheDocument() // (29.99 * 2) + 24.99
  })

  it('updates quantity when using quantity controls', () => {
    const products = [{ ...mockProduct, quantity: 1 }]
    const store = createMockStore(products)
    renderCart(store)

    const incrementButton = screen.getByRole('button', { name: '+' })
    fireEvent.click(incrementButton)

    expect(screen.getByRole('spinbutton')).toHaveValue(2)
  })

  it('has working navigation back to store', () => {
    renderCart()

    const backButton = screen.getByRole('button', { name: /back to store/i })
    expect(backButton.closest('a')).toHaveAttribute('href', '/products')
  })
})

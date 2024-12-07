import { configureStore } from '@reduxjs/toolkit'
import { render, screen, within } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { TProduct } from '@/types/data'

import { Sale } from '../sale'

const mockStore = {
  cart: {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  },
}

const store = configureStore({
  reducer: {
    cart: (state = mockStore.cart) => state,
  },
  preloadedState: mockStore,
})

const mockProducts: TProduct[] = [
  {
    id: 1,
    title: 'Dog Food',
    price: 29.99,
    discount_price: 9.99,
    description: 'Premium dog food',
    image: '/product_img/1.jpeg',
    categoryId: 1,
  },
  {
    id: 2,
    title: 'Cat Food',
    price: 24.99,
    discount_price: 9.99,
    description: 'Premium cat food',
    image: '/product_img/2.jpeg',
    categoryId: 1,
  },
]

describe('Sale Component', () => {
  const renderSale = (products: TProduct[] = mockProducts) => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Sale products={products} />
        </BrowserRouter>
      </Provider>
    )
  }

  it('renders the sale section with correct title', () => {
    renderSale()

    expect(screen.getByRole('heading', { name: /sale/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /all sales/i })).toBeInTheDocument()
  })

  it('renders all product cards', () => {
    renderSale()

    mockProducts.forEach((product) => {
      const productCard = screen.getByRole('heading', { name: product.title }).closest('div')
      expect(productCard).toBeInTheDocument()
      
      if (productCard) {
        expect(within(productCard).getByText(`$${product.price}`)).toBeInTheDocument()
        expect(within(productCard).getByText(`$${product.discount_price}`)).toBeInTheDocument()
      }
    })
  })

  it('renders empty grid when no products are provided', () => {
    renderSale([])

    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'

import { Discount } from '../discount'

jest.mock('@/assets/discount.png', () => 'test-file-stub')

jest.mock('@/components/ui/form', () => ({
  Form: () => <div data-testid="mock-form">Mock Form</div>,
}))

describe('Discount Component', () => {
  const renderDiscount = () => {
    return render(<Discount />)
  }

  it('renders the discount section with correct title', () => {
    renderDiscount()

    expect(screen.getByText('5% off on the first order')).toBeInTheDocument()
  })

  it('renders the discount image with correct attributes', () => {
    renderDiscount()

    const image = screen.getByAltText('Pets')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'test-file-stub')
    expect(image).toHaveClass(
      'mt-1 border-b border-gray-300 dark:border-gray-600'
    )
  })

  it('renders the form component', () => {
    renderDiscount()

    expect(screen.getByTestId('mock-form')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Hero } from '../hero'

jest.mock('@/assets/hero.png', () => 'test-file-stub')

describe('Hero Component', () => {
  const renderHero = () => {
    return render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    )
  }

  it('renders the hero section with correct heading', () => {
    renderHero()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Amazing Discounts')
    expect(heading).toHaveTextContent('on Pets Products!')
  })

  it('renders hero image with correct attributes', () => {
    renderHero()

    const heroImage = screen.getByAltText('Hero image')
    expect(heroImage).toBeInTheDocument()
    expect(heroImage).toHaveAttribute('src', 'test-file-stub')
    expect(heroImage).toHaveClass('absolute -z-10 min-h-[600px] object-cover')
  })

  it('renders shop button with correct link', () => {
    renderHero()

    const button = screen.getByRole('button', { name: /check out/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'bg-slate-700 px-14 py-6 text-lg md:text-xl hover:bg-slate-900'
    )
    expect(button.closest('a')).toHaveAttribute('href', '/products')
  })
})

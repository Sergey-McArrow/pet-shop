import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { TCategory } from '@/types/data'

import { Categories } from '../categories'

const mockCategories: TCategory[] = [
  {
    id: 1,
    title: 'Dry & Wet Food',
    image: 'category_img/1.jpeg',
  },
  {
    id: 2,
    title: 'Litter Boxes & Litter Trays',
    image: 'category_img/2.jpeg',
  },
]

describe('Categories Component', () => {
  const renderCategories = (categories: TCategory[] = mockCategories) => {
    return render(
      <BrowserRouter>
        <Categories categories={categories} />
      </BrowserRouter>
    )
  }

  it('renders the categories section with correct title', () => {
    renderCategories()

    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('All categories')).toBeInTheDocument()
  })

  it('renders all category cards', () => {
    renderCategories()

    mockCategories.forEach((category) => {
      expect(screen.getByText(category.title)).toBeInTheDocument()
      const categoryImage = screen.getByAltText(category.title)
      expect(categoryImage).toBeInTheDocument()
      expect(categoryImage).toHaveAttribute('src', `http://localhost:3000/public/${category.image}`)
    })
  })

  it('renders empty grid when no categories are provided', () => {
    renderCategories([])

    expect(screen.queryByTestId('category-card')).not.toBeInTheDocument()
  })
})

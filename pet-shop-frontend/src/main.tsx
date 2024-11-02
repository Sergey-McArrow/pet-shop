import './index.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/layout'
import { CategoriesPage } from '@/pages/categories'
import { Category } from '@/pages/category'
import { Home } from '@/pages/home'
import { Products } from '@/pages/products'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider defaultTheme="dark" storageKey="pet-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </>
)

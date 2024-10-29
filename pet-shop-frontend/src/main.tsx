import './index.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/layout'
import { CategoriesPage } from '@/pages/categories'
import { Home } from '@/pages/home'
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
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </>
)

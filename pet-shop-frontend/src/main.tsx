import './index.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/layout'
import { Cart } from '@/pages/cart'
import { CategoriesPage } from '@/pages/categories'
import { Category } from '@/pages/category'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/notFound'
import { Product } from '@/pages/product'
import { Products } from '@/pages/products'
import { persistor, store } from '@/store'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider defaultTheme="dark" storageKey="pet-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:categoryId" element={<Category />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/sales" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
)

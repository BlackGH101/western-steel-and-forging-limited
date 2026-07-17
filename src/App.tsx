import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LeadershipPage } from './pages/LeadershipPage'
import { MarketsPage } from './pages/MarketsPage'
import { ProcessPage } from './pages/ProcessPage'
import { ProductArticlePage } from './pages/ProductArticlePage'
import { ProductsPage } from './pages/ProductsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductArticlePage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="markets" element={<MarketsPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

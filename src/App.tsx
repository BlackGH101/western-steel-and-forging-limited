import { HashRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { Markets } from './components/Markets'
import { ProcessDiagram } from './components/ProcessDiagram'
import { Products } from './components/Products'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <ProcessDiagram />
        <Markets />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

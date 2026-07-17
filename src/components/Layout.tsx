import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { PageTransition } from './PageTransition'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <PageTransition />
      <Footer />
    </>
  )
}

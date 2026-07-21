import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProductBySlug } from '../data/products'

const siteUrl = 'https://wsflghana.com'
const siteName = 'Western Steel and Forgings Limited'

type SeoDetails = {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

const pageSeo: Record<string, SeoDetails> = {
  '/': {
    title: 'Western Steel and Forgings Limited | WSFL',
    description:
      "WSFL is Ghana's integrated steel rolling and forging plant in Tema, producing grinding balls, construction rods and industrial steel products.",
    image: '/images/steel-structure.jpg',
  },
  '/about': {
    title: 'About Western Steel and Forgings Limited | WSFL',
    description:
      "Learn about WSFL's history, mission and integrated scrap-to-steel operations serving Ghana's mining and construction sectors since 2004.",
    image: '/images/metallurgy-composition.jpg',
  },
  '/products': {
    title: 'Steel Products for Mining and Construction | WSFL',
    description:
      'Explore WSFL forged grinding balls, construction rods, industrial oxygen, steel drums and planned TMT and stainless steel products.',
    image: '/images/metal-finishing.jpg',
  },
  '/process': {
    title: 'Integrated Steel Production Process | WSFL',
    description:
      'See how WSFL converts scrap into finished steel through induction melting, reheating, rolling, cross-roll and forging at its Tema plant.',
    image: '/images/metallurgy-collage.jpg',
  },
  '/markets': {
    title: 'Mining and Construction Markets | WSFL',
    description:
      "WSFL supplies forged grinding media and construction steel to major gold producers and distributors across Ghana and West Africa.",
    image: '/images/image4.jpg',
  },
  '/leadership': {
    title: 'Leadership and Governance | WSFL',
    description:
      "Meet the leadership disciplines guiding WSFL's engineering, production, finance, commercial operations and corporate governance.",
    image: '/images/team-collaboration.jpg',
  },
  '/contact': {
    title: 'Contact WSFL in Tema, Ghana',
    description:
      'Contact Western Steel and Forgings Limited for product supply, commercial offtake or plant visit enquiries in Tema, Ghana.',
    image: '/images/steel-structure.jpg',
  },
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function setCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = href
}

function getSeo(pathname: string): SeoDetails {
  if (pathname.startsWith('/products/')) {
    const slug = pathname.split('/')[2]
    const product = getProductBySlug(slug)

    if (product) {
      return {
        title: `${product.name} | WSFL`,
        description: product.description,
        image: product.image,
        type: 'article',
      }
    }

    return {
      title: 'Product Not Found | WSFL',
      description: 'The requested WSFL product article could not be found.',
      noIndex: true,
    }
  }

  return (
    pageSeo[pathname] ?? {
      title: 'Page Not Found | WSFL',
      description: 'The requested page could not be found.',
      noIndex: true,
    }
  )
}

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeo(pathname)
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    const canonicalUrl = `${siteUrl}${canonicalPath}`
    const imageUrl = new URL(seo.image ?? '/logo.jpg', siteUrl).toString()

    document.title = seo.title
    setCanonical(canonicalUrl)

    setMeta('name', 'description', seo.description)
    setMeta('name', 'robots', seo.noIndex ? 'noindex, nofollow' : 'index, follow')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', seo.title)
    setMeta('name', 'twitter:description', seo.description)
    setMeta('name', 'twitter:image', imageUrl)

    setMeta('property', 'og:title', seo.title)
    setMeta('property', 'og:description', seo.description)
    setMeta('property', 'og:type', seo.type ?? 'website')
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', imageUrl)
    setMeta('property', 'og:site_name', siteName)
    setMeta('property', 'og:locale', 'en_GH')
  }, [pathname])

  return null
}

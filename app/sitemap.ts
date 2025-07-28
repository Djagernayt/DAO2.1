import { MetadataRoute } from 'next'
import { languages } from '@/lib/i18n/settings'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  
  const routes = ['', '/about', '/services', '/contact']
  const sitemap: MetadataRoute.Sitemap = []

  languages.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
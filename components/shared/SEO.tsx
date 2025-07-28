interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  ogImage,
  noindex = false
}: SEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'
  
  return {
    title,
    description,
    keywords: keywords?.join(', '),
    openGraph: {
      title,
      description,
      images: ogImage ? [`${baseUrl}${ogImage}`] : undefined,
      siteName: 'My App',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [`${baseUrl}${ogImage}`] : undefined,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
  }
}
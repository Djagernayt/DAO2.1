import type { Metadata } from 'next'
import { languages } from '@/lib/i18n/settings'
import { useTranslation } from '@/lib/i18n'
import { ScrollToTopButton } from '@/components/shared/ScrollToTopButton'
import '../globals.css'

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = await useTranslation(locale, 'common')
  
  return {
    title: {
      template: '%s | ITS',
      default: 'ITS - ' + t('index_h1'),
    },
    description: t('index_p'),
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-onest">
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
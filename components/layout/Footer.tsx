'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

interface FooterProps {
  locale: string
  t: any
  className?: string
}

export function Footer({ locale, t, className }: FooterProps) {
  const router = useRouter()
  const currentYear = new Date().getFullYear()
  const lang = locale

  // PDF URLs
  const pdfUrls = {
    privacy: {
      ru: "https://daoits.com/docs/privacy/privacy_ru.pdf",
      en: "https://daoits.com/docs/privacy/privacy_en.pdf"
    },
    terms: {
      ru: "https://daoits.com/docs/terms/terms_ru.pdf",
      en: "https://daoits.com/docs/terms/terms_en.pdf"
    },
    charter: "https://daoits.com/docs/charter/charter.pdf",
    agreement: {
      ru: "https://daoits.com/docs/agreement/agreement_ru.pdf",
      en: "https://daoits.com/docs/agreement/agreement_en.pdf"
    }
  }

  const handleLinkClick = (href: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    router.push(`/${locale}${href}`)
  }

  const handlePdfClick = (e: React.MouseEvent, pdfType: keyof typeof pdfUrls) => {
    e.preventDefault()
    let url = ''
    
    if (pdfType === 'charter') {
      url = pdfUrls.charter
    } else {
      const pdf = pdfUrls[pdfType]
      if (typeof pdf === 'object') {
        url = pdf[lang as 'ru' | 'en']
      }
    }
    
    if (url) {
      window.open(url, '_blank')
    }
  }

  const footerLinks = {
    navigation: [
      { name: t('top_menu_decentralization'), href: '/decentral' },
      { name: t('top_menu_investors'), href: '/invest' },
      { name: t('top_menu_statistic'), href: '/statistics' },
      { name: t('index_footer_link3'), href: '/our-development' },
    ],
    legal: [
      { name: t('user_agreement'), pdf: 'agreement' as const },
      { name: t('index_footer_link5'), pdf: 'terms' as const },
      { name: t('index_footer_link4'), pdf: 'privacy' as const },
      { name: t('investor_d_15'), pdf: 'charter' as const },
    ]
  }

  return (
    <footer className={cn('bg-white py-12 md:py-16 px-5 lg:px-0', className)}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
          {/* Logo */}
          <div className="col-span-1">
            <Link
              href={`/${locale}`}
              className="text-[#146EF5] text-[40px] md:text-[60px] font-bold hover:opacity-80 inline-block"
              onClick={() => handleLinkClick('/')}
            >
              ITS
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <div className="flex flex-col gap-4">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="text-black text-base md:text-lg font-light hover:text-[#146EF5] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <div className="flex flex-col gap-4">
              {footerLinks.legal.map((link) => (
                <button
                  key={link.pdf}
                  className="text-black text-base md:text-lg font-light hover:text-[#146EF5] transition-colors text-left"
                  onClick={(e) => handlePdfClick(e, link.pdf)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 flex flex-col gap-4">
            <a 
              href="mailto:daoitscom@gmail.com" 
              className="flex items-center gap-2 group"
            >
              <img src="/mail.svg" alt="Email" className="w-5 h-5" />
              <span className="text-[#87888B] text-sm group-hover:text-[#146EF5] transition-colors">
                daoitscom@gmail.com
              </span>
            </a>
            
            <div className="flex items-center gap-2">
              <img src="/telegram.svg" alt="Telegram" className="w-5 h-5" />
              <span className="text-[#87888B] text-sm">
                {currentYear} {t('index_footer_copy')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
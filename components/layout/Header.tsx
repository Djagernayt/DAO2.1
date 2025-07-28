'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/Button'
import { AccentBtn } from '@/components/ui/AccentBtn'
import { ChangeLang } from '@/components/shared/ChangeLang'
import { ModalContactUs } from '@/components/shared/ModalContactUs'

interface HeaderProps {
  locale: string
  t: any
}

export function Header({ locale, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout)
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 300)
    setDropdownTimeout(timeout)
  }

  const isActive = (href: string) => pathname === `/${locale}${href}`

  const navigation = [
    { name: t('top_menu_decentralization'), href: '/decentral' },
    { name: 'AppDev', href: '/app-development' },
    { name: t('index_footer_link3'), href: '/our-development', hasDropdown: true },
    { name: t('top_menu_blockchain'), href: '/blockchain' },
    { name: t('top_menu_investors'), href: '/invest' },
    { name: t('top_menu_statistic'), href: '/statistics' },
  ]

  const dropdownItems = [
    { 
      name: 'Кошелек DefiBridge', 
      href: '/defibridge',
      icon: '/wallet_icon_b.svg',
      iconActive: '/wallet_icon_p.svg'
    },
    { 
      name: 'Мировая экономика', 
      href: '/analysis-economy',
      icon: '/blockchain_icon_b.svg',
      iconActive: '/blockchain_icon_p.svg'
    },
    { 
      name: 'Блокчейн FEONYX', 
      href: '/feonyx-blockchain',
      icon: '/economy_icon_b.svg',
      iconActive: '/blockchain_icon_p.svg'
    },
  ]

  const mobileNavigation = [
    {
      name: 'Главная',
      href: '/',
      icon: '/home_icon.svg',
      activeIcon: '/home_icon_active.svg',
    },
    ...navigation.map(item => ({
      name: item.name,
      href: item.href,
      icon: '/services_icon_w.svg',
      activeIcon: '/services_icon_active.svg',
    }))
  ]

  return (
    <>
      {/* Desktop Contact Bar */}
      <div className="hidden lg:block bg-white">
        <div className="max-w-[1280px] mx-auto flex py-4 justify-between items-center px-5">
          <div className="flex gap-5">
            <a href="mailto:daoitscom@gmail.com" className="flex gap-2">
              <img src="/mail.svg" alt="email" />
              <p className="text-[#87888B] text-sm">daoitscom@gmail.com</p>
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <a href="https://t.me/ITSystemadm">
              <img src="/telegram.svg" className="cursor-pointer" alt="telegram" />
            </a>
            <ChangeLang locale={locale} />
            <AccentBtn 
              icon="/contact_icon.svg"
              onClick={() => setIsModalOpen(true)}
              className="flex gap-2"
            >
              {t('index_quest_btn')}
            </AccentBtn>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
          'lg:top-16',
          isScrolled && 'shadow-sm',
          isMobileMenuOpen && 'lg:top-0'
        )}
      >
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-5 py-3 lg:py-4">
          <Link
            href={`/${locale}`}
            className="text-[#146EF5] text-[32px] lg:text-[64px] font-bold hover:opacity-80"
          >
            ITS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 ml-20">
            {navigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={`/${locale}${item.href}`}
                  className={cn(
                    'text-[18px] font-light hover:opacity-80 transition-colors',
                    isActive(item.href) ? 'text-[#146EF5]' : 'text-black'
                  )}
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && isDropdownOpen && (
                  <div className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 mt-2',
                    'w-60 p-2 bg-white rounded-xl shadow-lg border border-gray-100',
                    'transition-all duration-300'
                  )}>
                    {dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={`/${locale}${dropdownItem.href}`}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-lg',
                          'transition-all duration-200',
                          'hover:bg-gray-50',
                          isActive(dropdownItem.href) ? 'text-[#146EF5] bg-gray-50' : 'text-black'
                        )}
                      >
                        <img
                          src={isActive(dropdownItem.href) ? dropdownItem.iconActive : dropdownItem.icon}
                          alt=""
                          className="w-5 h-5"
                        />
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2"
          >
            <img src="/burger_b.svg" alt="menu" className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <>
        {/* Overlay */}
        <div
          className={cn(
            'fixed inset-0 bg-black/30 z-[998] lg:hidden',
            'transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'fixed right-0 top-0 h-screen w-2/3 bg-black/80 backdrop-blur-2xl',
            'px-3 pb-5 pt-3 z-[999] lg:hidden',
            'transform transition-transform duration-300',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                <span className="text-white text-2xl font-bold">ITS</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <img src="/double_arrow_w.svg" alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
              <p className="text-gray-400 text-xs uppercase mb-4 px-2">
                Навигация
              </p>
              <div className="flex flex-col gap-1">
                {mobileNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    className={cn(
                      'flex items-center gap-3 px-3 py-3 rounded-lg',
                      'transition-all duration-200',
                      isActive(item.href) 
                        ? 'bg-white/10 text-[#146EF5]' 
                        : 'text-white hover:bg-white/5'
                    )}
                  >
                    <img
                      src={isActive(item.href) ? item.activeIcon : item.icon}
                      alt=""
                      className="w-5 h-5"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Settings */}
              <div className="mt-8">
                <p className="text-gray-400 text-xs uppercase mb-4 px-2">
                  Настройки
                </p>
                <div className="flex flex-col gap-4 px-3">
                  <div className="flex items-center justify-between py-3 text-white">
                    <div className="flex gap-2 items-center">
                      <img src="/lang_icon.svg" alt="Language" className="w-6 h-6" />
                      <span className="text-base">
                        {locale === 'ru' ? 'Язык:' : 'Language:'}
                      </span>
                    </div>
                    <ChangeLang locale={locale} variant="mobile" />
                  </div>
                  
                  <AccentBtn 
                    icon="/telegram_icon_w.svg"
                    to="https://t.me/ITSystemadm"
                    className="w-full justify-center py-2"
                  >
                    {locale === 'ru' ? 'Телеграм' : 'Telegram'}
                  </AccentBtn>
                  
                  <div className="w-full border-b border-white/30 my-1" />
                  
                  <AccentBtn
                    icon="/contact_us_icon.svg"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setIsModalOpen(true)
                    }}
                    className="w-full justify-center py-2"
                  >
                    {locale === 'ru' ? 'Связаться' : 'Contact us'}
                  </AccentBtn>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>

      {/* Spacer */}
      <div className={cn('lg:h-[144px] h-16')} />

      {/* Contact Modal */}
      {isModalOpen && (
        <ModalContactUs 
          t={t} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  )
}
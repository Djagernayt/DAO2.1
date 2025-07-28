'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

interface ChangeLangProps {
  locale: string
  variant?: 'desktop' | 'mobile'
}

export function ChangeLang({ locale, variant = 'desktop' }: ChangeLangProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  const changeLanguage = () => {
    const newLang = locale === 'en' ? 'ru' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLang}`)
    router.push(newPath)
  }

  if (variant === 'mobile') {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={locale === 'en'}
          onChange={changeLanguage}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ml-2 text-sm text-white">
          {locale === 'ru' ? 'Рус' : 'Eng'}
        </span>
      </label>
    )
  }

  return (
    <button
      onClick={changeLanguage}
      className="bg-[#f6f4f9] text-black flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-xs font-semibold hover:bg-gray-100 transition-colors"
    >
      {locale === 'en' ? 'РУ' : 'EN'}
    </button>
  )
}
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { languages } from '@/lib/i18n/settings'

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <select 
      value={currentLocale} 
      onChange={(e) => handleChange(e.target.value)}
      className="px-3 py-1 border rounded-md"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
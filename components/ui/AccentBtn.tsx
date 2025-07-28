'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

interface AccentBtnProps {
  children: React.ReactNode
  className?: string
  icon?: string
  to?: string
  targetSection?: string
  onClick?: (e: React.MouseEvent) => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function AccentBtn({
  children,
  className,
  icon,
  to,
  targetSection,
  onClick,
  type = 'button',
  disabled = false
}: AccentBtnProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e)
    }

    if (to) {
      if (to.startsWith('http://') || to.startsWith('https://')) {
        window.open(to, '_blank')
        return
      }
      
      router.push(to)

      if (targetSection) {
        setTimeout(() => {
          const section = document.getElementById(targetSection)
          if (section) {
            const offset = 100
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: sectionPosition - offset,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        'font-medium text-white bg-[#146EF5] py-2 px-4 rounded-md',
        'hover:bg-[#0F56C1] transition duration-200 cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'flex items-center justify-center gap-2',
        className
      )}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5" />}
      {children}
    </button>
  )
}
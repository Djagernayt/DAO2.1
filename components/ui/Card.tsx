import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'shadow'
}

export function Card({ 
  className, 
  variant = 'default', 
  ...props 
}: CardProps) {
  const variants = {
    default: 'bg-white',
    bordered: 'bg-white border border-gray-200',
    shadow: 'bg-white shadow-lg'
  }

  return (
    <div
      className={cn(
        'rounded-lg p-6',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
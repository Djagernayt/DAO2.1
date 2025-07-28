'use client'

import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface AnimatedElementProps {
  children: ReactNode
  className?: string
}

export function AnimatedElement({ children, className = '' }: AnimatedElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  )
}
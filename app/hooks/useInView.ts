'use client'
import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Small delay to ensure DOM is ready after hydration
    const timer = setTimeout(() => {
      const el = ref.current
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        },
        { threshold, rootMargin: '0px 0px -50px 0px' }
      )

      observer.observe(el)
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [threshold])

  return { ref, isInView }
}

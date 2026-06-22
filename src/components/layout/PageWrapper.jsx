import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from '../../utils/gsap'
import usePreloader from '../../hooks/usePreloader'

export default function PageWrapper({ children, className = '' }) {
  const location = useLocation()
  const { isLoading } = usePreloader()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (isLoading) return undefined
    document.body.style.overflowY = 'auto'
    const observer = new ResizeObserver(() => ScrollTrigger.refresh())
    observer.observe(document.documentElement)
    return () => observer.disconnect()
  }, [isLoading])

  return <main className={`page ${className}`}>{children}</main>
}

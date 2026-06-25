import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  style?: CSSProperties
  id?: string
}

function AnimatedSection({
  children,
  className = '',
  threshold = 0.2,
  style,
  id,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <section
      ref={ref}
      id={id}
      style={style}
      className={`transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  )
}

export default AnimatedSection

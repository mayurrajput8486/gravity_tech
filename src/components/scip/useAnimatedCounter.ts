import { useEffect, useRef, useState } from 'react'

export function useAnimatedCounter(
  target: number,
  duration = 2000,
  suffix = '',
  prefix = '',
  enabled = false,
) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!enabled) return

    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)
      setDisplay(`${prefix}${current}${suffix}`)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration, suffix, prefix, enabled])

  return display
}

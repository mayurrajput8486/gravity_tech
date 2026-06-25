import { useEffect, useRef } from 'react'

interface Shape {
  x: number
  y: number
  size: number
  rotation: number
  type: 'triangle' | 'hexagon' | 'diamond' | 'ring'
  speed: number
}

function SCIPFloatingShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const shapes: Shape[] = [
      { x: 0.15, y: 0.25, size: 80, rotation: 0, type: 'hexagon', speed: 0.3 },
      { x: 0.75, y: 0.35, size: 60, rotation: 45, type: 'diamond', speed: 0.5 },
      { x: 0.55, y: 0.7, size: 100, rotation: 20, type: 'triangle', speed: 0.4 },
      { x: 0.85, y: 0.65, size: 50, rotation: 0, type: 'ring', speed: 0.6 },
    ]

    let animId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const drawHexagon = (cx: number, cy: number, r: number, rot: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rot
        const px = cx + r * Math.cos(angle)
        const py = cy + r * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
    }

    const drawDiamond = (cx: number, cy: number, r: number, rot: number) => {
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i + rot
        const px = cx + r * Math.cos(angle)
        const py = cy + r * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
    }

    const drawTriangle = (cx: number, cy: number, r: number, rot: number) => {
      ctx.beginPath()
      for (let i = 0; i < 3; i++) {
        const angle = ((Math.PI * 2) / 3) * i + rot
        const px = cx + r * Math.cos(angle)
        const py = cy + r * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
    }

    const drawRing = (cx: number, cy: number, r: number) => {
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.stroke()
    }

    const render = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const mx = (mouseRef.current.x - 0.5) * 30
      const my = (mouseRef.current.y - 0.5) * 30

      shapes.forEach((shape) => {
        const floatY = Math.sin(time * shape.speed) * 15
        const cx = shape.x * w + mx * shape.speed
        const cy = shape.y * h + my * shape.speed + floatY
        const rot = (shape.rotation + time * 10) * (Math.PI / 180)

        ctx.strokeStyle = 'rgba(31, 182, 232, 0.12)'
        ctx.lineWidth = 1.5

        switch (shape.type) {
          case 'hexagon':
            drawHexagon(cx, cy, shape.size / 2, rot)
            break
          case 'diamond':
            drawDiamond(cx, cy, shape.size / 2, rot)
            break
          case 'triangle':
            drawTriangle(cx, cy, shape.size / 2, rot)
            break
          case 'ring':
            drawRing(cx, cy, shape.size / 2)
            break
        }
      })

      time += 0.016
      animId = requestAnimationFrame(render)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export default SCIPFloatingShapes

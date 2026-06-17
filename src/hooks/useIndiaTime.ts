import { useEffect, useState } from 'react'

export function useIndiaTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      setTime(formatter.format(new Date()))
    }

    updateTime()
    const interval = window.setInterval(updateTime, 1000)

    return () => window.clearInterval(interval)
  }, [])

  return time
}

import { useState, useEffect } from 'react'

export function useTimecode(fps = 24) {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, f: 0 })

  useEffect(() => {
    let frame = 0
    const interval = setInterval(() => {
      frame++
      const totalSeconds = Math.floor(frame / fps)
      setTime({
        h: Math.floor(totalSeconds / 3600),
        m: Math.floor((totalSeconds % 3600) / 60),
        s: totalSeconds % 60,
        f: frame % fps,
      })
    }, 1000 / fps)
    return () => clearInterval(interval)
  }, [fps])

  const pad = (n) => String(n).padStart(2, '0')
  return `${pad(time.h)}:${pad(time.m)}:${pad(time.s)}:${pad(time.f)}`
}
'use client'
import { useEffect, useState } from 'react'

export default function TypeWriter({ words, speed = 100, pause = 2000 }: { words: string[]; speed?: number; pause?: number }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, isDeleting ? text.length - 1 : text.length + 1))
      }, isDeleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, pause])

  return (
    <span>
      {text}
      <span className="inline-block w-0.5 h-6 ml-1 rounded-full animate-pulse" style={{ backgroundColor: '#8b7cf6', verticalAlign: 'middle' }} />
    </span>
  )
}

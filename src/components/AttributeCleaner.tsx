'use client'

import { useEffect, useState } from 'react'

export function AttributeCleaner({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const body = document.body
    body.removeAttribute('data-new-gr-c-s-check-loaded')
    body.removeAttribute('data-gr-ext-installed')
  }, [])

  if (!isClient) {
    return null
  }

  return <>{children}</>
}
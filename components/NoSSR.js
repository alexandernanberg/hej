import React, { useState, useEffect, useLayoutEffect } from 'react'

const Fallback = () => null

const useEnhancedEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function NoSSR({ fallback = <Fallback />, children }) {
  const [isSSR, setSSR] = useState(true)

  useEnhancedEffect(() => {
    setSSR(false)
  })

  return isSSR ? fallback : children
}

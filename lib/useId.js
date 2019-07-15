import { useState } from 'react'

const ids = new Map()

function generateId(key) {
  let count = 0

  if (ids.has(key)) {
    count = ids.get(key) + 1
  }

  ids.set(key, count)

  return `${key}:${count}`
}

export function clearIds() {
  ids.clear()
}

export default function useId(prefix, override) {
  const [id] = useState(() => override || generateId(prefix))

  return id
}

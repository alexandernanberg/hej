const counter = new Map()

export default function generateId(key) {
  let count = 0

  if (counter.has(key)) {
    count = counter.get(key) + 1
  }

  counter.set(key, count)

  return `${key}-${count}`
}

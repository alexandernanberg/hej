import Router from 'next/router'
import cookie from 'cookie'

const counter = new Map()

export function noop() {}

export function resetCounter() {
  counter.clear()
}

export function generateId(key) {
  let count = 0

  if (counter.has(key)) {
    count = counter.get(key) + 1
  }

  counter.set(key, count)

  return `${key}-${count}`
}

export function parseCookies(context, options = {}) {
  return cookie.parse(
    context.req ? context.req.headers.cookie || '' : document.cookie,
    options,
  )
}

export function redirect(context, target) {
  if (context.res) {
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    Router.replace(target)
  }
}

import Router from 'next/router'

export function redirect(context, target) {
  if (context.res) {
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    Router.replace(target)
  }
}

export function wrapEvents(...handlers) {
  return event => {
    handlers.some(fn => {
      if (fn) {
        fn(event)
      }
      return event.defaultPrevented
    })

    return undefined
  }
}

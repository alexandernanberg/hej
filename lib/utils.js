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

function assignRef(ref, value) {
  if (ref == null) return
  if (typeof ref === 'function') {
    ref(value)
  } else {
    try {
      ref.current = value // eslint-disable-line no-param-reassign
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`)
    }
  }
}

export function assignRefs(...refs) {
  return value => {
    refs.forEach(ref => assignRef(ref, value))
  }
}

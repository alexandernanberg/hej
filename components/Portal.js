import React, { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const useEnhancedEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function Portal({ children, type = 'portal' }) {
  const portalRef = useRef(null)
  const mountRef = useRef(null)
  const [, forceUpdate] = useState(0)

  useEnhancedEffect(() => {
    const { ownerDocument } = mountRef.current
    portalRef.current = ownerDocument.createElement(type)
    ownerDocument.body.appendChild(portalRef.current)
    forceUpdate(i => !i)

    return () => {
      portalRef.current.ownerDocument.body.removeChild(portalRef.current)
    }
  }, [])

  if (!portalRef.current) {
    return <div ref={mountRef} />
  }

  return createPortal(children, portalRef.current)
}

Portal.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
}

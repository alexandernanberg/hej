import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ glyph, ...rest }) {
  return <FontAwesomeIcon icon={glyph} {...rest} />
}

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
}

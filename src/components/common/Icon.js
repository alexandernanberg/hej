import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ glyph, ...rest }) => <FontAwesomeIcon icon={glyph} {...rest} />

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
}

export default Icon

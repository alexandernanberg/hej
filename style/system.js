import { system as systemCore } from '@styled-system/core'
import { spacing } from './index'

export default function system(config) {
  const parser = systemCore(config)
  parser.withDefaults = defaults => props => parser({ ...defaults, ...props })

  return parser
}

function isNumber(num) {
  // eslint-disable-next-line no-restricted-globals
  return typeof num === 'number' && !isNaN(num)
}

function transformSpacing(n) {
  if (isNumber(n)) {
    return spacing(n)
  }

  return n
}

// Color

export const textColor = system({ textColor: { property: 'color' } })

export const backgroundColor = system({ bg: { property: 'backgroundColor' } })

// Text

export const text = system({ textAlign: true })

// Layout

export const layout = system({
  height: {
    property: 'height',
    transform: transformSpacing,
  },
  width: {
    property: 'width',
    transform: transformSpacing,
  },
  maxHeight: {
    property: 'maxHeight',
    transform: transformSpacing,
  },
  maxWidth: {
    property: 'maxWidth',
    transform: transformSpacing,
  },
  minHeight: {
    property: 'minHeight',
    transform: transformSpacing,
  },
  minWidth: {
    property: 'minWidth',
    transform: transformSpacing,
  },
})

// Flexbox

export const flexbox = system({
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
})

// Spacing

const marginConfig = {
  m: {
    property: 'margin',
    transform: transformSpacing,
  },
  mt: {
    property: 'marginTop',
    transform: transformSpacing,
  },
  mr: {
    property: 'marginRight',
    transform: transformSpacing,
  },
  mb: {
    property: 'marginBottom',
    transform: transformSpacing,
  },
  ml: {
    property: 'marginLeft',
    transform: transformSpacing,
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    transform: transformSpacing,
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    transform: transformSpacing,
  },
}

const paddingConfig = {
  p: {
    property: 'padding',
    transform: transformSpacing,
  },
  pt: {
    property: 'paddingTop',
    transform: transformSpacing,
  },
  pr: {
    property: 'paddingRight',
    transform: transformSpacing,
  },
  pb: {
    property: 'paddingBottom',
    transform: transformSpacing,
  },
  pl: {
    property: 'paddingLeft',
    transform: transformSpacing,
  },
  px: {
    properties: ['paddingLeft', 'paddingRight'],
    transform: transformSpacing,
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    transform: transformSpacing,
  },
}

export const margin = system(marginConfig)
export const padding = system(paddingConfig)
export const space = system({ ...marginConfig, ...paddingConfig })

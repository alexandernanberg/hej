import { useRef, useState, useCallback } from 'react'

export default function useControlledState(
  controlledValue,
  onChange,
  defaultValue,
) {
  const [stateValue, setState] = useState(defaultValue)
  const isControlled = useRef(controlledValue != null)

  const value = isControlled.current ? controlledValue : stateValue

  if (
    process.env.NODE_ENV !== 'production' &&
    ((isControlled.current && controlledValue == null) ||
      (!isControlled.current && controlledValue != null))
  ) {
    console.error(
      [
        'Components using "useControlledState" should not switch from uncontrolled to controlled (or vice versa).',
        'Decide between controlled or uncontrolled for the lifetime of the component using "useControlledState".',
      ].join('\n'),
    )
  }

  const set = useCallback(
    stateToSet => {
      if (onChange) {
        if (
          process.env.NODE_ENV !== 'production' &&
          isControlled.current &&
          typeof stateToSet === 'function'
        ) {
          console.error(
            'state callback functions not supported when state is controlled.',
          )
        }
        onChange(stateToSet)
      }

      if (!isControlled.current) {
        setState(stateToSet)
      }
    },
    [onChange],
  )

  return [value, set]
}

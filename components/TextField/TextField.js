import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Label, Input } from './style'
import { wrapEvents } from '../../lib/utils'
import useId from '../../lib/useId'
import useControlledState from '../../lib/useControlledState'

const TextField = forwardRef(function TextField(
  {
    id: controlledId,
    value: controlledValue,
    defaultValue = '',
    label,
    onChange,
    onFocus,
    onInvalid,
    onBlur,
    ...props
  },
  ref,
) {
  const [value, setValue] = useControlledState(
    controlledValue,
    null,
    defaultValue,
  )
  const [isFocused, setFocused] = useState(false)
  const [isActive, setActive] = useState(
    () => !!defaultValue || !!controlledValue,
  )
  const id = useId('textfield', controlledId)

  return (
    <Wrapper isFocused={isFocused} isActive={isFocused || isActive || !!value}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        ref={ref}
        id={id}
        value={value}
        onChange={wrapEvents(onChange, event => {
          setValue(event.target.value)
        })}
        onFocus={wrapEvents(onFocus, () => {
          setFocused(true)
        })}
        onBlur={wrapEvents(onBlur, () => {
          setFocused(false)
          setActive(!!value)
        })}
        onInvalid={onInvalid}
        {...props}
      />
    </Wrapper>
  )
})

TextField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInvalid: PropTypes.func,
}

export default TextField

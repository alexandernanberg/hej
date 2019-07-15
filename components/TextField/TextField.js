import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Label, Input } from './style'
import { wrapEvents } from '../../lib/utils'
import useId from '../../lib/useId'
import useControlledState from '../../lib/useControlledState'

export default function TextField({
  id: controlledId,
  value: controlledValue,
  defaultValue = '',
  label,
  onChange,
  onFocus,
  onInvalid,
  onBlur,
  ...props
}) {
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
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onInvalid: PropTypes.func,
}

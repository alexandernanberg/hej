import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Label, Input } from './style'
import { generateId, noop } from '../../lib/utils'

export default class TextField extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onInvalid: PropTypes.func,
  }

  static defaultProps = {
    id: null,
    defaultValue: null,
    value: null,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onInvalid: noop,
  }

  id = this.props.id || generateId('textfield')

  state = {
    value: this.props.defaultValue || '',
    isFocused: false,
    isActive: !!this.props.value || !!this.props.defaultValue,
  }

  isControlled() {
    return this.props.value != null
  }

  getValue() {
    return this.isControlled() ? this.props.value : this.state.value
  }

  onChange = (event) => {
    const { value } = event.target

    if (!this.isControlled()) {
      this.setState({ value })
    }

    this.props.onChange(event)
  }

  onFocus = (event) => {
    this.setState({ isFocused: true })
    this.props.onFocus(event)
  }

  onBlur = (event) => {
    this.setState({ isFocused: false, isActive: !!this.getValue() })
    this.props.onBlur(event)
  }

  onInvalid = (event) => {
    this.props.onInvalid(event)
  }

  render() {
    const {
      label,
      id: $id,
      value: $value,
      defaultValue: $defaultValue,
      onChange: $onChange,
      onFocus: $onFocus,
      onBlur: $onBlur,
      onInvalid: $onInvalid,
      ...props
    } = this.props
    const { isFocused, isActive } = this.state
    const value = this.getValue()

    return (
      <Wrapper
        isFocused={isFocused}
        isActive={isFocused || isActive || !!value}
      >
        <Label htmlFor={this.id}>{label}</Label>
        <Input
          id={this.id}
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInvalid={this.onInvalid}
          {...props}
        />
      </Wrapper>
    )
  }
}

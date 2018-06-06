import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Label, Input } from './style'
import generateId from '../../../helpers/generateId'

export default class TextField extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    id: null,
    defaultValue: null,
    value: null,
    onChange: () => {},
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

  filterInputProps = (props) => {
    const { id, value, defaultValue, onChange, ...rest } = props

    return rest
  }

  onChange = ({ target }) => {
    const { value } = target

    if (!this.isControlled()) {
      this.setState({ value })
    }

    this.props.onChange(value)
  }

  onFocus = () => {
    this.setState({ isFocused: true })
  }

  onBlur = () => {
    this.setState({ isFocused: false, isActive: !!this.getValue() })
  }

  onInvalid = () => {
    console.log('invalid')
  }

  render() {
    const { label, ...props } = this.props
    const { isFocused, isActive } = this.state
    const value = this.getValue()

    return (
      <Wrapper isFocused={isFocused} isActive={isActive}>
        <Label htmlFor={this.id}>{label}</Label>
        <Input
          id={this.id}
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInvalid={this.onInvalid}
          {...this.filterInputProps(props)}
        />
      </Wrapper>
    )
  }
}

import injectGlobalStyle from '../utils/injectGlobalStyle'

export default (props) => {
  injectGlobalStyle()

  return props.children
}

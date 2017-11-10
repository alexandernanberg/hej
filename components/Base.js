import injectGlobalStyle from '../styles/injectGlobalStyle'

export default (props) => {
  injectGlobalStyle()

  return [props.children]
}

import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faArrowLeft,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faArrowRight, faArrowLeft, faSignInAlt, faSignOutAlt)

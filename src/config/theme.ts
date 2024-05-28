
// import Grow from '@material-ui/core/Grow'
import { Grow } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material'
import Zoom from '@mui/material'
import light from './themeConfig/light'

// Safari is lame...this fixes a flicker on popover animations.
// Plucked from this github issue comment: https://github.com/mui/material-ui/pull/32304#issuecomment-1122753563
// Original v5 issue here: https://github.com/mui/material-ui/issues/31849
// mui v4 did not patch this bug...
// TODO: Remove this when upgrading to mui v5

const isWebKit154 =
  typeof navigator !== 'undefined' &&
  /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
  /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent)

const tempTrans = {
  TransitionComponent: isWebKit154 ? Zoom : Grow,
}

const theme = createTheme({
  props: {
    MuiPopover: tempTrans,
    MuiTooltip: tempTrans,
  },

//   typography,
//   overrides,

  ...light,
})

export default responsiveFontSizes(theme)

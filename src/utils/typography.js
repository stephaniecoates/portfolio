import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: '#8a9b7f'
  }
})

const typography = new Typography(sutroTheme)

if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
  }
  
  export default typography
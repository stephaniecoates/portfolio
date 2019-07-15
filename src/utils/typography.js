import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

const typography = new Typography(sutroTheme)

if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
  }
  
  export default typography
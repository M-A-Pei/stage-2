import {createTheme} from '@mui/material/styles'

const theme:object = createTheme({
    palette: {
      primary: {
        light: '#fcb45b',
        main: '#ff9f29',
        dark: '#ff5722',
      },
      secondary: {
        light:'#6b6b6b',
        main: '#2e2e2d',
        dark: '#171717',
      }
    },
  })

export default theme
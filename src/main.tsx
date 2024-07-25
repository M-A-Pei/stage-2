import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material'
import theme from './themes/theme.ts'
import {StoreProvider} from "./state/index.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoreProvider>
       <App />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

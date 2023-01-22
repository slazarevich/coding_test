import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'

import { RootLayout, ErrorBoundary } from './components'
import { DARK_THEME, LIGHT_THEME, PREFERRED_THEME } from './app/theme'

import './app/style.global.css'

const App = (): JSX.Element => {
  const [isDarkTheme, setIsDarkTheme] = useState(PREFERRED_THEME === 'dark')

  const handleChangeTheme = useCallback(() => {
    setIsDarkTheme((isDarkTheme) => {
      localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark')
      return !isDarkTheme
    })
  }, [])

  return (
    <React.StrictMode>
      <ThemeProvider theme={isDarkTheme ? DARK_THEME : LIGHT_THEME}>
        <ErrorBoundary>
          <CssBaseline />
          <RootLayout handleChangeTheme={handleChangeTheme} />
        </ErrorBoundary>
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import { createTheme } from '@mui/material/styles'

export const DARK_THEME = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const LIGHT_THEME = createTheme({
  palette: {
    mode: 'light',
  },
})

export const COLORS_LIGHT = ['#FDFDBD', '#C8FFD4', '#B8E8FC', '#B1AFFF']
export const COLORS_DARK = ['#3A015C', '#1C2B23', '#053a52', '#2A2A28']

export const PREFERRED_THEME = localStorage.getItem('theme')

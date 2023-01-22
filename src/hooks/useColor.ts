import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material'

import { COLORS_LIGHT, COLORS_DARK } from '../app/theme'

const getRandomColor = (colors: string[]): string => {
  return colors[Math.floor(Math.random() * colors.length)]
}

export const useColor = (value: string): string => {
  const theme = useTheme()
  const COLORS = theme.palette.mode === 'light' ? COLORS_LIGHT : COLORS_DARK

  const [prevValue, setPrevValue] = useState('')
  const [color, setColor] = useState(getRandomColor(COLORS))

  useEffect(() => {
    if (value && value !== prevValue) {
      setColor(getRandomColor(COLORS.filter((c) => c !== color)))
      setPrevValue(value)
    }
  }, [value])

  useEffect(() => {
    setColor(getRandomColor(COLORS.filter((c) => c !== color)))
  }, [theme.palette.mode])

  return color
}

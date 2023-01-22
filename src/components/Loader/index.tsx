import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import { Backdrop } from './style'

export const Loader = (): JSX.Element => {
  return (
    <Backdrop open>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

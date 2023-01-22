import React, { ReactNode } from 'react'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'

const style = {
  bgcolor: 'background.default',
  color: 'text.primary',
}

interface WrapperProps {
  children: ReactNode
}

export const RootWrapper = ({ children }: WrapperProps): JSX.Element => (
  <Box sx={style}>{children}</Box>
)

export const MarginWrapper = styled('div')`
  margin-top: 64px;
`

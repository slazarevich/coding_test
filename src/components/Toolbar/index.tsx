import * as React from 'react'
import { useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { FlexContainer, ContentWrapper } from '../../app/style'
import { ButtonWrapper, StyledToolbar } from './style'

interface ToolbarProps {
  children: React.ReactNode
  handleChangeTheme: () => void
}

export const Toolbar = ({ children, handleChangeTheme }: ToolbarProps): JSX.Element => {
  const theme = useTheme()

  return (
    <AppBar color="default" component="nav">
      <StyledToolbar>
        <FlexContainer>
          <ContentWrapper>{children}</ContentWrapper>
        </FlexContainer>
        <ButtonWrapper>
          <IconButton onClick={handleChangeTheme} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </ButtonWrapper>
      </StyledToolbar>
    </AppBar>
  )
}

import { styled } from '@mui/system'
import { Theme } from '@mui/material/styles'
import BackdropMUI from '@mui/material/Backdrop'

export const Backdrop = styled(BackdropMUI)(({ theme }) => ({
  zIndex: (theme as Theme).zIndex.drawer + 1,
}))

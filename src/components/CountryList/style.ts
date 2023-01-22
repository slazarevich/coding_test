import { styled } from '@mui/system'
import ListItemButtonMUI from '@mui/material/ListItemButton'

export const ListItemButton = styled(ListItemButtonMUI, {
  shouldForwardProp: (prop) => prop !== 'colorAccent',
})<{
  colorAccent: string
  selected: boolean
  indent?: number
}>`
  padding-left: ${({ theme, indent }): string => (indent ? theme.spacing(indent) : '')};
  background-color: ${({ selected, colorAccent }): string =>
    selected ? colorAccent : ''}!important;
`

export const EmojiWrapper = styled('div')`
  font-size: 20px;
`

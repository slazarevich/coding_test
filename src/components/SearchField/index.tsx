import React, { ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'

interface SearchFieldProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchField = ({ onChange }: SearchFieldProps): JSX.Element => {
  return (
    <TextField
      onChange={onChange}
      size="small"
      label="Search"
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

import React from 'react'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'

import { EmojiWrapper, ListItemButton } from './style'
import { VirtualScrollChild } from '../VirtualScrollChild'
import { Country } from '../../app/types'
import { NothingFound } from '../NothingFound'

interface CountryListProps {
  selectedCountry: string
  colorAccent: string
  countries: Country[]
  onClick: (countryCode: string) => void
  indent?: number
}

export const CountryList = ({
  selectedCountry,
  colorAccent,
  countries,
  onClick,
  indent,
}: CountryListProps): JSX.Element => {
  return (
    <List>
      {countries.length ? (
        countries.map((country) => (
          <VirtualScrollChild key={country.code}>
            <ListItemButton
              onClick={(): void => onClick(country.code)}
              selected={country.code === selectedCountry}
              colorAccent={colorAccent}
              indent={indent}>
              <ListItemText primary={`${country.code}: ${country.name}`} />
              <EmojiWrapper>{country.emoji}</EmojiWrapper>
            </ListItemButton>
          </VirtualScrollChild>
        ))
      ) : (
        <NothingFound />
      )}
    </List>
  )
}

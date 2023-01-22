import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'

import { VirtualScrollChild } from '../VirtualScrollChild'
import { CountryList } from '../CountryList'
import { NothingFound } from '../NothingFound'
import { GrouppedCountries } from '../../app/types'
import { NESTING_INDENT } from '../../app/constants'

interface GrouppedCountryListProps {
  countries: GrouppedCountries
  onClick: (countryCode: string) => void
  colorAccent: string
  selectedCountry: string
}

export const GrouppedCountryList = ({
  countries,
  selectedCountry,
  colorAccent,
  onClick,
}: GrouppedCountryListProps): JSX.Element => {
  const entries = Object.entries(countries)

  return (
    <List>
      {entries.length ? (
        entries.map(([key, countries]) => (
          <div key={key}>
            <VirtualScrollChild>
              <ListItem key={key}>
                <ListItemText primary={<Typography variant="h6">{key}</Typography>} />
              </ListItem>
            </VirtualScrollChild>
            <CountryList
              countries={countries}
              onClick={onClick}
              selectedCountry={selectedCountry}
              colorAccent={colorAccent}
              indent={NESTING_INDENT}
            />
          </div>
        ))
      ) : (
        <NothingFound />
      )}
    </List>
  )
}

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react'
import { debounce } from 'lodash'
import { parse } from 'search-query-parser'

import { useColor } from '../../hooks/useColor'
import { useCountries } from '../../hooks/useCountries'
import { GrouppedCountryList } from '../GrouppedCountryList'
import { SearchField } from '../SearchField'
import { CountryList } from '../CountryList'
import { Toolbar } from '../Toolbar'
import { Loader } from '../Loader'
import { RootWrapper } from './style'
import { getSelectedCountry } from '../../app/utils'
import { ContentWrapper, FlexContainer, MarginWrapper } from '../../app/style'
import { PARSE_OPTIONS } from '../../app/constants'

interface RootLayoutProps {
  handleChangeTheme: () => void
}

export const RootLayout = ({ handleChangeTheme }: RootLayoutProps): JSX.Element => {
  const [inputValue] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [groupQuery, setGroupQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  const colorAccent = useColor(selectedCountry)

  const { countries, isLoading, error } = useCountries(searchQuery, groupQuery)

  // Select the last item if length <= 10
  useEffect(() => {
    const newSelectedCountry = getSelectedCountry(countries)
    if (newSelectedCountry !== selectedCountry) {
      setSelectedCountry(newSelectedCountry)
    }
  }, [countries])

  const handleChangeInputValue = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value

      const query = parse(value, PARSE_OPTIONS)

      if (typeof query === 'string') {
        setSearchQuery(query)
        setGroupQuery('')
        return
      }

      setSearchQuery(query.search ?? '')
      setGroupQuery(query.group ?? '')
    }, 400),
    []
  )

  const handleClickItem = useCallback(
    (countryCode: string): void => {
      if (countryCode === selectedCountry) {
        return setSelectedCountry('')
      }
      setSelectedCountry(countryCode)
    },
    [selectedCountry]
  )

  return (
    <RootWrapper>
      <Toolbar handleChangeTheme={handleChangeTheme}>
        <SearchField value={inputValue} onChange={handleChangeInputValue} />
      </Toolbar>
      <FlexContainer>
        <ContentWrapper>
          <MarginWrapper>
            {isLoading || error ? (
              <Loader />
            ) : Array.isArray(countries) ? (
              <CountryList
                countries={countries}
                selectedCountry={selectedCountry}
                colorAccent={colorAccent}
                onClick={handleClickItem}
              />
            ) : (
              <GrouppedCountryList
                countries={countries}
                selectedCountry={selectedCountry}
                colorAccent={colorAccent}
                onClick={handleClickItem}
              />
            )}
          </MarginWrapper>
        </ContentWrapper>
      </FlexContainer>
    </RootWrapper>
  )
}

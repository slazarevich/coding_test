import { useMemo } from 'react'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

import { Country, GrouppedCountries } from '../app/types'
import { filterCountries, groupCountries } from '../app/utils'

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
})

// write a GraphQL query that asks for names and codes for all countries
// you can explore the full schema here: https://studio.apollographql.com/public/countries/explorer?variant=current
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      native
      capital
      emoji
      currency
    }
  }
`

interface CountriesResultGQL {
  countries: Country[]
}

interface CountriesResult {
  countries: Country[] | GrouppedCountries
  isLoading: boolean
  error?: string
}

export const useCountries = (searchQuery: string, groupQuery: string): CountriesResult => {
  const { data, loading, error } = useQuery<CountriesResultGQL>(LIST_COUNTRIES, { client })

  const filteredCountries = useMemo(() => {
    if (data) {
      return filterCountries(data.countries, searchQuery)
    }
    return []
  }, [data, searchQuery])

  const grouppedCountries = useMemo(() => {
    if (data) {
      return groupCountries(filteredCountries, groupQuery)
    }
    return []
  }, [data, filteredCountries, groupQuery])

  return {
    isLoading: loading,
    countries: grouppedCountries,
    error: error?.message,
  }
}

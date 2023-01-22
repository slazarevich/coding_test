import { groupBy } from 'lodash'

import { GROUP_BY } from './constants'
import { Country, GrouppedCountries } from './types'

export const filterCountries = (countries: Country[], filterBy: string): Country[] => {
  return countries.filter((country) => country.name.toLowerCase().includes(filterBy.toLowerCase()))
}

export const groupCountries = (
  countries: Country[],
  field: string
): GrouppedCountries | Country[] => {
  if (!GROUP_BY.includes(field)) {
    return countries
  }

  const countriesWithField = countries.filter((country) => country[field as keyof Country] !== null)
  return groupBy(countriesWithField, field)
}

export const getSelectedCountry = (countries: Country[] | GrouppedCountries): string => {
  if (Array.isArray(countries)) {
    if (countries.length && countries.length <= 10) {
      return countries[countries.length - 1].code
    }
    return ''
  }

  const values = Object.values(countries)
  const total = values.reduce((total, arr) => total + arr.length, 0)

  if (total > 0 && total <= 10) {
    return values.flat().slice(-1)[0].code
  }

  return ''
}

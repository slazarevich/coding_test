export interface Country {
  code: string
  name: string
  native: string
  capital: string
  emoji: string
  currency: string
  languages: string[]
}

export type GrouppedCountries = Record<string, Country[]>

import { CountryType } from '../types'

// Sorting for Population
export const sortByPopulation = (arr: CountryType[], orderBy: string) => {
  switch (orderBy) {
    case 'asc':
    default:
      return arr.sort((a: any, b: any) =>
        a.population > b.population ? 1 : b.population > a.population ? -1 : 0
      )
    case 'desc':
      return arr.sort((a: any, b: any) =>
        a.population < b.population ? 1 : b.population < a.population ? -1 : 0
      )
  }
}

// Sorting for Country
export const sortByCountry = (arr: CountryType[], orderBy: string) => {
  switch (orderBy) {
    case 'asc':
    default:
      return arr.sort((a: any, b: any) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    case 'desc':
      return arr.sort((a: any, b: any) =>
        a.name < b.name ? 1 : b.name < a.name ? -1 : 0
      )
  }
}

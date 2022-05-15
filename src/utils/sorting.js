// Sorting for Population
export const sortByPopulation = (arr, orderBy) => {
  switch (orderBy) {
    case 'asc':
    default:
      return arr.sort((a, b) =>
        a.population > b.population ? 1 : b.population > a.population ? -1 : 0
      )
    case 'desc':
      return arr.sort((a, b) =>
        a.population < b.population ? 1 : b.population < a.population ? -1 : 0
      )
  }
}

// Sorting for Country
export const sortByCountry = (arr, orderBy) => {
  switch (orderBy) {
    case 'asc':
    default:
      return arr.sort((a, b) =>
        a.name.common > b.name.common
          ? 1
          : b.name.common > a.name.common
          ? -1
          : 0
      )
    case 'desc':
      return arr.sort((a, b) =>
        a.name.common < b.name.common
          ? 1
          : b.name.common < a.name.common
          ? -1
          : 0
      )
  }
}

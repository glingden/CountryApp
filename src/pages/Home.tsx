import React, { useState } from 'react'

import HeaderBar from '../components/HeaderBar'
import useCountry from '../hook/useCountry'
import TableComponent from '../components/TableComponent'

export default function Home() {
  // Fetch data using hook
  const dataCountry = useCountry()
  const [search, setSearch] = useState('')

  // Filter based on searched country
  const filteredCountry = dataCountry.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  )

  const querySearchHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <HeaderBar search={search} onChange={querySearchHandle} />
      <TableComponent countryProps={filteredCountry} />
    </>
  )
}

import React, { useState } from 'react'

import TableData from '../component/tableData'
import Header from '../component/appBar'
import useCountry from '../hook/useCountry'

export default function Home() {
  const dataCountry = useCountry()
  const [search, setSearch] = useState('')

  const filteredCountry = dataCountry.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const querySearchHandle = (event) => {
    setSearch(event.target.value)
  }

  // console.log(filteredCountry)
  // console.log('Data:', countryData)

  return (
    <>
      <Header search={search} onChange={querySearchHandle} />
      <TableData props={filteredCountry} />
    </>
  )
}

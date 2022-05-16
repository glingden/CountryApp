import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getContriesThunk } from '../redux/actions'
import { AppState } from '../types'

const useCountry = (name?: string) => {
  const api = `https://restcountries.com/v3.1/${
    name === undefined ? `all` : `name/${name}`
  }`
  // console.log('url:', api)
  const { countryData } = useSelector((state: AppState) => state.country)
  const dispatch = useDispatch()
  // console.log('Data:', countryData)
  //Fire thunk
  useEffect(() => {
    dispatch(getContriesThunk(api))
  }, [api, dispatch])

  return countryData
}

export default useCountry

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getContriesThunk } from '../redux/actions'

const useCountry = (name) => {
  const api = `https://restcountries.com/v3.1/${
    name === undefined ? `all` : `name/${name}`
  }`
  // console.log('url:', api)
  const { data } = useSelector((state) => state.country)
  const dispatch = useDispatch()

  //Fire thunk
  useEffect(() => {
    dispatch(getContriesThunk(api))
  }, [api, dispatch])

  return data
}

export default useCountry

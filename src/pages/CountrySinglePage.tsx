import * as React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material'

import ThemeContext from '../context/ThemeContext'
import useCountry from '../hook/useCountry'

type Params = {
  countryName: string
}
const SingleCountry = () => {
  const { themeValue } = React.useContext(ThemeContext)
  // console.log('tehem;', themeValue)
  const { countryName } = useParams<Params>()
  const history = useHistory()
  const singleCountry = useCountry(countryName)

  return (
    <>
      {singleCountry.length !== 0 && (
        <Box
          justifyContent="center"
          sx={{ backgroundColor: 'black', color: 'white', pt: 5 }}
        >
          <Typography
            variant="h5"
            component="h5"
            style={{
              textAlign: 'center',
              marginTop: '25px',
            }}
          >
            Country Information
          </Typography>

          <Card>
            <CardContent>
              <img
                src={singleCountry[0].flags}
                style={{ width: '250px', height: '200' }}
                alt="flags"
              />
              <br />
              <br />

              <Typography gutterBottom variant="h6" component="div">
                Name: {singleCountry[0].name}
              </Typography>

              <Typography gutterBottom component="div">
                Region: {singleCountry[0].region}
              </Typography>

              <Typography gutterBottom component="div">
                Population: {singleCountry[0].population.toLocaleString()}
              </Typography>

              <Typography gutterBottom component="div">
                Borders:
                {singleCountry[0].borders ? (
                  singleCountry[0].borders.join(', ')
                ) : (
                  <p>Not Found</p>
                )}
              </Typography>

              <Typography gutterBottom component="div">
                Languages:{' '}
                {Object.values(singleCountry[0].languages || {}).map(
                  (language) => (
                    <li key={language}>{language}</li>
                  )
                )}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                size="small"
                variant="contained"
                sx={{ backgroundColor: themeValue }}
                onClick={() => history.push('/')}
              >
                Back
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  )
}

export default SingleCountry

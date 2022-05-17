import * as React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { makeStyles, createStyles } from '@mui/styles'
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
} from '@mui/material'

import useCountry from '../hook/useCountry'
import { ThemeContext } from '../context/Context'

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      marginTop: 10,
      textAlign: 'center',
      width: '100%',
    },
  })
)

const SingleCountry = () => {
  const { themeValue } = React.useContext(ThemeContext)
  const { countryName } = useParams()
  const navigate = useNavigate()
  const styles = useStyles()
  const singleCountry = useCountry(countryName)
  // console.log('single:', singleCountry)

  return (
    <>
      {singleCountry.length !== 0 && (
        <Box
          container
          justifyContent="center"
          sx={{ backgroundColor: themeValue, color: 'white', pt: 5 }}
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

          <Card className={styles.card}>
            <CardContent>
              <img
                src={singleCountry[0].flags.svg}
                style={{ width: '300px', height: '220' }}
                alt="flags"
              />
              <br />
              <br />

              <Typography gutterBottom variant="h6" component="div">
                Name: {singleCountry[0].name.common}
              </Typography>

              <Typography gutterBottom variant="body" component="div">
                Region: {singleCountry[0].region}
              </Typography>

              <Typography gutterBottom variant="body" component="div">
                Population: {singleCountry[0].population.toLocaleString()}
              </Typography>

              <Typography gutterBottom variant="body" component="div">
                Borders:{' '}
                {singleCountry[0].borders &&
                  singleCountry[0].borders.join(', ')}
                {!singleCountry[0].borders && <p>Not Found</p>}
              </Typography>

              <Typography gutterBottom variant="body" component="div">
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
                onClick={() => navigate('/')}
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

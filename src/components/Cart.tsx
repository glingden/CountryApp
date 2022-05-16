import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import ThemeContext from '../context/ThemeContext'
import { removeCountry } from '../redux/actions/cart'
import { AppState } from '../types'

export default function Cart() {
  const { themeValue } = React.useContext(ThemeContext)
  const { cartData } = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()

  return (
    <Box
      sx={{
        width: '40vh',
        height: '100%',
        backgroundColor: '#f2f2f2',
      }}
    >
      {cartData.map((country) => (
        <nav key={country.id} aria-label="main mailbox folders">
          <List>
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={country.flags}
                  style={{ width: '50px', height: '45px' }}
                  alt="flags"
                />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{
                    justifyContent: 'center',
                    pl: 1,
                    mt: 1.2,
                  }}
                >
                  {country.name}
                </Typography>
              </Box>

              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="open drawer"
                sx={{ mr: 0, color: themeValue }}
                onClick={() => dispatch(removeCountry(country))}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
            <Divider />
          </List>
        </nav>
      ))}
    </Box>
  )
}

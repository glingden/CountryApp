import * as React from 'react'
import ShoppingCart from './shoppingCart'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import SwithchTheme from './switchTheme'
import { ThemeContext } from '../context/Context'
import SearchBar from './searchBar'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function SearchAppBar({ search, onChange }) {
  const { themeValue } = React.useContext(ThemeContext)
  const { cart } = useSelector((state) => state.carts)
  const [openMenu, setOpenMenu] = React.useState(false)
  const [openCart, setOpenCart] = React.useState(false)

  const handleMenurOpen = () => {
    setOpenMenu(true)
  }

  const handleMenuClose = () => {
    setOpenMenu(false)
  }

  const handleCartOpen = () => {
    setOpenCart(true)
  }

  const handleCartClose = () => {
    setOpenCart(false)
  }
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: themeValue,
          transition: 'all 0.5s ease',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{ mr: 5 }}
            onClick={handleMenurOpen}
          >
            <MenuIcon
              style={{
                color: 'white',
                marginLeft: 9,
              }}
            />
          </IconButton>

          <Typography
            variant="body"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: 18,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Search for Country Information
          </Typography>

          {/* --- SearchBar --- */}
          <SearchBar value={search} onChange={onChange} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 5, mr: 0 }}
            onClick={handleCartOpen}
          >
            <Badge badgeContent={cart.length} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* --- This for Shoping Chart----- */}
      <Drawer
        PaperProps={{
          style: {
            height: '100%',
            width: '40vh',
            marginRight: '2rem',
            marginTop: '5rem',
            backgroundColor: '#f2f2f2',
          },
        }}
        variant="persistent"
        anchor="right"
        open={openCart}
      >
        <DrawerHeader
          sx={{
            backgroundColor: themeValue,
          }}
        >
          <Typography
            variant="body"
            noWrap
            component="div"
            align="left"
            color="white"
            sx={{
              backgroundColor: themeValue,
              mr: 2,
            }}
          >
            FLAGS CHART
          </Typography>
          <Badge
            badgeContent={cart.length ? cart.length : '0'}
            color="error"
            sx={{ mr: 18 }}
          ></Badge>
          <IconButton sx={{ color: 'white', mr: 2 }} onClick={handleCartClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* --- Render shoppingCart component ---- */}
        <ShoppingCart />
      </Drawer>

      {/* --- From here for Theme Switch Component ---- */}
      <Drawer
        PaperProps={{
          style: {
            height: '40vh',
            width: '13rem',
            backgroundColor: '#eeeee4',
            marginLeft: '2rem',
            marginTop: '5rem',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openMenu}
      >
        <DrawerHeader sx={{ backgroundColor: themeValue }}>
          <IconButton sx={{ color: 'white' }} onClick={handleMenuClose}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            variant="body"
            align="right"
            color="white"
            sx={{ flexGrow: 0, display: 'block', mr: 1, ml: 3 }}
          >
            SWITCH THEME
          </Typography>
        </DrawerHeader>
        <Divider />
        <Box>
          {/* --- Render Switch Theme component --- */}
          <SwithchTheme />
        </Box>
      </Drawer>
    </Box>
  )
}

import * as React from 'react'
import { useSelector } from 'react-redux'
import { styled, alpha } from '@mui/material/styles'
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
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import SwithchTheme from './ThemeSwitch'
import ThemeContext from '../context/ThemeContext'
import { AppState } from '../types'
import CountryCart from '../components/Cart'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function SearchAppBar({ search, onChange }: any) {
  const { themeValue } = React.useContext(ThemeContext) // Theme context
  const { cartData } = useSelector((state: AppState) => state.cart) // Cart state
  const [openMenu, setOpenMenu] = React.useState(false) // Menu open and close
  const [openCart, setOpenCart] = React.useState(false) // Cart open and close

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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by name"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={onChange}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 5, mr: 0 }}
            onClick={handleCartOpen}
          >
            <Badge badgeContent={cartData.length} color="error">
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
            noWrap
            component="div"
            align="left"
            color="white"
            sx={{
              flexGrow: 0,
              backgroundColor: themeValue,
              mr: 3,
            }}
          >
            FLAGS CART
          </Typography>
          <Badge
            badgeContent={cartData.length ? cartData.length : '0'}
            color="error"
            sx={{ mr: 10 }}
          ></Badge>
          <IconButton sx={{ color: 'white', mr: 2 }} onClick={handleCartClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* --- Render shoppingCart component ---- */}
        <CountryCart />
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
          <IconButton sx={{ color: 'white', pl: 0 }} onClick={handleMenuClose}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            align="right"
            color="white"
            sx={{ flexGrow: 0, display: 'block', mr: 3, ml: 0 }}
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

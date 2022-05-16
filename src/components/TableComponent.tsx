import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import ThemeContext from '../context/ThemeContext'
import { sortByPopulation, sortByCountry } from '../utils/Sorting'
import { addCountry } from '../redux/actions/cart'

import {
  Table,
  Button,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Paper,
  TableSortLabel,
} from '@mui/material'
import { CountryPropsType, AppState } from '../types'

export default function BasicTable({
  countryProps,
}: CountryPropsType): JSX.Element {
  const { loading, error } = useSelector((state: AppState) => state.country)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5) // page navigation
  const [rowData, setRowData] = React.useState(countryProps) // sorting
  const [orderDirection, setOrderDirection] = React.useState('asc') // direction country
  const [orderDirection1, setOrderDirection1] = React.useState('asc') // direction population
  const { themeValue } = React.useContext(ThemeContext)
  const { cartData } = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()

  // console.log(cart)
  // console.log(orderDirection1)

  // Handle Sorting by population when click
  const handleSortRequestPop = () => {
    setRowData(sortByPopulation(countryProps, orderDirection))
    setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc')
    setOrderDirection1('asc')
  }

  // Handle Sorting by country name when click
  const handleSortRequestCoutry = () => {
    setRowData(sortByCountry(countryProps, orderDirection1))
    setOrderDirection1(orderDirection1 === 'asc' ? 'desc' : 'asc')
    setOrderDirection('asc')
  }

  // Set New page
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  //   //Update Rows per Page
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  // Count Empty Rows
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, countryProps.length - page * rowsPerPage)

  // LOADING
  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>
    )
  }

  // ERROR
  if (error) return <p>{error}</p>

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table
          stickyHeader
          size="medium"
          aria-label="simple table"
          style={{ background: '#f2f2f2' }}
        >
          {/* --- Table Head Start here ---- */}
          <TableHead>
            <TableRow
              sx={{
                height: '8vh',
              }}
            >
              <TableCell sx={{ fontSize: 15, textAlign: 'center' }}>
                FLAG
              </TableCell>
              <TableCell
                style={{ fontSize: 15, textAlign: 'center' }}
                onClick={handleSortRequestCoutry}
              >
                <TableSortLabel active={true}>COUNTRY</TableSortLabel>
              </TableCell>
              <TableCell style={{ fontSize: 15, textAlign: 'center' }}>
                LANGUAGES
              </TableCell>
              <TableCell
                style={{ fontSize: 15, textAlign: 'center' }}
                onClick={handleSortRequestPop}
              >
                <TableSortLabel active={true}>POPULATION</TableSortLabel>
              </TableCell>

              <TableCell style={{ fontSize: 15, textAlign: 'center' }}>
                REGION
              </TableCell>

              <TableCell style={{ fontSize: 15, textAlign: 'center' }}>
                SELECT
              </TableCell>
            </TableRow>
          </TableHead>

          {/* --- Table Body Start here ---- */}
          <TableBody>
            {countryProps
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="td" scope="row" align="center">
                    <img
                      src={row.flags}
                      alt="flag"
                      style={{ width: 50, height: 45 }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Link to={`/${row.name}`} style={{ color: themeValue }}>
                      {row.name}
                    </Link>
                  </TableCell>

                  <TableCell align="center">
                    {
                      <ul>
                        {Object.values(row.languages || {}).map((language) => (
                          <li key={language}>{language}</li>
                        ))}
                      </ul>
                    }
                  </TableCell>

                  <TableCell align="center">
                    {row.population.toLocaleString()}
                  </TableCell>

                  <TableCell align="center">{row.region}</TableCell>

                  <TableCell align="center">
                    {cartData.find((country) => country.name === row.name) ? (
                      <Button variant="contained" disabled>
                        Add
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        style={{ background: themeValue }}
                        onClick={() => dispatch(addCountry(row))}
                      >
                        Add
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}

            {/* --- Maintain space in empty rows ---- */}
            {emptyRows > 0 && (
              <TableRow style={{ height: 100 * emptyRows }}>
                <TableCell colSpan={5}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* --- Table Pagination Start here ---- */}
      </TableContainer>
      <TablePagination
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '10vh',
          background: '#f2f2f2',
        }}
        component="div"
        rowsPerPageOptions={[5, 10, 50]}
        count={countryProps.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

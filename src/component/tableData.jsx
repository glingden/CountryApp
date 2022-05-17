import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../context/Context'
import { addCountry } from '../redux/actions/'
import { sortByPopulation, sortByCountry } from '../utils/sorting'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

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

export default function BasicTable({ props }) {
  const { loading, error } = useSelector((state) => state.country)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5) // page navigation
  const [rowData, setRowData] = React.useState(props) // sorting
  const [orderDirection, setOrderDirection] = React.useState('asc') // direction country
  const [orderDirection1, setOrderDirection1] = React.useState('asc') // direction population
  const { themeValue } = React.useContext(ThemeContext)
  const { cart } = useSelector((state) => state.carts)
  const dispatch = useDispatch()

  // Handle Sorting by population when click
  const handleSortRequestPop = () => {
    setRowData(sortByPopulation(props, orderDirection))
    setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc')
    setOrderDirection1('asc')
  }

  // Handle Sorting by country name when click
  const handleSortRequestCoutry = () => {
    setRowData(sortByCountry(props, orderDirection1))
    setOrderDirection1(orderDirection1 === 'asc' ? 'desc' : 'asc')
    setOrderDirection('asc')
  }

  // Set New page
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  //Update Rows per Page
  const handleChangeRowsPerPage = (event) => {
    // setRowsPerPage(+event.target.value)
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  // Count Empty Rows
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, props.length - page * rowsPerPage)

  // LOADING
  if (loading) {
    return (
      <Backdrop variant="temporary" sx={{ color: '#f2f2f2' }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  // ERROR
  if (error) return { error }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', color: 'black' }}>
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
                <TableSortLabel active={true} direction={orderDirection1}>
                  COUNTRY
                </TableSortLabel>
              </TableCell>
              <TableCell style={{ fontSize: 15, textAlign: 'center' }}>
                LANGUAGES
              </TableCell>
              <TableCell
                style={{ fontSize: 15, textAlign: 'center' }}
                onClick={handleSortRequestPop}
              >
                <TableSortLabel active={true} direction={orderDirection}>
                  POPULATION
                </TableSortLabel>
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
            {props
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="td" scope="row" align="center">
                    <img
                      src={row.flags.svg}
                      alt="flag"
                      style={{ width: 50, height: 45 }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Link
                      to={`/${row.name.common}`}
                      style={{ color: themeValue }}
                    >
                      {row.name.common}
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
                    {cart.find(
                      (country) => country.name.common === row.name.common
                    ) ? (
                      <Button
                        variant="contained"
                        disabled
                        styles={{ transition: 'all 1s ease' }}
                      >
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
              <TableRow style={{ height: 90 * emptyRows }}>
                <TableCell colSpan={5}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* --- Table Pagination Start here ---- */}
      </TableContainer>
      <TablePagination
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '10vh',
          background: '#f2f2f2',
          color: 'black',
        }}
        component="div"
        rowsPerPageOptions={[5, 10, 20, 50]}
        count={props.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

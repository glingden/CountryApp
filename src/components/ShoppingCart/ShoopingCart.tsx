import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import './shopCart.scss'

const ShoppinCart = () => {
  return (
    <div className="shoppingCart">
      <section className="shoppingCart__title">
        <p>FLAGS CART </p>
        <ArrowForwardIosIcon
          style={{ fontSize: '1.1rem', paddingTop: '0.5rem' }}
          aria-hidden="true"
        />
      </section>
      <section style={{ marginTop: '50px' }}>
        {' '}
        Here comes added countries.....{' '}
      </section>
    </div>
  )
}

export default ShoppinCart

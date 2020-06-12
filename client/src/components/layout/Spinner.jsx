import React, { Fragment } from 'react'
import spinner from './loading6.gif'

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading..." />
    </Fragment>
  )
}

export default Spinner

import React from 'react'
import PropTypes from 'prop-types'

const Counter2 = ({ counter, increment, doubleAsync }) => {
  if (counter.hasErrored) {
    return <p>Sorry! There was an error loading the items</p>
  }
  if (counter.isLoading) {
    return <p>Loading…</p>
  }
  return (
    <ul>
      {counter.items.map((item) => (
        <li key={item.id}>
          {item.label}
        </li>
                ))}
    </ul>
  )
}

Counter2.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter2

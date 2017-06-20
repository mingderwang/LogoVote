import React from 'react'
import PropTypes from 'prop-types'

class Counter2 extends React.Component {
  constructor () {
    super()
    this.state = {
      items: [
        {
          id: 1,
          label: 'List item 1'
        },
        {
          id: 2,
          label: 'List item 2'
        },
        {
          id: 3,
          label: 'List item 3'
        },
        {
          id: 4,
          label: 'List item 4'
        }
      ],
      hasErrored: false,
      isLoading: false
    }
  }
  render () {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>
    }
    if (this.state.isLoading) {
      return <p>Loading…</p>
    }
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
                ))}
      </ul>
    )
  }
}

Counter2.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter2

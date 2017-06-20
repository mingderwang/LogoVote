import React from 'react'
import PropTypes from 'prop-types'

var createReactClass = require('create-react-class')
var Greeting = createReactClass({
  handleClick () {
    console.log(this) // React Component instance
  },
  getInitialState () {
    return {
      check: false
    }
  },
  propTypes: {
    name:PropTypes.string.isRequired
  },
  getDefaultProps () {
    return {
      name:'default comment',
    }
  },
  render: function () {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <div onClick={this.handleClick}>Click me.</div>
      </div>
    )
  }
})

export default Greeting

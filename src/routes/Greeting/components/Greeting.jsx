import React from 'react'
import PropTypes from 'prop-types'
import elasticsearch from 'elasticsearch'

let client = new elasticsearch.Client({
  host: 'localhost:9200'
})

const SearchResults = React.createClass({
  propTypes: {
    results: React.PropTypes.array
  },
  getDefaultProps () {
    return { results: [] }
  },
  render () {
    return (
      <div className='search_results'>
        <hr />
        <ul>
          { this.props.results.map((result) => {
            console.log(result)
            return <h3>{result._source.proc.cmdline}</h3>
          }) }
        </ul>
      </div>
    )
  }
})

var createReactClass = require('create-react-class')
var Greeting = createReactClass({
  handleChange (event) {
    const searchQuery = event.target.value
    client.search({
      q: searchQuery
    }).then(function (body) {
      this.setState({ results: body.hits.hits })
    }.bind(this), function (error) {
      console.trace(error.message)
    })
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
        <input type='text' onChange={this.handleChange} />
        <SearchResults results={this.state.results} />
      </div>
    )
  }
})

export default Greeting

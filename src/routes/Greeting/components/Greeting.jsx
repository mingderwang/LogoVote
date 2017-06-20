import React from 'react'
import PropTypes from 'prop-types'
import elasticsearch from 'elasticsearch'
import Web3 from 'web3'

let web3

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
  handleClick (event) {
        console.log('clicked');
  },
  handleChange (event) {
    const searchBlock = event.target.value
    web3.eth.getBlock(searchBlock, function(error, result){
    if(!error)
        console.log(result);
    else
        console.error(error);
})
  },
  componentDidMount () {
// Checking if Web3 has been injected by the browser (Mist/MetaMask)
            if (typeof web3 !== 'undefined') {
                 // Use Mist/MetaMask's provider
                 web3 = new Web3(web3.currentProvider);
             } else {
                 console.log('No web3? You should consider trying MetaMask!')
                 // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//                 web3 = new Web3(new Web3.providers.HttpProvider("http://pub-node1.etherscan.io:8545")); //main net
                 // Ropsten Testnet 
                 web3 = new Web3(new Web3.providers.HttpProvider("http://163.172.171.98:8545")); //Ropsten test net
         }
         web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet')
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      break
    default:
      console.log('This is an unknown network.')
  }
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
        <button onClick={this.handleClick}>Click me</button>
        <input type='text' onChange={this.handleChange} />
        <SearchResults results={this.state.results} />
      </div>
    )
  }
})

export default Greeting

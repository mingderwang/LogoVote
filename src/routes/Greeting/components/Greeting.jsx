import React from 'react'
import PropTypes from 'prop-types'
import elasticsearch from 'elasticsearch'
import Web3 from 'web3'
const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')




const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]

const address = '0xcd52095f9c3916681fe6e745d61c8599b393faa6'
function initContract (contract) {


  // creation of contract object
var MyContract = window.web3.eth.contract(abi);

// initiate contract for an address
var myContractInstance = MyContract.at(address);

// call constant function
myContractInstance.balanceOf(web3.eth.accounts[0],function(error, result) { console.log(result)}) 
}

var createReactClass = require('create-react-class')
var Greeting22 = createReactClass({
  handleClick (event) {
    var message = this.state.message
    window.web3.eth.getBlock(message, function(error, result){
    if(!error) {
        this.setState({message: JSON.stringify(result)});
    }
    else
        this.setState({message: 'error'});
    }.bind(this))
  },
  handleChange (event) {
    this.setState({message: event.target.value});
  },
  componentDidMount () {
         window.web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet')
this.setState({net: 'Main Net'});
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
this.setState({net: 'Morden test Net'});
      break
    case "3":
      console.log('This is the ropsten test network.')
this.setState({net: 'Ropsten test Net'});
      break
    default:
      console.log('This is an unknown network.')
this.setState({net: 'Unknown'});
  }
  const eth = new Eth(web3.currentProvider)
  const contract = new EthContract(eth)
  // creation of contract object
var MyContract = web3.eth.contract(abi);

// initiate contract for an address
var myContractInstance = MyContract.at(address);

// call constant function
myContractInstance.balanceOf(web3.eth.accounts[0],function(error, result) {

this.setState({token: result.c[0]});
   }.bind(this)) 
this.setState({message: web3.eth.accounts[0]});
})
  },
  getInitialState: function() {
    return {message: 'n/a', token: '0', net: 'n/a'
  };
  },
  propTypes: {
    message:PropTypes.string.isRequired,
    token:PropTypes.string.isRequired
  },
  getDefaultProps () {
    return {
      message:'n/a',
      token: '0',
      net: 'n/a'
    }
  },
  render: function () {
    var message = this.state.message
    var token = this.state.token
    var net = this.state.net
    return (
      <div>
        <h2>You are on Ethereum: (based on MetaMask) </h2>
        <h4>{net}</h4>
        <p></p>
        <h2>Your Address: </h2>
        <h4>{message}</h4>
        <p></p>
        <h2>You have Taipei Ethereum LogoVote Token: </h2>
        <h4>{token}</h4>
      </div>
    )
  }
})

export default Greeting22

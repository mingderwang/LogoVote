import React from 'react'
import PropTypes from 'prop-types'
import elasticsearch from 'elasticsearch'
import Web3 from 'web3'
const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]

const abiVote =
[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]

const abiFaucet =
[{"constant":false,"inputs":[],"name":"getToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_tokenAddress","type":"address"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"}]

const ContractAddress = '0x3e2506af1b529b55b42abd8e27921929e682f61b'
const address = '0xcd52095f9c3916681fe6e745d61c8599b393faa6'
const VoteAddress = '0xcd52095f9c3916681fe6e745d61c8599b393faa6'
const Logo1 = '0xd085758bfd6e5e7560d7d9e3dcc50c99f38d74e8'
const Logo2 = '0xa7199b1011aea537447c43d0f1d8d91ec3fbf84c'
const Faucet = '0xf8f1b111585ad074a1f3e763178a7f736cd5a421'
function initContract (contract) {


  // creation of contract object
var MyContract = window.web3.eth.contract(abi);
var VoteContract = window.web3.eth.contract(abiVote);

// initiate contract for an address

myContractInstance.balanceOf(web3.eth.accounts[0],function(error, result) { console.log(result)})
}

var createReactClass = require('create-react-class')
var Greeting22 = createReactClass({
  handleClick1 (event) {
var VoteContract = window.web3.eth.contract(abiVote);
var myVoteContractInstance = VoteContract.at(VoteAddress)

myVoteContractInstance.transfer(Logo1,1, function(error, result) {
  if(!error) {
  console.log(result)
} else {
  console.log(error)
}
})
  },

handleClickFaucet (event) {

var FaucetContract = window.web3.eth.contract(abiFaucet);
var FaucetContractInstance = FaucetContract.at(Faucet)
FaucetContractInstance.getToken( function(error, result) {
  if(!error) {
  console.log(result)
} else {
  console.log(error)
}
})
},

handleClick2 (event) {
var VoteContract = window.web3.eth.contract(abiVote);
var myVoteContractInstance = VoteContract.at(VoteAddress)

myVoteContractInstance.transfer(Logo2,1, function(error, result) {
  if(!error) {
  console.log(result)
} else {
  console.log(error)
}
})
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
var VoteContract = web3.eth.contract(abiVote);

// initiate contract for an address
var myContractInstance = MyContract.at(address);

// call constant function
myContractInstance.balanceOf(web3.eth.accounts[0],function(error, result) {

this.setState({token: result.c[0]});
   }.bind(this))

this.setState({message: web3.eth.accounts[0]});

var lastBlock = web3.eth.getBlockNumber(function(error, result) {
 if(!error) {
    this.setState({currentBlock: result})
 }
 else
        console.error(error);
}.bind(this))
var myVoteContractInstance = VoteContract.at(VoteAddress)

myVoteContractInstance.balanceOf(Logo1, function(error, result) {
  if(!error) {
  console.log(result)
  this.setState({logo1: result.c[0]})
} else {
  console.log(error)
}
}.bind(this))

myVoteContractInstance.balanceOf(Logo2, function(error, result) {
  if(!error) {
  console.log(result)
  this.setState({logo2: result.c[0]})
} else {
  console.log(error)
}
}.bind(this))
// call constant function

})
  },

  getInitialState: function() {
    return {message: 'n/a', token: '0', net: 'n/a', currentBlock: '0',
    logo1: '0', logo2: '0'
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
      currentBlock: '0',
      logo1: '0',
      logo2: '0',
      net: 'n/a'
    }
  },
  render: function () {
    var message = this.state.message
    var token = this.state.token
    var logo1 = this.state.logo1
    var logo2 = this.state.logo2
    var currentBlock = this.state.currentBlock
    var net = this.state.net
    return (
      <div>
        <h2>You are on Ethereum: (based on MetaMask) </h2>
        <h4>{net}</h4>
        <p></p>
        <h2>Your Address: </h2>
        <h4>{message}</h4>
        <iframe src="https://www.powr.io/plugins/countdown-timer/view?unique_label=85f91fd1_1499096974&external_type=iframe" width="100%" height="200" frameborder="0"></iframe>
        <p></p>
        <h2>You have Taipei Ethereum LogoVote Token: </h2>
        <h4>{token}</h4>
        <button onClick={this.handleClickFaucet}>我要索取一張免費選票</button>
        <h2> currentBlock: </h2>
        <h4>{currentBlock}</h4>
        <h2> endBlock: </h2>
        <h4>1295975</h4>
        <button onClick={this.handleClick1}>我要投 阿花 1 票</button>
              <img src="https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" alt="hua" style={{width: 400}} />
<img src="http://i.imgur.com/Vhvm6jT.png" alt="huaqrcode" style={{width: 300}} />
              0xd085758bfd6e5e7560d7d9e3dcc50c99f38d74e8
        <h2> 阿花 got: </h2>
        <h4>{logo1}</h4>
        <button onClick={this.handleClick2}>我要投 ET 1 票</button>
              <img src="https://static.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg" alt="ET" style={{width: 400}} />
<img src="http://i.imgur.com/gVj6xCY.png" alt="ETqrcode" style={{width: 300}} />
             0xa7199b1011aea537447c43d0f1d8d91ec3fbf84c
        <h2> ET got: </h2>
        <h4>{logo2}</h4>
      </div>
    )
  }
})

export default Greeting22

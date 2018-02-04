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

const ContractAddress = '0x3Ab1d534Bb477f516817eFaAf0B569f419b8e292'
const VoteAddress = '0x795a9bFa0B30b92eFE663cBfbEC1656b6378748E'
const Logo0 = '0xD82ce82FBe3fc5b0429De15617604A7c6A8E0B0f'
const Logo1 = '0x17DA2B4227bdfbF6c4dc39afea1E4F6e0af575B7'
const Logo2 = '0x7d10CD89b7506ddA58933e54e7774b71c28F2B53'
const Logo3 = '0xf010A1CF53BEe1b1eCa44F3FB6e36f1ac633Ad19'
const Logo4 = '0xa245D51B2683E8e13657a6C711FE23a011391700'
const Logo5 = '0x3503317F65b1cdA3d48009AB963Be13BB6960A38'
const Faucet = '0x5041bfBa3DEB602d794F6CF6C3Db50D572912c40'
function initContract (contract) {


  // creation of contract object
var MyContract = window.web3.eth.contract(abi);
var VoteContract = window.web3.eth.contract(abiVote);

// initiate contract for an address
console.log(web3.eth.accounts[0])
myContractInstance.balanceOf(web3.eth.accounts[0],  function(error, result) {
  console.log('Ming')
  if(!error) {
  console.log(result)
} else {
  console.log(error)
}
})

}


var createReactClass = require('create-react-class')
var LogoVote = createReactClass({
  handleClick1 (event) {
var VoteContract = window.web3.eth.contract(abiVote);
var myVoteContractInstance = VoteContract.at(VoteAddress)

myVoteContractInstance.transfer(Logo0,1, function(error, result) {
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

myVoteContractInstance.transfer(Logo1,1, function(error, result) {
  if(!error) {
  console.log(result)
} else {
  console.log(error)
}
})
  },
  handleClick3 (event) {
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
  handleClick4 (event) {
var VoteContract = window.web3.eth.contract(abiVote);
var myVoteContractInstance = VoteContract.at(VoteAddress)

myVoteContractInstance.transfer(Logo3,1, function(error, result) {
  if(!error) {
  console.log(result)
} else {
  console.log(error)
}
})
  },
  handleClick5 (event) {
var VoteContract = window.web3.eth.contract(abiVote);
var myVoteContractInstance = VoteContract.at(VoteAddress)

myVoteContractInstance.transfer(Logo4,1, function(error, result) {
  if(!error) {
  console.log(result)
} else {
  console.log(error)
}
})
  },
  handleClick6 (event) {
var VoteContract = window.web3.eth.contract(abiVote);
var myVoteContractInstance = VoteContract.at(VoteAddress)

myVoteContractInstance.transfer(Logo5,1, function(error, result) {
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
var myContractInstance = MyContract.at(VoteAddress);

// call constant function
console.log(web3.eth.accounts)
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

myVoteContractInstance.balanceOf(Logo0, function(error, result) {
  if(!error) {
  console.log(result)
  this.setState({logo0: result.c[0]})
} else {
  console.log(error)
}
}.bind(this))

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

myVoteContractInstance.balanceOf(Logo3, function(error, result) {
  if(!error) {
  console.log(result)
  this.setState({logo3: result.c[0]})
} else {
  console.log(error)
}
}.bind(this))


myVoteContractInstance.balanceOf(Logo4, function(error, result) {
  if(!error) {
  console.log(result)
  this.setState({logo4: result.c[0]})
} else {
  console.log(error)
}
}.bind(this))


myVoteContractInstance.balanceOf(Logo5, function(error, result) {
  if(!error) {
  console.log(result)
  this.setState({logo5: result.c[0]})
} else {
  console.log(error)
}
}.bind(this))



})
  },

  getInitialState: function() {
    return {message: 'n/a', token: '0', net: 'n/a', currentBlock: '0',
    logo0: '0', logo1: '0'
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
      logo0: '0',
      logo1: '0',
      logo2: '0',
      logo3: '0',
      logo4: '0',
      logo5: '0',
      net: 'n/a'
    }
  },
  render: function () {
    var message = this.state.message
    var token = this.state.token
    var logo0 = this.state.logo0
    var logo1 = this.state.logo1
    var logo2 = this.state.logo2
    var logo3 = this.state.logo3
    var logo4 = this.state.logo4
    var logo5 = this.state.logo5
    var currentBlock = this.state.currentBlock
    var net = this.state.net
    return (
      <div>
        <h1>Taipei Ethereum Meetup 票選 Logo 活動網頁</h1>
        <h2>(你必須裝好 小狐狸 metaMask, 且有一點點錢)</h2>
        <h2>(You must install metaMask, with some ethers in your account.)</h2>
        <h2>(你必須在主網路, You must on MainNet)</h2>
        <h4>Now, you are in {net}</h4>
        <p></p>
        <h2>Your Address: </h2>
        <h4>{message}</h4>
        <iframe src="https://www.powr.io/plugins/countdown-timer/view?unique_label=85f91fd1_1499096974&external_type=iframe" width="100%" height="200" frameborder="0"></iframe>
        <p></p>
<h2>可以直接買 TLV,  0.001 ether = 1 TLV</h2>
<h2>請直接寄 ether 給</h2>
<h1>主合約位址</h1>
<h2>0x3Ab1d534Bb477f516817eFaAf0B569f419b8e292</h2>
        <h2>You have Taipei Ethereum LogoVote (TLV) Token: {token}</h2>
        <button onClick={this.handleClickFaucet}>我要索取一張免費選票</button>
        <h2> currentBlock: </h2>
        <h4>{currentBlock}</h4>
        <h2> endBlock: </h2>
        <h4>4039902 (大約為 7/13 ~ 7/18 晚上)</h4>
        <table style={{width: '100%'}}>
        <tr>
        <button onClick={this.handleClick1}>我要投 @wendy30398 1 票</button>
              <img src="https://cloud.githubusercontent.com/assets/3391420/26555429/92778b48-44c7-11e7-8671-ce5e57399c0c.png" alt="huaqrcode" style={{width: 300}} />
              {Logo0}
              <img src='http://qrickit.com/api/qr.php?d=0xD82ce82FBe3fc5b0429De15617604A7c6A8E0B0f&addtext=&txtcolor=442EFF&fgdcolor=76103C&bgdcolor=C0F912&logotext=QRickit&qrsize=150&t=p&e=m'/>
        <h2> @wendy30398 got: {logo0} TLV</h2>
        </tr>
        <tr>
        <button onClick={this.handleClick2}>我要投 gundam.fhcrc 1 票</button>
              <img src="https://user-images.githubusercontent.com/6625091/27011067-6ff69284-4ee6-11e7-96d2-167deaa88c94.jpg" alt="ETqrcode" style={{width: 300}} />
             {Logo1}
             <img src='http://qrickit.com/api/qr.php?d=0x17DA2B4227bdfbF6c4dc39afea1E4F6e0af575B7&addtext=&txtcolor=442EFF&fgdcolor=76103C&bgdcolor=C0F912&logotext=QRickit&qrsize=150&t=p&e=m'/>

        <h2> gundam.fhcrc got: {logo1} TLV </h2>
        </tr>
        <tr>
        <button onClick={this.handleClick3}>我要投 jksnkuo 1 票</button>
              <img src="https://user-images.githubusercontent.com/3250798/26972611-214c98ec-4d45-11e7-8195-8866dc35026a.jpg" alt="ETqrcode" style={{width: 300}} />
             {Logo2}
             <img src='http://qrickit.com/api/qr.php?d=0x7d10CD89b7506ddA58933e54e7774b71c28F2B53&addtext=&txtcolor=442EFF&fgdcolor=76103C&bgdcolor=C0F912&logotext=QRickit&qrsize=150&t=p&e=m'/>

        <h2> jksnkuo got: {logo2} TLV </h2>
        </tr>
        <tr>
        <button onClick={this.handleClick4}>我要投 janeto 1 票</button>
              <img src="https://user-images.githubusercontent.com/3665658/26996615-f8f2dd1e-4da5-11e7-9073-ab05ce386151.png" alt="ETqrcode" style={{width: 300}} />
             {Logo3}
             <img src='http://qrickit.com/api/qr.php?d=0xf010A1CF53BEe1b1eCa44F3FB6e36f1ac633Ad19&addtext=&txtcolor=442EFF&fgdcolor=76103C&bgdcolor=C0F912&logotext=QRickit&qrsize=150&t=p&e=m'/>

        <h2> janeto got: {logo3} TLV </h2>
        </tr>
        <tr>
        <button onClick={this.handleClick5}>我要投 mingderwang 1 票</button>
              <img src="https://user-images.githubusercontent.com/3391420/27025687-f537c0ce-4f8d-11e7-8bc8-b4882fc35133.png" alt="ETqrcode" style={{width: 300}} />
             {Logo4}
             <img src='http://qrickit.com/api/qr.php?d=0xa245D51B2683E8e13657a6C711FE23a011391700&addtext=&txtcolor=442EFF&fgdcolor=76103C&bgdcolor=C0F912&logotext=QRickit&qrsize=150&t=p&e=m'/>

        <h2> mingderwang got: {logo4} TLV </h2>
        </tr>
        <tr>
        <button onClick={this.handleClick6}>我要投 valentino chao 1 票</button>
              <img src="https://user-images.githubusercontent.com/3391420/27016204-c27eecea-4f4f-11e7-8d52-1e9bd4f73ad9.jpg" alt="ETqrcode" style={{width: 300}} />
             {Logo5}
             <img src='http://qrickit.com/api/qr.php?d=0x3503317F65b1cdA3d48009AB963Be13BB6960A38&addtext=&txtcolor=442EFF&fgdcolor=76103C&bgdcolor=C0F912&logotext=QRickit&qrsize=150&t=p&e=m'/>

        <h2> valentino chao got: {logo5} TLV </h2>
        </tr>
        </table>
      </div>
    )
  }
})

export default LogoVote

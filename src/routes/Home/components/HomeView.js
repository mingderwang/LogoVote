import React from 'react'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h1>Welcome to Taipei Ethereum Meetup</h1>
    <h4>We are going to use a smart contract for people to vote our new Logo.</h4>
    <p></p>
    <h2>Please use <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>, install extension: <a href="https://metamask.io/">metaMask(小狐狸)電子錢包</a> </h2>
    <p><a href="https://paper.dropbox.com/doc/LogoVote-Ropsten-TestNet-Ethereum-RTIVjg4MDcXeHcdBV56Lc">貓選美 User Guide 使用說明。若要投票請點選右上方的 'LogoVote （MainNet)'</a></p>

    <img src="http://i.imgur.com/UI62XdU.png" alt="pay 2 gwei is enough (用 2 gwei Gas price 就好)"/>
    <p>
    To save your transfer fee (pay 2 gwei is enough)
    </p>
    <p>
    改 Gas price 設為 2 GWEI 就夠了
    </p>
  </div>
)

export default HomeView

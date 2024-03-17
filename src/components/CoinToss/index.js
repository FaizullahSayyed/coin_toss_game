import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalFlips: 0,
    heads: 0,
    tails: 0,
  }

  onFlipCoin = () => {
    const flipResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({totalFlips: prevState.totalFlips + 1}))

    if (flipResult === 0) {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {imageUrl, totalFlips, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <div className="coin-container">
            <img src={imageUrl} alt="toss result" className="coin-image" />
          </div>
          <div className="button-container">
            <button type="button" onClick={this.onFlipCoin} className="button">
              Toss Coin
            </button>
          </div>
          <div className="result-container">
            <p className="result">Total: {totalFlips}</p>
            <p className="result">Heads:{heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

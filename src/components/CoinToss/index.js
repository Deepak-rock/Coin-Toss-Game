// Write your code here
import {Component} from 'react'
import './index.css'

const heads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: heads,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    let resultImg = ''
    const toss = Math.floor(Math.random() * 2)
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      resultImg = heads
      latestHeadsCount += 1
    } else {
      resultImg = tails
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: resultImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="tosscoin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} className="coin-image" alt="toss result" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

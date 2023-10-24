import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: headImgUrl,
    heads: 0,
    tails: 0,
  }

  onClickForToss = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImageUrl = ''
    let totalHeads = heads
    let totalTails = tails

    if (tossResult === 0) {
      totalHeads += 1
      tossImageUrl = headImgUrl
    } else {
      totalTails += 1
      tossImageUrl = tailImgUrl
    }

    this.setState({
      tossImage: tossImageUrl,
      heads: totalHeads,
      tails: totalTails,
    })
  }

  render() {
    const {tossImage, heads, tails} = this.state
    const total = heads + tails
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>

          <img className="front-image" src={tossImage} alt="toss result" />

          <button
            className="button"
            type="button"
            onClick={this.onClickForToss}
          >
            Toss Coin
          </button>
          <div className="bottom-container">
            <p className="totalParagraph">Total:{total}</p>
            <p className="totalParagraph">Heads:{heads}</p>
            <p className="totalParagraph">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

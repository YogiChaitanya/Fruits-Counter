// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsContainer extends Component {
  state = {mango: 0, banana: 0}

  eatMangoButton = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBananaButton = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">
            Bob ate<spin className="count-color">{mango}</spin>mangoes
            <spin className="count-color">{banana}</spin>bananas
          </h1>
          <div className="fruits-card">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.eatMangoButton}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
                alt="banana"
              />
              <div>
                <button
                  type="button"
                  className=" button"
                  onClick={this.eatBananaButton}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsContainer

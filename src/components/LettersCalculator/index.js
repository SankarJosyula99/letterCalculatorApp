// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', text: 0}

  ChangeFunction = e => {
    const newText = e.target.value.length
    this.setState({searchInput: e.target.value, text: newText})
  }

  render() {
    const {searchInput, text} = this.state
    return (
      <div className="main-holder">
        <div className="inner-holder">
          <div className="content">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <label htmlFor="hi" className="para">
              Enter the phrase
            </label>
            <input
              type="text"
              id="hi"
              placeholder="Enter the phrase"
              className="input-element"
              value={searchInput}
              onChange={this.ChangeFunction}
            />
            <div className="result-holder">
              <p className="show-result">No.of letters: {text}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator

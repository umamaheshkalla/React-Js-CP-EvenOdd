import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNo = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNo}))
  }

  render() {
    const {count} = this.state
    const isEvenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          <p>Count is {isEvenOrOdd}</p>
          <button onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

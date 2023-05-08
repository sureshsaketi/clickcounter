import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous state ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>
        <p className="description"> Click the button to increase the count!</p>
        <button className="button" type="submit" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
// https://countersure.ccbp.tech
export default ClickCounter

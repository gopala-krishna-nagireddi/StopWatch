// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimerRunning: false}

  onStartBtn = () => {
    this.timerId = setInterval(this.runTime, 1000)
  }

  runTime = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
      isTimerRunning: true,
    }))
  }

  onStopBtn = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onResetBtn = () => {
    clearInterval(this.timerId)
    this.setState({timer: 0})
  }

  render() {
    const {timer, isTimerRunning} = this.state

    const minutes = Math.floor(timer / 60)
    const seconds = timer - minutes * 60

    let initialTimer
    if (minutes === 0 && seconds === 0) {
      initialTimer = true
    } else {
      initialTimer = false
    }

    console.log(`${minutes}:${seconds}`)
    return (
      <div className="app-container">
        <h1>Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          {initialTimer ? (
            <h2>00:00</h2>
          ) : (
            <h2>
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </h2>
          )}
          <div className="btn-container">
            <button
              className="start-btn btn"
              type="button"
              disabled={isTimerRunning}
              onClick={this.onStartBtn}
            >
              Start
            </button>
            <button
              className="stop-btn btn"
              type="button"
              disabled={!isTimerRunning}
              onClick={this.onStopBtn}
            >
              Stop
            </button>
            <button
              className="reset-btn btn"
              type="button"
              onClick={this.onResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

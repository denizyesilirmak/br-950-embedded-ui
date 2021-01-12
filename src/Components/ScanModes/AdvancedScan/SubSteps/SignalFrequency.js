import React from 'react'
import './SignalFrequency.css'
import Selector from '../Items/Selector'


class SignalFrequency extends React.Component {
  render() {
    return (
      <div className="signal-frequency">
        <Selector value={this.props.frequency} unit="Hz" />

        <svg width="500" height="140" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="#0b264b" />
              <stop offset="50%" stopColor="#c5edf7" />
              <stop offset="95%" stopColor="#0b264b" />
            </linearGradient>
          </defs>
          <path
            d={this.props.pathString}
            strokeWidth="4"
            stroke="url('#myGradient')"
            fill="none"
          />
          <line x1="0" y1="70" x2="500" y2="70" stroke="#000000" strokeWidth="1" />
        </svg>

      </div>
    )
  }
}

export default SignalFrequency

// M 0 70 
// Q 35  0   70  70 
// Q 105 140 140  70 
// Q 175 0   210  70 
// Q 245 140 280  70 

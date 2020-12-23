import React from 'react'
import './SignalFrequency.css'
import Selector from '../Items/Selector'


class SignalFrequency extends React.Component {
  render() {
    return (
      <div className="signal-frequency">
        <Selector />

        <svg width="500" height="140" xmlns="http://www.w3.org/2000/svg">
          <path
            style={{d: this.props.pathString }}
            className="frequency-path"
            id="svg_1"
            strokeWidth="3"
            stroke="#000"
            fill="none"
          />
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

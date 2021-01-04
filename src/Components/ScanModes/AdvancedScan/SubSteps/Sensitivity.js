import React from 'react'
import './Sensitivity.css'
import Selector from '../Items/Selector'

class Sensitivity extends React.Component {
  render() {
    return (
      <div className="sensitivity">
        <Selector value={this.props.sensitivity} fontSize={30} />

        <div className="sensitivity-visual">
          <svg width="500" height="130" xmlns="http://www.w3.org/2000/svg">
            <g>
              <line stroke="#000" y2="65" x2="480" y1="65" x1="20" strokeWidth="6" strokeLinecap="round" strokeDashoffset="10" strokeDasharray="20" />
              <line stroke="#000" y2="78" x2="480" y1="78" x1="20" strokeWidth="6" strokeLinecap="round" strokeDashoffset="0" strokeDasharray="30" />
              <line stroke="#000" y2="91" x2="480" y1="91" x1="20" strokeWidth="6" strokeLinecap="round" strokeDashoffset="20" strokeDasharray="40" />
              <line stroke="#000" y2="104" x2="480" y1="104" x1="20" strokeWidth="6" strokeLinecap="round" strokeDashoffset="20" strokeDasharray="50" />
              <line stroke="#000" y2="117" x2="480" y1="117" x1="20" strokeWidth="6" strokeLinecap="round" strokeDashoffset="20" strokeDasharray="10" />
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default Sensitivity


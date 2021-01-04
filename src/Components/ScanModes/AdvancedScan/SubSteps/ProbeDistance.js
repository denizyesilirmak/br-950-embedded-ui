import React from 'react'
import './ProbeDistance.css'
import Selector from '../Items/Selector'


class ProbeDistance extends React.Component {
  render() {
    return (
      <div className="probe-distance">
        <Selector value={`${this.props.distance} metres`} fontSize={20} />

        <div className="sensitivity-visual">
          <svg width="500" height="140" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path id="svg_4" d="m72.60479,87.79566" opacity="0.5" fillOpacity="null" strokeOpacity="null" strokeWidth="3.5" stroke="#000" fill="none" />
              <path stroke="#000" id="svg_5" d="M51 33l2 -2l2 2l1 62l-3 14l-3 -14c0 -21 0 -42 1 -62z" fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="none" />
              <path stroke="#000" id="svg_6" d="M449 33l2 -2l2 2l1 62l-3 14l-3 -14c0 -21 0 -42 1 -62z" fillOpacity="null" strokeOpacity="null" strokeWidth="2" fill="none" />

              <line strokeDasharray="5,2,2,2" strokeLinecap="null" strokeLinejoin="null" id="svg_7" y2="30.57957" x2="450.83861" y1="30.57957" x1="53.0724" fillOpacity="null" strokeOpacity="null" strokeWidth="2" stroke="#000" fill="none" />
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default ProbeDistance
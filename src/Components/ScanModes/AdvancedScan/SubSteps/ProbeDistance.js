import React from 'react'
import './ProbeDistance.css'
import Selector from '../Items/Selector'


class ProbeDistance extends React.Component {
  render() {
    return (
      <div className="probe-distance">
        <Selector value={`${this.props.distance} metres`} fontSize={20} />

        <div className="probe-distance-visual">
          <div className="sensitivity-visual">
            <span>
              <marquee>The value of the distance between probes in meters. Please try to adjust the distance between the probes equally.</marquee>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProbeDistance
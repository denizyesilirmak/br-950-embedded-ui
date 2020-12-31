import React from 'react'
import './Summary.css'

import Icon_FrequencyIcon from '../../../../Assets/icons/summary/frequency.png'
import Icon_DirtType from '../../../../Assets/icons/summary/dirt-type.png'
import Icon_Sensitivity from '../../../../Assets/icons/summary/sensitivity.png'
import Icon_ProbeDistance from '../../../../Assets/icons/summary/distance.png'

class Summary extends React.Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-table">

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_FrequencyIcon})` }}>
            <div className="summary-table-title">
              Frequency
            </div>
            <div className="summary-table-value">
              100 Hz
            </div>
          </div>

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_DirtType})` }}>
            <div className="summary-table-title">
              Dirt Type
            </div>
            <div className="summary-table-value">
              Rock
            </div>
          </div>

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_Sensitivity})` }}>
            <div className="summary-table-title">
              Sensitivty
            </div>
            <div className="summary-table-value">
              90
            </div>
          </div>

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_ProbeDistance})` }}>
            <div className="summary-table-title">
              Probe Distance
            </div>
            <div className="summary-table-value">
              20 M
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Summary
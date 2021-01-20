import React from 'react'
import './Summary.css'
import { DeviceContext } from '../../../../Contexts/DeviceContext'

import Icon_FrequencyIcon from '../../../../Assets/icons/summary/frequency.png'
import Icon_DirtType from '../../../../Assets/icons/summary/dirt-type.png'
import Icon_Sensitivity from '../../../../Assets/icons/summary/sensitivity.png'
import Icon_ProbeDistance from '../../../../Assets/icons/summary/distance.png'

class Summary extends React.Component {
  static contextType = DeviceContext
  render() {
    return (
      <div className="summary">
        <div className="summary-table">

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_FrequencyIcon})` }}>
            <div className="summary-table-title">
              {this.context.strings['frequency']}
            </div>
            <div className="summary-table-value">
              {this.props.frequency} Hz
            </div>
          </div>

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_DirtType})` }}>
            <div className="summary-table-title">
              {this.context.strings['dirt_type']}
            </div>
            <div className="summary-table-value">
              {this.props.dirtTypeIndex}
            </div>
          </div>

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_Sensitivity})` }}>
            <div className="summary-table-title">
              {this.context.strings['sensitivity']}
            </div>
            <div className="summary-table-value">
              {this.props.sensitivity}
            </div>
          </div>

          <div className="summary-prop" style={{ backgroundImage: `url(${Icon_ProbeDistance})` }}>
            <div className="summary-table-title">
              {this.context.strings['probe_distance']}
            </div>
            <div className="summary-table-value">
              {this.props.probeDistance} M
            </div>
          </div>

        </div>

        <div className="summary-button">
          {this.context.strings['press_ok_to_start']}
        </div>
      </div>
    )
  }
}

export default Summary
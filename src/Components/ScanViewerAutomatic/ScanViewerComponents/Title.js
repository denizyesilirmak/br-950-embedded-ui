import React from 'react'
import './Title.css'
import { DeviceContext } from '../../../Contexts/DeviceContext'

class Title extends React.Component {
  static contextType = DeviceContext
  render() {
    return (
      <div className="scan-title">

        <div className="scan-type">
          <span className="scan-title-label">{this.context.strings['scan_type']} </span>
          <span className="scan-title-value">{this.props.type}</span>
        </div>

        <div className="scan-type">
          <span className="scan-title-label">{this.context.strings['scan_date']} </span>
          <span className="scan-title-value">{this.props.date}</span>
        </div>

      </div>
    )
  }
}

export default Title
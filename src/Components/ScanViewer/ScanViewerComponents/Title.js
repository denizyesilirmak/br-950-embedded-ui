import React from 'react'
import './Title.css'

class Title extends React.Component {
  render() {
    return (
      <div className="scan-title">
        <div className="scan-type">
          <span className="scan-title-label">Scan Type: </span>
          <span className="scan-title-value">{this.props.type}</span>
        </div>

        <div className="scan-type">
          <span className="scan-title-label">Scan Date: </span>
          <span className="scan-title-value">{this.props.date}</span>
        </div>
      </div>
    )
  }
}

export default Title
import React from 'react'
import './ScanViewerAnimation.css'
import { DeviceContext } from '../../../../Contexts/DeviceContext'

class ScanViewerAnimation extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    console.log(this.props.result)
  }
  render() {
    return (
      <div className="scan-viewer-animation">
        <div className="animation-video">
          video container
        </div>

        <div className="animation-data">

          <div className="item">
            <div className="title">
              {this.context.strings['rate']}
            </div>
            <div className="value">
              30%
            </div>
          </div>

          <div className="item">
            <div className="title">
              {this.context.strings['type']}
            </div>

            <div className="value">
              Fresh Water
            </div>
          </div>

          <div className="item">
            <div className="title">
              {this.context.strings['salinity']}
            </div>
            <div className="value">
              0,0003
            </div>
          </div>

          <div className="item">
            <div className="title">
              {this.context.strings['depth']}
            </div>
            <div className="value">
              30 m
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default ScanViewerAnimation
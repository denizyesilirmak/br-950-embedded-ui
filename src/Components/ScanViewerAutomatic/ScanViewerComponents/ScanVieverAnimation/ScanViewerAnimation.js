import React from 'react'
import './ScanViewerAnimation.css'

class ScanViewerAnimation extends React.Component {
  render() {
    return (
      <div className="scan-viewer-animation">
        <div className="animation-video">
          video container
        </div>

        <div className="animation-data">

          <div className="item">
            <div className="title">
              Rate
            </div>
            <div className="value">
              30%
            </div>
          </div>

          <div className="item">
            <div className="title">
              Type
            </div>

            <div className="value">
              Fresh Water
            </div>
          </div>

          <div className="item">
            <div className="title">
              Salinity
            </div>
            <div className="value">
              0,0003
            </div>
          </div>

          <div className="item">
            <div className="title">
              Rate
            </div>
            <div className="value">
              30%
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default ScanViewerAnimation
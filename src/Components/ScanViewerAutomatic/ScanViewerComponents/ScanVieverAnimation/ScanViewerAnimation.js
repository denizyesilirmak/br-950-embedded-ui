import React from 'react'
import './ScanViewerAnimation.css'
import { DeviceContext } from '../../../../Contexts/DeviceContext'

import vfreshWater from '../../../../Assets/videos/auto_fresh_water.mp4'
import vmineralWater from '../../../../Assets/videos/auto_mineral_water.mp4'
import vsaltyWater from '../../../../Assets/videos/auto_salty_water.mp4'

class ScanViewerAnimation extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)

    this.state = {
      active_video: this.props.result.water_type
    }

    console.log(this.props.result)

  }


  getVideo = () => {
    switch (this.state.active_video) {
      case 'high_fresh_water': return vfreshWater
      case 'fresh_water': return vfreshWater
      case 'mineral_water': return vmineralWater
      case 'high_mineral_water': return vmineralWater
      case 'salty_water': return vsaltyWater
      case 'very_salty_water': return vsaltyWater
      default: return 0;
    }
  }

  render() {
    return (
      <div className="scan-viewer-animation">
        <div className="animation-video">
          <video src={this.getVideo()} muted autoPlay />
        </div>

        <div className="animation-data">

          <div className="item">
            <div className="title">
              {this.context.strings['rate']}
            </div>
            <div className="value">
              {this.props.result.rate} %
            </div>
          </div>

          <div className="item">
            <div className="title">
              {this.context.strings['type']}
            </div>

            <div className="value">
              {this.context.strings[this.props.result.water_type]}
            </div>
          </div>

          <div className="item">
            <div className="title">
              {this.context.strings['salinity']}
            </div>
            <div className="value">
              ~ {this.props.result.salinity} ppm
            </div>
          </div>

          <div className="item">
            <div className="title">
              {this.context.strings['depth']}
            </div>
            <div className="value">
              ~ {this.props.result.water_depth} m
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default ScanViewerAnimation
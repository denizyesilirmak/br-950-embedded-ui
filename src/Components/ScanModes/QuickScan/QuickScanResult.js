import React from 'react'
import './QuickScanResult.css'
import socketHelper from '../../../SocketHelper'
import { DeviceContext } from '../../../Contexts/DeviceContext'

import fresh_video from '../../../Assets/videos/q_fresh.mp4'
import mineral_video from '../../../Assets/videos/q_mineral.mp4'
import salty_video from '../../../Assets/videos/q_salty.mp4'

class QuickScanResult extends React.Component {
  static contextType = DeviceContext
  // constructor(props) {
  //   super(props)

  // }

  componentDidMount() {
    // console.log(this.props.screenProps)
    socketHelper.attach(this.handleSocket)

  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  handleSocket = (socketData) => {
    if (socketData.type !== 'button') {
      return
    }

    switch (socketData.payload) {
      case 'up':
        break;
      case 'down':
        break;
      case 'left':
        break;
      case 'right':
        break;
      case 'ok':
        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        return
      default:
        return
    }
  }

  getWaterVideo = () => {
    switch (this.props.screenProps.result.water_type) {
      case 'high_fresh_water':
        return fresh_video
      case 'fresh_water':
        return fresh_video
      case 'mineral_water':
        return mineral_video
      case 'high_mineral_water':
        return mineral_video
      case 'salty_water':
        return salty_video
      case 'very_salty_water':
        return salty_video
      default:
        return null
    }
  }

  render() {
    return (
      <div className="quick-scan-result component">
        <div className="quick-scan-container">
          <div className="quick-scan-result-video-container">
            <video src={this.getWaterVideo()} autoPlay muted loop style={{width: '240px', height: '280px'}}/>
          </div>

          <div className="quick-scan-result-table">

          <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['line']}
              </div>
              <div className="right">
                {this.props.screenProps.line.probe}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['value']}
              </div>
              <div className="right">
                {this.props.screenProps.result.rate} %
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['salinity']}
              </div>
              <div className="right">
                ~ {this.props.screenProps.result.salinity + ' ppm'}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['depth']}
              </div>
              <div className="right">
                ~ {this.props.screenProps.result.water_depth + ' m'}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['type']}
              </div>
              <div className="right">
                {this.context.strings[this.props.screenProps.result.water_type]}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default QuickScanResult
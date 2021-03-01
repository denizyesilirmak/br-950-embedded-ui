import React from 'react'
import './AutomaticScan.css'
import socketHelper from '../../../SocketHelper'
import { DeviceContext } from '../../../Contexts/DeviceContext'
import AutomaticScanIcon from '../../../Assets/grounds/automaticscan.png'
import AutomaticScanPrepare from '../../../Assets/videos/auto-scan-intro.mp4'

class AutomaticScan extends React.Component {
  static contextType = DeviceContext
  componentDidMount() {
    socketHelper.attach(this.socketHandler)

  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  socketHandler = (sd) => {
    if (sd.type !== 'button') { return }
    switch (sd.payload) {
      case 'back':
        this.props.navigateTo('menuScreen')
        return;
      case 'ok':
        this.props.navigateTo('automaticScanActionScreen')
        return;

      default:
        break;
    }
  }


  render() {
    return (
      <div className="automatic-scan component">
        <div className="automatic-scan-container">
          <div className="automatic-scan-video-container">
            {/* <img alt="as" src={AutomaticScanIcon} /> */}
            <video
              src={AutomaticScanPrepare}
              autoPlay
              muted
            />
          </div>

          <div className="automatic-scan-start-button">
            {this.context.strings['press_ok_to_start']}
          </div>
        </div>
      </div>
    )
  }
}

export default AutomaticScan
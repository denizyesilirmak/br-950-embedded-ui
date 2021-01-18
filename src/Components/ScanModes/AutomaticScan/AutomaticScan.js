import React from 'react'
import './AutomaticScan.css'
import socketHelper from '../../../SocketHelper'

class AutomaticScan extends React.Component {

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
            #automatic-scan-video-container
          </div>

          <div className="automatic-scan-start-button">
            Press OK to start scan
          </div>
        </div>
      </div>
    )
  }
}

export default AutomaticScan
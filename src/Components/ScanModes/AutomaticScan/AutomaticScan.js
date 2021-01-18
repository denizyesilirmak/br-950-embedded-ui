import React from 'react'
import './AutomaticScan.css'
import socketHelper from '../../../SocketHelper'

class AutomaticScan extends React.Component {

  componentDidMount() {
    socketHelper.attach(this.socketHandler)
    
    //FIXME: update timespamps with exact ones.
    this.interval = setInterval(() => {
      switch (Math.trunc(this.scanVideoRef.current.currentTime)) {
        case 3:
          socketHelper.send('A')
          break
        case 6:
          socketHelper.send('B')
          break
        case 9:
          socketHelper.send('C')
          break
        case 11:
          socketHelper.send('D')
          break
        case 14:
          socketHelper.send('E')
          break
        case 17:
          socketHelper.send('F')
          break
        case 18:
          socketHelper.send('Z')
          clearInterval(this.interval)
          break
        default:
          break;
      }
    }, 500);
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
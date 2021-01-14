import React from 'react'
import './AdvancedScanAction.css'
import ScanVideo from '../../../Assets/videos/scan.mp4'
import socketHelper from '../../../SocketHelper'


class AdvancedScanAction extends React.Component {
  constructor(props) {
    super(props)
    this.scanVideoRef = React.createRef()
    this.scanData = {
      A: null,
      B: null,
      C: null,
      D: null,
      E: null,
      F: null
    }

  }
  onVideoEnded = () => {
    // console.log('video ended')
    clearInterval(this.interval)
    this.props.navigateTo('scanViewerAdvancedScreen', { test: 'test' })
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)

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

  handleSocket = (socketData) => {
    if (socketData.type !== 'scan')
      return

    switch (socketData.probe) {
      case 'A':
        this.scanData.A = parseInt(socketData.value)
        console.log(this.scanData)
        break;
      case 'B':
        this.scanData.B = parseInt(socketData.value)
        console.log(this.scanData)
        break;
      case 'C':
        this.scanData.C = parseInt(socketData.value)
        console.log(this.scanData)
        break;
      case 'D':
        this.scanData.D = parseInt(socketData.value)
        console.log(this.scanData)
        break;
      case 'E':
        this.scanData.E = parseInt(socketData.value)
        console.log(this.scanData)
        break;
      case 'F':
        this.scanData.F = parseInt(socketData.value)
        console.log(this.scanData)
        break;

      default:
        break;
    }
  }


  render() {
    return (
      <div className="advanced-scan-action">
        <video src={ScanVideo} autoPlay muted onEnded={this.onVideoEnded} ref={this.scanVideoRef} />
      </div>
    )
  }
}

export default AdvancedScanAction
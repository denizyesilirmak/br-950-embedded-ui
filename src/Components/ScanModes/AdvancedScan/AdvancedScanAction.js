import React from 'react'
import './AdvancedScanAction.css'
import ScanVideo from '../../../Assets/videos/out/advancescan.mp4'
import socketHelper from '../../../SocketHelper'
import Api from '../../../Api.json'
import { DeviceContext } from '../../../Contexts/DeviceContext'


class AdvancedScanAction extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    this.scanVideoRef = React.createRef()

    this.state = {
      currentLine: null
    }

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
    this.saveScan()

  }

  saveScan = () => {
    fetch(Api.url + '/savescan', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "data": this.scanData, "type": "advanced" })
    }).then(res => res.json())
      .then(data => {
        this.props.navigateTo('scanViewerAdvancedScreen', {value: this.scanData})
      })
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)

    //FIXME: update timespamps with exact ones.
    this.interval = setInterval(() => {
      console.log(Math.trunc(this.scanVideoRef.current.currentTime))
      switch (Math.trunc(this.scanVideoRef.current.currentTime)) {
        case 0:
          socketHelper.send('A')
          this.setState({ currentLine: 'a_line' })
          break
        case 3:
          socketHelper.send('B')
          this.setState({ currentLine: 'b_line' })
          break
        case 6:
          socketHelper.send('C')
          this.setState({ currentLine: 'c_line' })
          break
        case 8:
          socketHelper.send('D')
          this.setState({ currentLine: 'd_line' })
          break
        case 11:
          socketHelper.send('E')
          this.setState({ currentLine: 'e_line' })
          break
        case 13 :
          socketHelper.send('F')
          this.setState({ currentLine: 'f_line' })
          break
        case 15:
          socketHelper.send('Z')
          this.setState({ currentLine: null })
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
        <video src={ScanVideo} autoPlay muted onEnded={this.onVideoEnded} ref={this.scanVideoRef} style={{width: '480px', height: '480px'}} />
        <div className="automatic-scan-action-current-line" style={{ display: this.state.currentLine !== null ? 'flex' : 'none' }}>
          {this.context.strings[this.state.currentLine]}
        </div>
      </div>
    )
  }
}

export default AdvancedScanAction
import React from 'react'
import './QuickScanAction.css'
import socketHelper from '../../../SocketHelper'
import quickScanVideo from '../../../Assets/videos/qscan.mp4'
import Utils from '../../../Utils'
import { DeviceContext } from '../../../Contexts/DeviceContext'

class QuickScanAction extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)

    this.videoRef = React.createRef()

    this.result = {}

  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
    // this.props.screenProps.line
    this.interval = setInterval(() => {
      switch (Math.trunc(this.videoRef.current.currentTime)) {
        case 1:
          socketHelper.send(this.props.screenProps.line)
          break
        case 4:
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


  handleSocket = (sd) => {
    if (sd.type === 'scan') {
      this.result = sd
    }
  }

  onVideoEnded = () => {
    // console.log('video ended')
    socketHelper.send('Z')
    this.props.navigateTo('quickScanResultScreen', { line: this.result, result: Utils.getWaterInfo(this.result.value) })
  }


  render() {
    return (
      <div className="quick-scan-action component">
        <div className="quick-scan-video-container">
          <div className="quick-scan-line-name">{this.context.strings[(this.props.screenProps.line).toLowerCase() + '_line']}</div>
          <video ref={this.videoRef} src={quickScanVideo} autoPlay muted className="quick-scan-video" onEnded={this.onVideoEnded} />
        </div>
      </div>
    )
  }
}

export default QuickScanAction
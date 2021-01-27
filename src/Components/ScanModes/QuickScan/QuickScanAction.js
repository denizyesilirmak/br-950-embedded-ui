import React from 'react'
import './QuickScanAction.css'
import socketHelper from '../../../SocketHelper'
import quickScanVideo from '../../../Assets/videos/qscan.mp4'
import Utils from '../../../Utils'

class QuickScanAction extends React.Component {
  constructor(props) {
    super(props)
    this.result = {}
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
    this.interval = setTimeout(() => {
      socketHelper.send(this.props.screenProps.line)
      clearInterval(this.interval)
    }, 1500);
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
          <video src={quickScanVideo} autoPlay muted className="quick-scan-video" onEnded={this.onVideoEnded} />
        </div>
      </div>
    )
  }
}

export default QuickScanAction
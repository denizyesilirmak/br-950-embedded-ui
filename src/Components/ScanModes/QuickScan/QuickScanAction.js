import React from 'react'
import './QuickScanAction.css'
import socketHelper from '../../../SocketHelper'
import quickScanVideo from '../../../Assets/videos/manual_scan_video.mp4'

class QuickScanAction extends React.Component {

  componentDidMount() {
    socketHelper.attach((a) => console.log())
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  onVideoEnded = () => {
    console.log('video ended')
    this.props.navigateTo('quickScanResultScreen')
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
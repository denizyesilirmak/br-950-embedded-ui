import React from 'react'
import './AdvancedScanAction.css'

import ScanVideo from '../../../Assets/videos/automatic-scan-video.mp4'


class AdvancedScanAction extends React.Component {
  onVideoEnded = () => {
    // console.log('video ended')
    this.props.navigateTo('scanViewerAdvancedScreen', { test: 'test' })
  }


  render() {
    return (
      <div className="advanced-scan-action">
        <video src={ScanVideo} autoPlay muted onEnded={this.onVideoEnded} />
      </div>
    )
  }
}

export default AdvancedScanAction
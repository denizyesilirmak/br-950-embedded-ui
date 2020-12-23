import React from 'react'
import './AutomaticScanAction.css'
import socketHelper from '../../../SocketHelper'
import automaticScanVideo from '../../../Assets/videos/automatic-scan-video.mp4'

class AutomaticScanAction extends React.Component {
  componentDidMount() {
    socketHelper.attach((a) => console.log())
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  onVideoEnded = () => {
    // console.log('video ended')
    this.props.navigateTo('menuScreen', { test: 'test' })
  }

  render() {
    return (
      <div className="automatic-scan-action component">
        <div className="automatic-scan-video-container">
          <video src={automaticScanVideo} autoPlay muted className="automatic-scan-video" onEnded={this.onVideoEnded} />
        </div>
      </div>
    )
  }
}

export default AutomaticScanAction
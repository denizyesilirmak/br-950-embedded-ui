import React from 'react'
import './AdvancedScanAction.css'

import ScanVideo from '../../../Assets/videos/scan.mp4'


class AdvancedScanAction extends React.Component {
  constructor(props) {
    super(props)
    this.scanVideoRef = React.createRef()

  }
  onVideoEnded = () => {
    // console.log('video ended')
    clearInterval(this.interval)
    this.props.navigateTo('scanViewerAdvancedScreen', { test: 'test' })
  }

  componentDidMount() {
    //FIXME: update timespamps with exact ones.
    this.interval = setInterval(() => {
      switch (Math.trunc(this.scanVideoRef.current.currentTime)) {
        case 3:
          console.log('A')
          break
        case 6:
          console.log('B')
          break
        case 9:
          console.log('C')
          break
        case 12:
          console.log('D')
          break
        case 15:
          console.log('E')
          break
        case 18:
          console.log('F')
          break
        case 21:
          console.log('Z')
          clearInterval(this.interval)
          break
        default:
          break;
      }
    }, 1000);
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
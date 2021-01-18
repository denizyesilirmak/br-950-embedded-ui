import React from 'react'
import './AutomaticScanAction.css'
import socketHelper from '../../../SocketHelper'
import ScanVideo from '../../../Assets/videos/scan.mp4'

class AutomaticScanAction extends React.Component {
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
  componentDidMount() {
    socketHelper.attach((a) => console.log())
        
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

  saveScan = () => {
    fetch('http://localhost:9090/savescan', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "data": this.scanData, "type": "automatic" })
    }).then(res => res.json())
      .then(data => {
        this.props.navigateTo('scanViewerAutomaticScreen', this.scanData)
      })
  }


  onVideoEnded = () => {
    // console.log('video ended')
    clearInterval(this.interval)
    this.saveScan()

  }

  render() {
    return (
      <div className="automatic-scan-action">
        <video src={ScanVideo} autoPlay muted onEnded={this.onVideoEnded} ref={this.scanVideoRef} />
      </div>
    )
  }
}

export default AutomaticScanAction
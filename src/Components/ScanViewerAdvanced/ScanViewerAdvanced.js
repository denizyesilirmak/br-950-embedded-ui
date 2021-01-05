import React from 'react'
import './ScanViewerAdvanced.css'
import Plot from '../ScanViewerAutomatic/ScanViewerComponents/PlotViewer'
import SocketHelper from '../../SocketHelper'

class ScanViewerAdvanced extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rotation_axis_x: 0,
      rotation_axis_z: 0
    }
  }

  componentDidMount() {
    SocketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    SocketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }

    switch (sd.payload) {
      case 'left':

        break;
      case 'right':

        break;
      case 'up':

        break;
      case 'down':

        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="scan-viewer-advanced component">
        <Plot rotX={this.state.rotation_axis_x} rotZ={this.state.rotation_axis_z} />
      </div>
    )
  }
}

export default ScanViewerAdvanced
import React from 'react'
import './ScanViewerAdvanced.css'
import Plot from '../ScanViewerAutomatic/ScanViewerComponents/PlotViewer'
import SocketHelper from '../../SocketHelper'
import { DeviceContext } from '../../Contexts/DeviceContext'

class ScanViewerAdvanced extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    this.state = {
      rotation_axis_x: 0,
      rotation_axis_z: 0
    }
  }

  componentDidMount() {
    SocketHelper.attach(this.handleSocket)
    this.context.showSnackBar('You can see more scan details by pressing OK button', 3000)
  }

  componentWillUnmount() {
    SocketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }

    switch (sd.payload) {
      case 'left':
        this.setState({
          rotation_axis_z: this.state.rotation_axis_z + 0.314159 * 1
        })
        break;
      case 'right':
        this.setState({
          rotation_axis_z: this.state.rotation_axis_z - 0.314159 * 1
        })
        break;
      case 'up':
        this.setState({
          rotation_axis_x: this.state.rotation_axis_x - 0.314159 * 1
        })
        break;
      case 'down':
        this.setState({
          rotation_axis_x: this.state.rotation_axis_x + 0.314159 * 1
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="scan-viewer-advanced component">
        <Plot rotX={this.state.rotation_axis_x} rotZ={this.state.rotation_axis_z} />


        <div className="advanced-scan-lines-details">
          <div className="line-detail">
            <div className="line-name-ad">A</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh Water</div>
          </div>

          <div className="line-detail">
            <div className="line-name-ad">B</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className="line-detail">
            <div className="line-name-ad">C</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className="line-detail">
            <div className="line-name-ad">D</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className="line-detail">
            <div className="line-name-ad">E</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className="line-detail">
            <div className="line-name-ad">F</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>
        </div>

      </div>
    )
  }
}

export default ScanViewerAdvanced
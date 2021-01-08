import React from 'react'
import './ScanViewerAdvanced.css'
import Plot from '../ScanViewerAutomatic/ScanViewerComponents/PlotViewer'
import SocketHelper from '../../SocketHelper'
import ScanLineDetail from './ScanLineDetail'
import Utils from '../../Utils'

import { DeviceContext } from '../../Contexts/DeviceContext'

class ScanViewerAdvanced extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    this.state = {
      rotation_axis_x: 0,
      rotation_axis_z: 0,
      lineMode: 0,
      selectedLineIndex: 0
    }
  }

  componentDidMount() {
    SocketHelper.attach(this.handleSocket)
    // this.context.showSnackBar('You can see more scan details by pressing OK button', 2000)
  }

  componentWillUnmount() {
    SocketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }

    switch (sd.payload) {
      case 'ok':
        this.setState({
          lineMode: Utils.clamp(this.state.lineMode + 1, 0, 2)
        })
        break
      case 'left':
        if (this.state.lineMode === 0) {
          this.setState({
            rotation_axis_z: this.state.rotation_axis_z + 0.314159 * 1
          })
        }
        else {

        }
        break;
      case 'right':
        if (this.state.lineMode === 0) {
          this.setState({
            rotation_axis_z: this.state.rotation_axis_z - 0.314159 * 1
          })
        }
        else {

        }
        break;
      case 'up':
        if (this.state.lineMode === 0) {
          this.setState({
            rotation_axis_x: this.state.rotation_axis_x - 0.314159 * 1
          })
        }
        else {
          this.setState({
            selectedLineIndex: Utils.clamp(this.state.selectedLineIndex - 1, 0, 5)
          })
        }
        break;
      case 'down':
        if (this.state.lineMode === 0) {
          this.setState({
            rotation_axis_x: this.state.rotation_axis_x + 0.314159 * 1
          })
        }
        else {
          this.setState({
            selectedLineIndex: Utils.clamp(this.state.selectedLineIndex + 1, 0, 5)
          })
        }
        break
      case 'back':
        if (this.state.lineMode === 0) {
          this.props.navigateTo('filesScreen')
        } else {
          this.setState({
            lineMode: Utils.clamp(this.state.lineMode - 1, 0, 2)
          })
        }
        return;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="scan-viewer-advanced component">
        <Plot rotX={this.state.rotation_axis_x} rotZ={this.state.rotation_axis_z} />

        <ScanLineDetail active={this.state.lineMode === 2} />

        <div className="advanced-scan-lines-details">
          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 0 ? 'selected' : ''}`}>
            <div className="line-name-ad">A</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh Water</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 1 ? 'selected' : ''}`}>
            <div className="line-name-ad">B</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 2 ? 'selected' : ''}`}>
            <div className="line-name-ad">C</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 3 ? 'selected' : ''}`}>
            <div className="line-name-ad">D</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 4 ? 'selected' : ''}`}>
            <div className="line-name-ad">E</div>
            <div className="line-rate">25%</div>
            <div className="line-type">Fresh</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 5 ? 'selected' : ''}`}>
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
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
      selectedLineIndex: 0,
      results: this.calculateWaterInfo()

    }

    if (Object.keys(this.props.screenProps).length !== 0) {
      const results = {}
      Object.keys(this.props.screenProps).forEach((e, i) => {
        results[e] = Utils.getWaterInfo(this.props.screenProps[e])
      })
      this.setState({ results: results })

    }
    else {
      console.log('No scan data to open')
    }
  }

  componentDidMount() {
    SocketHelper.attach(this.handleSocket)
    Utils.getWaterInfo(260, 21)
    // this.context.showSnackBar('You can see more scan details by pressing OK button', 2000)
  }

  componentWillUnmount() {
    SocketHelper.detach()
  }

  calculateWaterInfo = () => {
    if (Object.keys(this.props.screenProps).length !== 0) {
      const results = {}
      Object.keys(this.props.screenProps).forEach((e, i) => {
        results[e] = Utils.getWaterInfo(this.props.screenProps[e])
      })
      return results
    }
    else {
      console.log('No scan data to open')
      return {}
    }
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
        <Plot rotX={this.state.rotation_axis_x} rotZ={this.state.rotation_axis_z} plotData = {this.props.screenProps}/>

        <ScanLineDetail active={this.state.lineMode === 2} />

        <div className="advanced-scan-lines-details">
          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 0 ? 'selected' : ''}`}>
            <div className="line-name-ad">A</div>
            <div className="line-rate">{this.state.results.A.rate}%</div>
            <div className="line-type">{this.state.results.A.water_type}</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 1 ? 'selected' : ''}`}>
            <div className="line-name-ad">B</div>
            <div className="line-rate">{this.state.results.B.rate}%</div>
            <div className="line-type">{this.state.results.B.water_type}</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 2 ? 'selected' : ''}`}>
            <div className="line-name-ad">C</div>
            <div className="line-rate">{this.state.results.C.rate}%</div>
            <div className="line-type">{this.state.results.C.water_type}</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 3 ? 'selected' : ''}`}>
            <div className="line-name-ad">D</div>
            <div className="line-rate">{this.state.results.D.rate}%</div>
            <div className="line-type">{this.state.results.D.water_type}</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 4 ? 'selected' : ''}`}>
            <div className="line-name-ad">E</div>
            <div className="line-rate">{this.state.results.E.rate}%</div>
            <div className="line-type">{this.state.results.E.water_type}</div>
          </div>

          <div className={`line-detail ${this.state.lineMode === 1 && this.state.selectedLineIndex === 5 ? 'selected' : ''}`}>
            <div className="line-name-ad">F</div>
            <div className="line-rate">{this.state.results.F.rate}%</div>
            <div className="line-type">{this.state.results.F.water_type}</div>
          </div>
        </div>

      </div>
    )
  }
}

export default ScanViewerAdvanced
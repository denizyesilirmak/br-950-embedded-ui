import React from 'react'
import './ScanViewer.css'
import socketHelper from '../../SocketHelper'
import { DeviceContext } from '../../Contexts/DeviceContext'

import ScanTitle from './ScanViewerComponents/Title'
import ScanLinesInfos from './ScanViewerComponents/ScanLinesInfos'
// import PlotViewer from './ScanViewerComponents/PlotViewer'

import ScanViewerAnimation from './ScanViewerComponents/ScanVieverAnimation/ScanViewerAnimation'
import Utils from '../../Utils'

class ScanViewer extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    let scanResults = {}
    Object.keys(this.props.screenProps.value).forEach(e => {
      scanResults[e] = Utils.getWaterInfo(this.props.screenProps.value[e])
    })

    this.state = {
      screen: 'lineinfo',
      scanLineInfoIndex: 0,
      scanLineResults: scanResults
    }

  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)

  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  renderScreen = () => {
    switch (this.state.screen) {
      case 'lineinfo':
        return (
          <ScanLinesInfos
            index={this.state.scanLineInfoIndex}
            values={this.props.screenProps}
            results={this.state.scanLineResults}
          />
        )
      case 'animation':
        return (
          <ScanViewerAnimation result={this.state.scanLineResults[Object.keys(this.state.scanLineResults)[this.state.scanLineInfoIndex]]} /> //FIXME: Ugly
        )
      default:
        break;
    }
  }

  changeScreen = (screenName) => {
    this.setState({
      screen: screenName
    })
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }
    switch (sd.payload) {
      case 'up':
        if (this.state.screen === 'lineinfo')
          this.setState({
            scanLineInfoIndex: Utils.clamp(this.state.scanLineInfoIndex - 2, 0, 5)
          })
        break;
      case 'down':
        if (this.state.screen === 'lineinfo')
          this.setState({
            scanLineInfoIndex: Utils.clamp(this.state.scanLineInfoIndex + 2, 0, 5)
          })
        break;
      case 'left':
        if (this.state.screen === 'lineinfo')
          this.setState({
            scanLineInfoIndex: Utils.clamp(this.state.scanLineInfoIndex - 1, 0, 5)
          })
        break;
      case 'right':
        if (this.state.screen === 'lineinfo')
          this.setState({
            scanLineInfoIndex: Utils.clamp(this.state.scanLineInfoIndex + 1, 0, 5)
          })
        break;
      case 'ok':
        if (this.state.screen === 'lineinfo')
          this.changeScreen('animation')
        else
          this.changeScreen('lineinfo')
        break;
      case 'back':
        if (this.state.screen === 'animation') {
          this.changeScreen('lineinfo')
        } else {
          this.props.navigateTo('filesScreen')
          return;
        }
        return
      default:
        break;
    }
  }

  render() {
    return (
      <div className="scan-viewer component">
        <ScanTitle
          type="automatic"
          date={this.props.screenProps.date}
        />

        {
          this.renderScreen()
        }

        {/* <div className="scan-3d-container">
          <div className="left-panel">

            <div className="line-info">
              <div className="line-name">
                A-
              </div>
              <div className="line-info-water-type">
                Mineral Water
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                B-
              </div>
              <div className="line-info-water-type">
                No Water
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                C-
              </div>
              <div className="line-info-water-type">
                No Water
              </div>
            </div>


          </div>

          <PlotViewer rotX={this.state.rotation_axis_x} rotZ={this.state.rotation_axis_z} />

          <div className="right-panel">

            <div className="line-info">
              <div className="line-name">
                -D
              </div>
              <div className="line-info-water-type">
                Mineral Water
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                -E
              </div>
              <div className="line-info-water-type">
                Mineral Water
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                -F
              </div>
              <div className="line-info-water-type">
                Mineral Water
              </div>
            </div>

          </div>

        </div> */}
      </div>
    )
  }
}

export default ScanViewer
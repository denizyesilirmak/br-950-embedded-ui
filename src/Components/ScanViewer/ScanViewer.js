import React from 'react'
import './ScanViewer.css'
import socketHelper from '../../SocketHelper'

import ScanTitle from './ScanViewerComponents/Title'
// import ScanLinesInfos from './ScanViewerComponents/ScanLinesInfos'
import PlotViewer from './ScanViewerComponents/PlotViewer'

class ScanViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rotation_axis_x: 0,
      rotation_axis_z: 0
    }
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }
    switch (sd.payload) {
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
      case 'ok':

        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        return;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="scan-viewer component">
        <ScanTitle
          type="advanced"
          date="16:45 12.02.2020"
        />
        {/* <ScanLinesInfos
          data={
            {
              values: {
                A: 1024, B: 1024, C: 1024, D: 1024, E: 1024, F: 1025
              }
            }
          }
        /> */}
        <div className="scan-3d-container">
          <div className="left-panel">

            <div className="line-info">
              <div className="line-name">
                A
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                A
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                A
              </div>
            </div>


          </div>
          <PlotViewer rotX={this.state.rotation_axis_x} rotZ={this.state.rotation_axis_z} />
          <div className="right-panel">

            <div className="line-info">
              <div className="line-name">
                A
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                A
              </div>
            </div>

            <div className="line-info">
              <div className="line-name">
                A
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default ScanViewer
import React from 'react'
import './QuickScanResult.css'
import socketHelper from '../../../SocketHelper'
import { DeviceContext } from '../../../Contexts/DeviceContext'

class QuickScanResult extends React.Component {
  static contextType = DeviceContext
  // constructor(props) {
  //   super(props)

  // }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)

  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  handleSocket = (socketData) => {
    if (socketData.type !== 'button') {
      return
    }

    switch (socketData.payload) {
      case 'up':
        break;
      case 'down':
        break;
      case 'left':
        break;
      case 'right':
        break;
      case 'ok':
        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        return
      default:
        return
    }
  }

  render() {
    return (
      <div className="quick-scan-result component">
        <div className="quick-scan-container">
          <div className="quick-scan-result-video-container">
            {this.props.screenProps.line.probe}
          </div>

          <div className="quick-scan-result-table">

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['value']}
              </div>
              <div className="right">
                {this.props.screenProps.line.value}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['salinity']}
              </div>
              <div className="right">
                {this.props.screenProps.result.salinity + ' ppm'}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['depth']}
              </div>
              <div className="right">
                {this.props.screenProps.result.water_depth + ' m'}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                {this.context.strings['type']}
              </div>
              <div className="right">
                {this.context.strings[this.props.screenProps.result.water_type]}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default QuickScanResult
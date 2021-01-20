import React from 'react'
import './QuickScanResult.css'
import socketHelper from '../../../SocketHelper'

class QuickScanResult extends React.Component {
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
                Value
              </div>
              <div className="right">
                {this.props.screenProps.line.value}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                Salinity
              </div>
              <div className="right">
                {this.props.screenProps.result.salinity}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                Depth
              </div>
              <div className="right">
              {this.props.screenProps.result.water_depth}
              </div>
            </div>

            <div className="quick-scan-result-row">
              <div className="left">
                Type
              </div>
              <div className="right">
              {this.props.screenProps.result.water_type}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default QuickScanResult
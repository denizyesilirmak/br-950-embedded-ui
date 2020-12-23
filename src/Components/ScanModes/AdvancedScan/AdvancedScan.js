import React from 'react'
import './AdvancedScan.css'
import NextIcon from '../../../Assets/icons/next.png'
import socketHelper from '../../../SocketHelper'

import SignalFrequency from './SubSteps/SignalFrequency'

class AdvancedScan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stepIndex: 0
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
  }

  renderSubMenu = () => {
    switch (this.state.stepIndex) {
      case 0: return <SignalFrequency />
      default:
        break;
    }
  }

  render() {
    return (
      <div className="advanced-scan component">
        <div className="advanced-scan-container">
          <div className="step-title">
            Signal Frequency
          </div>
          <div className="step-description">
            Please select AC current frequency
          </div>

          <div className="next-sub-menu">
            <img src={NextIcon} alt="next-icon" className="next-icon"></img>
            <span>Press OK to next menu</span>
          </div>

          <div className="advanced-scan-sub-menu-container">
            {
              this.renderSubMenu()
            }
          </div>

        </div>
      </div>
    )
  }
}

export default AdvancedScan
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
    switch (sd.payload) {
      case 'back': 
        this.props.navigateTo('menuScreen')
        return

    
      default:
        break;
    }
  }

  renderSubMenu = () => {
    switch (this.state.stepIndex) {
      case 0: return <SignalFrequency pathString={this.generatePathNodes(30)} />
      default:
        break;
    }
  }

  generatePathNodes = (width = 10) => {
    let s = 'M 0 70 '
    for (let i = 0; i < 10; i++) {
      s += `Q ${(width) + (i * (width * 2))} ${i % 2 === 0 ? 0 : 140} ${(width * 2) + (i * (width * 2))} 70 `
    }
    return `path("${s}")`
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
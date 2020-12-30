import React from 'react'
import './AdvancedScan.css'
import NextIcon from '../../../Assets/icons/next.png'
import socketHelper from '../../../SocketHelper'

import SignalFrequency from './SubSteps/SignalFrequency'
import DirtType from './SubSteps/DirtType'
import Sensitivity from './SubSteps/Sensitivity'
import ProbeDistance from './SubSteps/ProbeDistance'

import utils from '../../../Utils'

const AdvancedScanTitles = [
  {
    title: "signal_frequency",
    description: "Please select AC current frequency"
  },
  {
    title: "dirt-type",
    description: "Please select dirt type"
  },
  {
    title: "sensitivity",
    description: "Please select AC Current Frequency"
  },
  {
    title: "probe-distance",
    description: "Please select AC Current Frequency"
  }
]

class AdvancedScan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stepIndex: 3,
      signalFrequency: 50,
      dirtTypeIndex: 0,
      sensitivity: 0
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
        if (this.state.stepIndex === 0)
          this.props.navigateTo('menuScreen')
        else {
          this.setState({
            stepIndex: this.state.stepIndex - 1
          })
        }
        return
      case 'left':
        if (this.state.stepIndex === 0) {
          this.setState({
            signalFrequency: utils.clamp(this.state.signalFrequency - 10, 30, 150)
          })
        }
        break

      case 'right':
        if (this.state.stepIndex === 0) {
          this.setState({
            signalFrequency: utils.clamp(this.state.signalFrequency + 10, 30, 150)
          })
        }
        break
      case 'ok':
        if (this.state.stepIndex >= 0 && this.state.stepIndex < AdvancedScanTitles.length - 1)
          this.setState({
            stepIndex: this.state.stepIndex + 1
          })
        break


      default:
        break;
    }
  }

  renderSubMenu = () => {
    switch (this.state.stepIndex) {
      case 0: return <SignalFrequency frequency={this.state.signalFrequency} pathString={this.generatePathNodes(this.state.signalFrequency)} />
      case 1: return <DirtType />
      case 2: return <Sensitivity />
      case 3: return <ProbeDistance />
      default:
        break;
    }
  }

  generatePathNodes = (width = 10) => {
    width = (160 - width)
    let s = 'M 0 70 '
    for (let i = 0; i < 50; i++) {
      s += `Q ${(width) + (i * (width * 2))} ${i % 2 === 0 ? 0 : 140} ${(width * 2) + (i * (width * 2))} 70 `
    }
    return `path("${s}")`
  }

  render() {
    return (
      <div className="advanced-scan component">
        <div className="advanced-scan-container">
          <div className="step-title">
            {AdvancedScanTitles[this.state.stepIndex].title}
          </div>
          <div className="step-description">
            {AdvancedScanTitles[this.state.stepIndex].description}
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
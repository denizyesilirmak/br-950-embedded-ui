import React from 'react'
import './AdvancedScan.css'
import NextIcon from '../../../Assets/icons/next.png'
import socketHelper from '../../../SocketHelper'
import dbStorage from '../../../DatabaseHelper'
import { DeviceContext } from '../../../Contexts/DeviceContext'

import SignalFrequency from './SubSteps/SignalFrequency'
import DirtType from './SubSteps/DirtType'
import Sensitivity from './SubSteps/Sensitivity'
import ProbeDistance from './SubSteps/ProbeDistance'
import Summary from './SubSteps/Summary'

import utils from '../../../Utils'

const FREQUENCY_MIN = 30
const FREQUENCY_MAX = 150
const DIRT_TYPE_INDEX_MIN = 0
const DIRT_TYPE_INDEX_MAX = 5
const SENSITIVITY_MIN = 0
const SENSITIVITY_MAX = 100
const PROBE_DISTANCE_MIN = 5
const PROBE_DISTANCE_MAX = 50

const AdvancedScanTitles = [
  {
    title: "signal_frequency",
    description: "frequency_dis"
  },
  {
    title: "dirt_type",
    description: "dirt_type_dis"
  },
  {
    title: "sensitivity",
    description: "sensitivity_dis"
  },
  {
    title: "probe_distance",
    description: "probe_distance_dis"
  },
  {
    title: "scan_summary",
    description: ""
  }
]

class AdvancedScan extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    this.state = {
      stepIndex: 0,
      signalFrequency: 50,
      dirtTypeIndex: 0,
      sensitivity: 0,
      probeDistance: 10
    }
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
    this.getLastState()


  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  getLastState = () => {
    dbStorage.getAll()
    .then(lastState => {
      this.setState({
        signalFrequency: lastState.frequency || 50,
        dirtTypeIndex: lastState.dirtTypeIndex || 0,
        sensitivity: lastState.sensitivity || 0 ,
        probeDistance: lastState.probeDistance || 10
      })
    })
  }

  handleSocket = async (sd) => {
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
            signalFrequency: utils.clamp(this.state.signalFrequency - 10, FREQUENCY_MIN, FREQUENCY_MAX)
          })
        }
        else if (this.state.stepIndex === 1) {
          this.setState({
            dirtTypeIndex: utils.clamp(this.state.dirtTypeIndex - 1, DIRT_TYPE_INDEX_MIN, DIRT_TYPE_INDEX_MAX)
          })
        }
        else if (this.state.stepIndex === 2) {
          this.setState({
            sensitivity: utils.clamp(this.state.sensitivity - 5, SENSITIVITY_MIN, SENSITIVITY_MAX)
          })
        }
        else if (this.state.stepIndex === 3) {
          this.setState({
            probeDistance: utils.clamp(this.state.probeDistance - 5, PROBE_DISTANCE_MIN, PROBE_DISTANCE_MAX)
          })
        }
        break
      case 'right':
        if (this.state.stepIndex === 0) {
          this.setState({
            signalFrequency: utils.clamp(this.state.signalFrequency + 10, FREQUENCY_MIN, FREQUENCY_MAX)
          })
        }
        else if (this.state.stepIndex === 1) {
          this.setState({
            dirtTypeIndex: utils.clamp(this.state.dirtTypeIndex + 1, DIRT_TYPE_INDEX_MIN, DIRT_TYPE_INDEX_MAX)
          })
        }
        else if (this.state.stepIndex === 2) {
          this.setState({
            sensitivity: utils.clamp(this.state.sensitivity + 5, SENSITIVITY_MIN, SENSITIVITY_MAX)
          })
        }
        else if (this.state.stepIndex === 3) {
          this.setState({
            probeDistance: utils.clamp(this.state.probeDistance + 5, PROBE_DISTANCE_MIN, PROBE_DISTANCE_MAX)
          })
        }
        break
      case 'ok':
        if (this.state.stepIndex >= 0 && this.state.stepIndex < AdvancedScanTitles.length - 1)
          this.setState({
            stepIndex: this.state.stepIndex + 1
          })
        else if (this.state.stepIndex === 4) {
          await dbStorage.setItem('frequency', this.state.signalFrequency)
          await dbStorage.setItem('dirtTypeIndex', this.state.dirtTypeIndex)
          await dbStorage.setItem('sensitivity', this.state.sensitivity)
          await dbStorage.setItem('distance', this.state.probeDistance)
          this.props.navigateTo('advancedScanActionScreen')
          return
        }

        break


      default:
        break;
    }
  }

  renderSubMenu = () => {
    switch (this.state.stepIndex) {
      case 0: return <SignalFrequency frequency={this.state.signalFrequency} pathString={this.generatePathNodes(this.state.signalFrequency)} />
      case 1: return <DirtType dirtTypeIndex={this.state.dirtTypeIndex} />
      case 2: return <Sensitivity sensitivity={this.state.sensitivity} />
      case 3: return <ProbeDistance distance={this.state.probeDistance} />
      case 4: return <Summary
        frequency={this.state.signalFrequency}
        dirtTypeIndex={this.state.dirtTypeIndex}
        sensitivity={this.state.sensitivity}
        probeDistance={this.state.probeDistance}
      />
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
    return `${s}`
  }

  render() {
    return (
      <div className="advanced-scan component">
        <div className="advanced-scan-container">
          <div className="step-title">
            {this.context.strings[AdvancedScanTitles[this.state.stepIndex].title]}
          </div>
          <div className="step-description">
            {this.context.strings[AdvancedScanTitles[this.state.stepIndex].description]}
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
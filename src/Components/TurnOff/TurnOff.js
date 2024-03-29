import React from 'react'
import './TurnOff.css'
import socketHelper from '../../SocketHelper'
import { DeviceContext } from '../../Contexts/DeviceContext'

class TurnOff extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
    this.calibrationCounter = 0

    this.state = {
      selectedButtonIndex: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('test')
      this.containerRef.current.style.transform = 'scale(1)'
      this.containerRef.current.style.opacity = 1
    }, 100);
    socketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }
    switch (sd.payload) {
      case 'left':
        this.setState({
          selectedButtonIndex: !this.state.selectedButtonIndex
        })
        break;
      case 'right':
        this.setState({
          selectedButtonIndex: !this.state.selectedButtonIndex
        })
        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        return;
      case 'down':
        this.calibrationCounter++;
        if (this.calibrationCounter === 11) {
          this.props.navigateTo('calibrationScreen')
          return
        }
        break;
      case 'ok':
        if (this.state.selectedButtonIndex) {
          //turnoffdevice
          this.props.navigateTo('turnOffActionScreen')
          return
        }
        else {
          //go to main menu
          this.props.navigateTo('menuScreen')
        }
        return
      default:
        break;
    }
  }

  render() {
    return (
      <div className="turn-off component">
        <div className="turn-off-container" ref={this.containerRef}>
          <div className="turn-off-question">
            {this.context.strings['turn_off_question']}
          </div>

          <div className="turn-off-answers">
            <div className={`turn-off-button ${this.state.selectedButtonIndex ? 'selected' : ''}`}>
              {this.context.strings['yes']}
            </div>
            <div className={`turn-off-button ${!this.state.selectedButtonIndex ? 'selected' : ''}`}>
              {this.context.strings['no']}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TurnOff
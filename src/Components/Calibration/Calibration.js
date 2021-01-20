import React from 'react'
import './Calibration.css'
import socketHelper from '../../SocketHelper'
import Utils from './../../Utils'


class Calibration extends React.Component {
  constructor(props) {
    super(props)

    this.lines = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ]

    this.state = {
      A: 0,
      lastButton: 'button test',
      selectedLine: 'A',
      selectedLineIndex: 0
    }
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
    this.interval = setInterval(() => {
      socketHelper.send(this.lines[this.state.selectedLineIndex])
    }, 450);
  }

  componentWillUnmount() {
    clearInterval(this.interval)

    console.log('Z')
    socketHelper.send('Z')
    socketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type === 'scan') {
      this.setState({
        A: sd.value
      })
    }
    else if (sd.type === 'button') {
      this.setState({ lastButton: sd.payload })
      if (sd.payload === 'left') {
        this.setState({
          selectedLineIndex: Utils.clamp(this.state.selectedLineIndex - 1, 0, 5)
        })
      } else if (sd.payload === 'right') {
        this.setState({
          selectedLineIndex: Utils.clamp(this.state.selectedLineIndex + 1, 0, 5)
        })
      }else if(sd.payload === 'back'){
        this.props.navigateTo('turnOffScreen')
        return
      }
    }

  }

  render() {
    return (
      <div className="calibration component">
        <div className="calibration-value">
          {`${this.lines[this.state.selectedLineIndex]}: ${this.state.A}`}
        </div>

        <div className="calibration-button">
          {this.state.lastButton}
        </div>
      </div>
    )
  }
}

export default Calibration
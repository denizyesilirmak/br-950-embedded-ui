import React from 'react'
import './QuickScan.css'
import socketHelper from '../../../SocketHelper'
import { DeviceContext } from '../../../Contexts/DeviceContext'

class QuickScan extends React.Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    this.state = {
      selectedLineIndex: 0
    }

    this.lines = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ]
  }

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
        if (this.state.selectedLineIndex > 0) {
          this.setState({
            selectedLineIndex: this.state.selectedLineIndex - 1
          })
        }
        break;
      case 'down':
        if (this.state.selectedLineIndex < 5) {
          this.setState({
            selectedLineIndex: this.state.selectedLineIndex + 1
          })
        }
        break;
      case 'left':

        break;
      case 'right':

        break;
      case 'ok':
        this.props.navigateTo('quickScanActionScreen', { line: this.lines[this.state.selectedLineIndex] })
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
      <div className="quick-scan component">
        <div className="quick-scan-container">

          <div className="lines">
            {
              this.lines.map((e, i) => {
                return (
                  <div className={`line ${this.state.selectedLineIndex === i ? 'selected' : ''}`} key={i}>
                    {this.context.strings[`${e.toLocaleLowerCase()}_line`]}
                  </div>
                )
              })
            }


          </div>

          <div className="right-panel">
            <div className="quick-scan-bg-image">
              Line image holder
            </div>
            <div className="quick-scan-info">
              {this.context.strings.press_ok_to_start}
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default QuickScan
import React from 'react'
import './QuickScan.css'
import socketHelper from '../../../SocketHelper'
import { DeviceContext } from '../../../Contexts/DeviceContext'

import QuickScanLinesImage from '../../../Assets/grounds/quickscanlines.png'


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
              <svg className="line-overlay" width="400" height="240">
                <g>
                  <rect x="0" y="0" width="100%" height="100%" fillOpacity="0" />
                </g>
                <g>
                  <line className="quick-scan-line" stroke={this.state.selectedLineIndex === 0 ? '#ff0000' : '#ffffff'} strokeWidth="4" x1="110" x2="290" y1="60" y2="60" />
                  <line className="quick-scan-line" stroke={this.state.selectedLineIndex === 1 ? '#ff0000' : '#ffffff'} strokeWidth="4" x1="290" x2="328" y1="60" y2="130" />
                  <line className="quick-scan-line" stroke={this.state.selectedLineIndex === 2 ? '#ff0000' : '#ffffff'} strokeWidth="4" x1="71" x2="328" y1="130" y2="130" />
                  <line className="quick-scan-line" stroke={this.state.selectedLineIndex === 3 ? '#ff0000' : '#ffffff'} strokeWidth="4" x1="110" x2="71" y1="60" y2="130" />
                  <line className="quick-scan-line" stroke={this.state.selectedLineIndex === 4 ? '#ff0000' : '#ffffff'} strokeWidth="4" x1="290" x2="71" y1="60" y2="130" />
                  <line className="quick-scan-line" stroke={this.state.selectedLineIndex === 5 ? '#ff0000' : '#ffffff'} strokeWidth="4" x1="110" x2="328" y1="60" y2="130" />

                </g>
                <g>
                  <text fontSize="30" fill="#000000" x="100" y="50" fontWeight="bold">1</text>
                  <text fontSize="30" fill="#000000" x="283" y="50" fontWeight="bold">2</text>
                  <text fontSize="30" fill="#000000" x="320" y="110" fontWeight="bold">4</text>
                  <text fontSize="30" fill="#000000" x="60" y="110" fontWeight="bold">3</text>
                </g>
              </svg>
              <img src={QuickScanLinesImage} alt="qsli" />
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
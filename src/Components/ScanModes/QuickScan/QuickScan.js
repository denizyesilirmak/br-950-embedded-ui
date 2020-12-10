import React from 'react'
import './QuickScan.css'
import socketHelper from '../../../SocketHelper'

class QuickScan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLineIndex: 0
    }
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
        this.props.navigateTo('quickScanActionScreen')
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
            <div className={`line ${this.state.selectedLineIndex === 0 ? 'selected' : ''}`}>
              A Line
            </div>
            <div className={`line ${this.state.selectedLineIndex === 1 ? 'selected' : ''}`}>
              B Line
            </div>
            <div className={`line ${this.state.selectedLineIndex === 2 ? 'selected' : ''}`}>
              C Line
            </div>
            <div className={`line ${this.state.selectedLineIndex === 3 ? 'selected' : ''}`}>
              D Line
            </div>
            <div className={`line ${this.state.selectedLineIndex === 4 ? 'selected' : ''}`}>
              E Line
            </div>
            <div className={`line ${this.state.selectedLineIndex === 5 ? 'selected' : ''}`}>
              F Line
            </div>
          </div>

          <div className="right-panel">
            <div className="quick-scan-bg-image">
              Line image holder
            </div>
            <div className="quick-scan-info">
              Press OK to start scan
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default QuickScan
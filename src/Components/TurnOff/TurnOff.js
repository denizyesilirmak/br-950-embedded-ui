import React from 'react'
import './TurnOff.css'
import socketHelper from '../../SocketHelper'

class TurnOff extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()

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
          selectedButtonIndex: true
        })
        break;
      case 'right':
        this.setState({
          selectedButtonIndex: false
        })
        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        return;
      case 'ok': 
        if(this.state.selectedButtonIndex){
          //turnoffdevice
          this.props.navigateTo('turnOffActionScreen')
        }
        else{
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
            Do you really want to turn off the device?
          </div>

          <div className="turn-off-answers">
            <div className={`turn-off-button ${this.state.selectedButtonIndex ? 'selected' : ''}`}>
              Yes
            </div>
            <div className={`turn-off-button ${!this.state.selectedButtonIndex ? 'selected' : ''}`}>
              No
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TurnOff
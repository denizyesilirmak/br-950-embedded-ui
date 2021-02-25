import React from 'react'
import './Reset.css'
import socketHelper from '../../SocketHelper'
import Api from '../../Api.json'

import ClearMemoryIcon from '../../Assets/icons/reset-memory.png'

class ClearMemory extends React.Component {
  constructor(props) {
    super(props)
    this.progressBarRef = React.createRef()
    this.state = {
      cursor: false,
      reset: false
    }

  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  clearMemory = () => {
    fetch(Api.url + '/deleteAllFiles')
      .then(res => res.json())
      .then(data => {
        console.log('all files deleted', data)
      })
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') {
      return
    }
    switch (sd.payload) {
      case 'left':
        if (this.state.reset === false) {
          this.setState({
            cursor: !this.state.cursor
          })
        }

        break;
      case 'right':
        if (this.state.reset === false) {
          this.setState({
            cursor: !this.state.cursor
          })
        }

        break;
      case 'back':
        if (this.state.reset === false) {
          this.props.navigateTo('menuScreen')
          return
        }

        break;
      case 'ok':
        if (this.state.reset === false) {
          if (this.state.cursor) {
            //reset
            console.log('reset')
            this.setState({
              reset: true
            }, () => {
              this.clearMemory()
              setTimeout(() => {
                this.progressBarRef.current.style.width = "100%"
              }, 300);
              const timeout = setTimeout(() => {
                clearTimeout(timeout)
                this.props.navigateTo('menuScreen')
                return
              }, 5600);
            })

          }
          else {
            //abort
            console.log('cancel')
            this.props.navigateTo('settingsScreen')
            return
          }
        }

        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="resets component">


        <div className="reset-container">
          <div className="reset-title">Clear Memory</div>

          {
            this.state.reset === false ?
              <>
                <img src={ClearMemoryIcon} alt="icon" className="reset-icon" />
                <div className="reset-text">
                  Clearing memory will delete all your files. Are you sure to continiue?
                </div>
                <div className="reset-buttons">
                  <div className={`reset-button ${this.state.cursor ? 'selected' : ''}`}>
                    Yes
              </div>
                  <div className={`reset-button ${!this.state.cursor ? 'selected' : ''}`}>
                    No
              </div>
                </div>
              </>
              :
              <>
                <div className="reset-text">
                  Clearing memory please wait.
                </div>

                <div className="reset-progress-bar">
                  <div className="reset-progress-bar-value" ref={this.progressBarRef}>

                  </div>
                </div>
              </>

          }


        </div>



      </div>
    )
  }
}

export default ClearMemory
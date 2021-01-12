import React from 'react'
import './Mainmenu.css'
import socketHelper from '../../SocketHelper'

import QuicScanIcon from '../../Assets/icons/mainmenu/quickscan.png'
import ManualScanIcon from '../../Assets/icons/mainmenu/manualscan.png'
import AdvancedScanIcon from '../../Assets/icons/mainmenu/advancedscan.png'
import FilesIcon from '../../Assets/icons/mainmenu/files.png'
import SettingsIcon from '../../Assets/icons/mainmenu/settings.png'
import TurnOffIcon from '../../Assets/icons/mainmenu/turnoff.png'

import Dashboard from './Dashboard'

class Mainmenu extends React.Component {

  constructor(props) {
    super(props)

    this.menuContainer = React.createRef()
    this.menuItemRefs = []


    for (var i = 0; i < 6; i++) {
      this.menuItemRefs[i] = React.createRef()
    }
    this.animationCounter = 0

    this.state = {
      selectedButtonIndex: this.props.cursorIndex,
      key: 0
    }

    this.buttons = [
      {
        name: "Quick Scan",
        icon: QuicScanIcon,
        screenName: 'quickScanScreen',
        cssTag: 'a1'
      },
      {
        name: "Automatic Scan",
        icon: ManualScanIcon,
        screenName: 'automaticScanScreen',
        cssTag: 'a2'
      },
      {
        name: "Advanced Scan",
        icon: AdvancedScanIcon,
        screenName: 'advancedScanScreen',
        cssTag: 'a3'
      },
      {
        name: "Files",
        icon: FilesIcon,
        screenName: 'filesScreen',
        cssTag: 'a4'
      },
      {
        name: "Settings",
        icon: SettingsIcon,
        screenName: 'settingsScreen',
        cssTag: 'a5'
      },
      {
        name: "Turn Off",
        icon: TurnOffIcon,
        screenName: 'turnOffScreen',
        cssTag: 'a6'
      },

    ]
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)

  }

  componentWillUnmount() {
    // console.log('detach')
    socketHelper.detach()
  }

  clamp = (val, min, max) => {
    if (val < min) {
      return min
    }
    else if (val > max) {
      return max
    }
    else {
      return val
    }
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }

    let tempSelectedButtonIndex = this.state.selectedButtonIndex

    switch (sd.payload) {
      case 'up':
        tempSelectedButtonIndex = this.clamp(tempSelectedButtonIndex - 3, 0, 5)
        break;
      case 'down':
        tempSelectedButtonIndex = this.clamp(tempSelectedButtonIndex + 3, 0, 5)
        break;
      case 'left':
        tempSelectedButtonIndex = this.clamp(tempSelectedButtonIndex - 1, 0, 5)
        break;
      case 'right':
        tempSelectedButtonIndex = this.clamp(tempSelectedButtonIndex + 1, 0, 5)
        break;
      case 'ok':
        if (this.animationCounter === 0) {
          socketHelper.detach()
          this.props.setCursorIndex(this.state.selectedButtonIndex)
          this.props.navigateTo(this.buttons[this.state.selectedButtonIndex].screenName)
          return
        }
        this.setState({
          key: Math.random()
        }, () => {
          this.menuItemRefs.forEach(e => {
            e.current.style.animationDirection = 'reverse'
          })
        })
        return;
      default:
        break;
    }

    this.setState({
      selectedButtonIndex: tempSelectedButtonIndex
    })
  }

  handleAnimationEnd = (e) => {
    this.animationCounter++
    if (this.animationCounter === 2) {
      this.props.setCursorIndex(this.state.selectedButtonIndex)
      socketHelper.detach()
      this.props.navigateTo(this.buttons[this.state.selectedButtonIndex].screenName)
    }
  }


  render() {
    return (
      <div className="main-menu component">
        <div className="left">
          <Dashboard />
        </div>
        <div className="right">

          <div className="menu-container" ref={this.menuContainer}>
            {
              this.buttons.map((e, i) => {
                return (
                  <div onAnimationEnd={i === 5 ? this.handleAnimationEnd : null} ref={this.menuItemRefs[i]} className={`main-menu-item ${e.cssTag} ${this.state.selectedButtonIndex % 6 === i ? 'selected' : ''}`} key={i + this.state.key}>
                    <img src={e.icon} alt="main-menu-icon" className="main-menu-icon" />
                    <div className="main-menu-item-title">{e.name}</div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

export default Mainmenu
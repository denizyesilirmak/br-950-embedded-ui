import React from 'react'
import './Statusbar.css'

import WifiIcon from '../../Assets/icons/wifi.png'
import En_Flag from '../../Assets/flags/en.png'

import Battery from './Statusbar-Items/Battery'
import Clock from './Statusbar-Items/Clock'


class Statusbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      batteryLevel: 50
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="menu-title">
            {this.props.menuTitle}
          </div>
        </div>
        <div className="status-bar-right">
          <Clock />
          <img src={WifiIcon} alt="wifi-icon" className="wifi-icon" />
          <Battery level={this.state.batteryLevel} />
          <div className="flag">
            <img src={En_Flag} alt="flag" />
          </div>
        </div>
      </div>
    )
  }
}

export default Statusbar
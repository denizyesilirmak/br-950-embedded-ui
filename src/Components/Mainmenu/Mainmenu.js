import React from 'react'
import './Mainmenu.css'

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

    this.state = {
      selectedButtonIndex: 6 * 100
    }

    this.buttons = [
      {
        name: "Quick Scan",
        icon: QuicScanIcon
      },
      {
        name: "Manual Scan",
        icon: ManualScanIcon
      },
      {
        name: "Advanced Scan",
        icon: AdvancedScanIcon
      },
      {
        name: "Files",
        icon: FilesIcon
      },
      {
        name: "Settings",
        icon: SettingsIcon
      },
      {
        name: "Turn Off",
        icon: TurnOffIcon
      },

    ]
  }
  render() {
    return (
      <div className="main-menu component">
        <div className="left">
          <Dashboard />
        </div>
        <div className="right">
          <div className="menu-container">
            {
              this.buttons.map((e, i) => {
                return (
                  <div className={`main-menu-item ${this.state.selectedButtonIndex % 6 === i ? 'selected': ''}`} key={i}>
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
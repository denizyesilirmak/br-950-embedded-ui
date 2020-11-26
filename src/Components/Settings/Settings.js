import React from 'react'
import './Settings.css'
import socketHelper from '../../SocketHelper'

import Language_Icon from '../../Assets/icons/settings/language.png'
import Date_Icon from '../../Assets/icons/settings/date.png'
import Volume_Icon from '../../Assets/icons/settings/volume.png'
import Info_Icon from '../../Assets/icons/settings/info.png'

import LanguageSettings from './SettingsComponents/LanguageSettings/LanguageSettings'

const SETTINGS_TABS = [
  "Language Settings",
  "Date & Time Settings",
  "Volume Settings",
  "Info"
]

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSettingsTab: 0
    }
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }
    switch (sd.payload) {
      case 'up':
        if (this.state.activeSettingsTab > 0) {
          this.setState({
            activeSettingsTab: this.state.activeSettingsTab - 1
          })
        }
        break;
      case 'down':
        if (this.state.activeSettingsTab < 4) {
          this.setState({
            activeSettingsTab: this.state.activeSettingsTab + 1
          })
        }
        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        break
      default:
        break;
    }
  }

  renderSubSettings = () => {
    switch (this.state.activeSettingsTab) {
      case 0: return <LanguageSettings />


      default:
        break;
    }
  }


  render() {
    return (
      <div className="settings component">
        <div className="settings-container">

          <div className="left">
            <div className={`settings-tab ${this.state.activeSettingsTab === 0 ? 'active' : ''}`}>
              <img src={Language_Icon} alt="tab-icon" className="tab-icon" />
            </div>
            <div className={`settings-tab ${this.state.activeSettingsTab === 1 ? 'active' : ''}`}>
              <img src={Date_Icon} alt="tab-icon" className="tab-icon" />
            </div>
            <div className={`settings-tab ${this.state.activeSettingsTab === 2 ? 'active' : ''}`}>
              <img src={Volume_Icon} alt="tab-icon" className="tab-icon" />
            </div>
            <div className={`settings-tab ${this.state.activeSettingsTab === 3 ? 'active' : ''}`}>
              <img src={Info_Icon} alt="tab-icon" className="tab-icon" />
            </div>
            <div className={`settings-tab ${this.state.activeSettingsTab === 4 ? 'active' : ''}`}>

            </div>
          </div>

          <div className="right">
            <div className="settings-sub-title">
              {SETTINGS_TABS[this.state.activeSettingsTab]}
            </div>
            <div className="settings-sub-container">
              {
                this.renderSubSettings()
              }
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Settings

//settings
//language
//datetime
//volume
//ingo
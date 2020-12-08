import React from 'react'
import './Settings.css'
import socketHelper from '../../SocketHelper'

import LanguageSettings from './SettingsComponents/LanguageSettings/LanguageSettings'
import DateTimeSettings from './SettingsComponents/DateTimeSettings/DateTimeSettings'

import DatePopup from './SettingsPopups/Date'
import TimePopup from './SettingsPopups/Time'

import TabBar from './SettingsComponents/TabBar/TabBar'

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
      activeSettingsTab: 1,
      activePopup: null,
      tabBarActive: true
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
        if (this.state.activeSettingsTab > 0 && this.state.tabBarActive) {
          this.setState({
            activeSettingsTab: this.state.activeSettingsTab - 1
          })
        }
        break;
      case 'down':
        if (this.state.activeSettingsTab < 4 && this.state.tabBarActive) {
          this.setState({
            activeSettingsTab: this.state.activeSettingsTab + 1
          })
        }
        break;
      case 'left':
        break

      case 'right':
        break

      case 'ok':
        if (this.state.tabBarActive === true) {
          //we are going left to right panel.
          this.setState({
            tabBarActive: false
          }, () => {
            console.log(this.state.tabBarActive)
          })
        } else {
          // we're in the right panel.
        }
        break
      case 'back':
        if(this.state.tabBarActive){
          this.props.navigateTo('menuScreen')
        }else{
          this.setState({
            tabBarActive: true
          })
        }
        break
      default:
        break;
    }
  }

  renderSubSettings = () => {
    switch (this.state.activeSettingsTab) {
      case 0: return <LanguageSettings />
      case 1: return <DateTimeSettings />


      default:
        break;
    }
  }

  renderPopup = () => {
    switch (this.state.activePopup) {
      case 'date': return <DatePopup />
      case 'time': return <TimePopup />
      default: return;
    }
  }


  render() {
    return (
      <>
        {
          this.renderPopup()
        }

        <div className="settings component">
          <div className="settings-container">

            <TabBar activeTabIndex={this.state.activeSettingsTab} tabBarActive={this.state.tabBarActive} />

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
      </>
    )
  }
}

export default Settings

//settings
//language
//datetime
//volume
//ingo
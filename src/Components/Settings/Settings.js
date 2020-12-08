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
      activeSettingsTab: 0,
      activePopup: null,
      tabBarActive: true,
      languageIndex: 0,
      dateTimeSettingsIndex: 0
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

        if (this.state.activeSettingsTab === 0 && this.state.tabBarActive === false) {
          this.handleLanguageNavigation('up')
        }

        if (this.state.activeSettingsTab === 1 && this.state.tabBarActive === false) {
          //move up on datetime settings tab
          if(this.state.dateTimeSettingsIndex >= 1){
            this.setState({dateTimeSettingsIndex: this.state.dateTimeSettingsIndex - 1})
          }
        }


        break;
      case 'down':
        if (this.state.activeSettingsTab < 4 && this.state.tabBarActive) {
          this.setState({
            activeSettingsTab: this.state.activeSettingsTab + 1
          })
        }

        if (this.state.activeSettingsTab === 0 && this.state.tabBarActive === false) {
          this.handleLanguageNavigation('down')
        }

        if (this.state.activeSettingsTab === 1 && this.state.tabBarActive === false) {
          //move down on datetime settings tab
          if(this.state.dateTimeSettingsIndex < 1){
            this.setState({dateTimeSettingsIndex: this.state.dateTimeSettingsIndex + 1})
          }
        }


        break;
      case 'left':
        if (this.state.activeSettingsTab === 0 && this.state.tabBarActive === false) {
          this.handleLanguageNavigation('left')
        }
        break

      case 'right':
        if (this.state.activeSettingsTab === 0 && this.state.tabBarActive === false) {
          this.handleLanguageNavigation('right')
        }
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
          if (this.state.activeSettingsTab === 0) {
            //language selection
          }
          else if (this.state.activeSettingsTab === 1) {
            //language selection
          }
        }
        break
      case 'back':
        if (this.state.tabBarActive) {
          this.props.navigateTo('menuScreen')
        } else {
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
      case 0: return <LanguageSettings
        index={this.state.languageIndex}
      />
      case 1: return <DateTimeSettings
        index={this.state.dateTimeSettingsIndex}
      />


      default:
        break;
    }
  }

  handleLanguageNavigation = (direction) => {
    if (this.state.activeSettingsTab === 0) {
      switch (direction) {
        case 'left':
          if (this.state.languageIndex > 0)
            this.setState({
              languageIndex: this.state.languageIndex - 1
            })
          break;
        case 'right':
          if (this.state.languageIndex < 9)
            this.setState({
              languageIndex: this.state.languageIndex + 1
            })
          break;
        case 'up':
          if (this.state.languageIndex > 4)
            this.setState({
              languageIndex: this.state.languageIndex - 5
            })
          break;
        case 'down':
          if (this.state.languageIndex < 5)
            this.setState({
              languageIndex: this.state.languageIndex + 5
            })
          break;

        default:
          break;
      }
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

            <div className="right" style={{ background: this.state.tabBarActive ? '#ffffff90' : '#ffffffad' }}>
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
import React from 'react'
import './Settings.css'
import socketHelper from '../../SocketHelper'
import Popup from '../Popup/Popup'

import LanguageSettings from './SettingsComponents/LanguageSettings/LanguageSettings'
import DateTimeSettings from './SettingsComponents/DateTimeSettings/DateTimeSettings'
import ResetSettings from './SettingsComponents/ResetSettings/ResetSettings'
import InfoSettings from './SettingsComponents/InfoSettings/InfoSettings'

import DatePopup from './SettingsPopups/Date'
import TimePopup from './SettingsPopups/Time'

import TabBar from './SettingsComponents/TabBar/TabBar'




const SETTINGS_TABS = [
  "Language Settings",
  "Date & Time Settings",
  "Volume Settings",
  "Reset Settings",
  "Device Info"
]

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSettingsTab: 0,
      activePopup: '',
      tabBarActive: true,
      languageIndex: 0,
      dateTimeSettingsIndex: 0,
      resetSettingsIndex: 0,
      day: 1,
      month: 2,
      year: 2019,
      hour: 23,
      minute: 56,
      datePopupIndex: 0,
      timePopupIndex: 0,
      informationPopupActive: false,
      informationPopupData: {
        title: 'test',
        text: 'test_text',
        buttontext: 'test_button',
        rtl: false
      }
    }
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    clearTimeout(this.notificationTimeOut)
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

        if (this.state.activeSettingsTab === 1 && this.state.tabBarActive === false && this.state.activePopup === '') {
          //move up on datetime settings tab
          if (this.state.dateTimeSettingsIndex >= 1) {
            this.setState({ dateTimeSettingsIndex: this.state.dateTimeSettingsIndex - 1 })
          }
        }

        if (this.state.activeSettingsTab === 3 && this.state.tabBarActive === false && this.state.activePopup === '') {
          //move up on reset settings tab
          if (this.state.resetSettingsIndex >= 1) {
            this.setState({ resetSettingsIndex: this.state.resetSettingsIndex - 1 })
          }
        }

        if (this.state.activePopup === 'date') {
          if (this.state.datePopupIndex === 0) {
            this.setState({
              day: this.clamp(this.state.day + 1, 1, 31)
            })
          }
          else if (this.state.datePopupIndex === 1) {
            this.setState({
              month: this.clamp(this.state.month + 1, 1, 12)
            })
          }
          else if (this.state.datePopupIndex === 2) {
            this.setState({
              year: this.clamp(this.state.year + 1, 2019, 2035)
            })
          }
        }

        if (this.state.activePopup === 'time') {
          if (this.state.timePopupIndex === 0) {
            this.setState({
              hour: this.clamp(this.state.hour + 1, 0, 23)
            })
          }
          else if (this.state.timePopupIndex === 1) {
            this.setState({
              minute: this.clamp(this.state.minute + 1, 0, 59)
            })
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

        if (this.state.activeSettingsTab === 1 && this.state.tabBarActive === false && this.state.activePopup === '') {
          //move down on datetime settings tab
          if (this.state.dateTimeSettingsIndex < 1) {
            this.setState({ dateTimeSettingsIndex: this.state.dateTimeSettingsIndex + 1 })
          }
        }

        if (this.state.activeSettingsTab === 3 && this.state.tabBarActive === false && this.state.activePopup === '') {
          //move down on reset settings tab
          if (this.state.resetSettingsIndex < 1) {
            this.setState({ resetSettingsIndex: this.state.resetSettingsIndex + 1 })
          }
        }

        if (this.state.activePopup === 'date') {
          if (this.state.datePopupIndex === 0) {
            this.setState({
              day: this.clamp(this.state.day - 1, 1, 31)
            })
          }
          else if (this.state.datePopupIndex === 1) {
            this.setState({
              month: this.clamp(this.state.month - 1, 1, 12)
            })
          }
          else if (this.state.datePopupIndex === 2) {
            this.setState({
              year: this.clamp(this.state.year - 1, 2019, 2035)
            })
          }
        }

        if (this.state.activePopup === 'time') {
          if (this.state.timePopupIndex === 0) {
            this.setState({
              hour: this.clamp(this.state.hour - 1, 0, 23)
            })
          }
          else if (this.state.timePopupIndex === 1) {
            this.setState({
              minute: this.clamp(this.state.minute - 1, 0, 59)
            })
          }
        }


        break;
      case 'left':
        if (this.state.activeSettingsTab === 0 && this.state.tabBarActive === false) {
          this.handleLanguageNavigation('left')
        }
        else if (this.state.activePopup === 'date' && this.state.datePopupIndex > 0) {
          this.setState({
            datePopupIndex: this.state.datePopupIndex - 1
          })
        }
        else if (this.state.activePopup === 'time' && this.state.timePopupIndex > 0) {
          this.setState({
            timePopupIndex: this.state.timePopupIndex - 1
          })
        }
        break

      case 'right':
        if (this.state.activeSettingsTab === 0 && this.state.tabBarActive === false) {
          this.handleLanguageNavigation('right')
        }
        else if (this.state.activePopup === 'date' && this.state.datePopupIndex < 2) {
          this.setState({
            datePopupIndex: this.state.datePopupIndex + 1
          })
        }
        else if (this.state.activePopup === 'time' && this.state.timePopupIndex < 1) {
          this.setState({
            timePopupIndex: this.state.timePopupIndex + 1
          })
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
            this.showNotification(
              "Settings",
              "Current language changed successfuly",
              false
            )
          }
          else if (this.state.activeSettingsTab === 1 && this.state.activePopup === '') {
            //date time settings item selection
            if (this.state.dateTimeSettingsIndex === 0) {
              this.setState({
                activePopup: 'time'
              })
            }
            else if (this.state.dateTimeSettingsIndex === 1) {
              this.setState({
                activePopup: 'date'
              })
            }
          }
        }
        break
      case 'back':
        if (this.state.tabBarActive) {
          this.props.navigateTo('menuScreen')
        } else {

          if (this.state.activePopup !== '') {
            this.setState({
              activePopup: ''
            })
          } else {
            this.setState({
              tabBarActive: true
            })
          }
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
        day={this.state.day}
        month={this.state.month}
        year={this.state.year}
        hour={this.state.hour}
        minute={this.state.minute}
      />
      case 3: return <ResetSettings
        index={this.state.resetSettingsIndex}
      />
      case 4: return <InfoSettings
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
      case 'date': return <DatePopup
        index={this.state.datePopupIndex}
        day={this.state.day}
        month={this.state.month}
        year={this.state.year}
      />
      case 'time': return <TimePopup
        index={this.state.timePopupIndex}
        hour={this.state.hour}
        minute={this.state.minute}
      />
      default: return;
    }
  }

  renderInformationPopup = () => {
    return (
      <Popup
        title={this.state.informationPopupData.title}
        text={this.state.informationPopupData.text}
        buttontext={this.state.informationPopupData.buttontext}
        rtl={this.state.informationPopupData.rtl}
      />
    )
  }

  showNotification = (title = "empty", text = "empty", buttontext = "empty", rtl = false) => {
    this.setState({
      informationPopupData: {
        title: title,
        text: text,
        buttontext: buttontext,
        rtl: rtl
      }
    }, () => {
      this.setState({ informationPopupActive: true }, () => {
        this.notificationTimeOut = setTimeout(() => {
          this.setState({ informationPopupActive: false })
        }, 2000)
      })
    })
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


  render() {
    return (
      <>
        {
          this.renderPopup()
        }

        {
          this.state.informationPopupActive ? this.renderInformationPopup() : null
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
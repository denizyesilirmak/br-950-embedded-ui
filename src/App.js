import React from 'react'
import './App.css'
import socketHelper from './SocketHelper'
import DeviceContextProvider from './Contexts/DeviceContext'

import StatusBar from './Components/Statusbar/Statusbar'
//SCREENS
import Mainmenu from './Components/Mainmenu/Mainmenu'
import Settings from './Components/Settings/Settings'
import Files from './Components/Files/Files'
import TurnOff from './Components/TurnOff/TurnOff'
import ScanViewerAutomatic from './Components/ScanViewerAutomatic/ScanViewerAutomatic'
import ScanViewerAdvanced from './Components/ScanViewerAdvanced/ScanViewerAdvanced'
import QuickScan from './Components/ScanModes/QuickScan/QuickScan'
import QuickScanAction from './Components/ScanModes/QuickScan/QuickScanAction'
import QuickScanResult from './Components/ScanModes/QuickScan/QuickScanResult'
import AutomaticScan from './Components/ScanModes/AutomaticScan/AutomaticScan'
import AutomaticScanAction from './Components/ScanModes/AutomaticScan/AutomaticScanAction'
import AdvancedScan from './Components/ScanModes/AdvancedScan/AdvancedScan'
import AdvancedScanAction from './Components/ScanModes/AdvancedScan/AdvancedScanAction'
import TurnOffAction from './Components/TurnOff/TurnOffAction'
import Calibration from './Components/Calibration/Calibration'
import ClearMemory from './Components/Resets/ClearMemory'


import dbStorage from './DatabaseHelper'
dbStorage.init()

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false,
      activeScreen: 'settingsScreen',
      screenProps: { A: 368, B: 340, C: 440, D: 340, E: 800, F: 330 },
      currentLanguage: "en",
      _mainMenuCursorIndex: 0,
      batteryLevel: 0
    }

    dbStorage.getAll()
      .then(settings => {
        this.setState({
          ready: true,
          currentLanguage: settings['lang'] || 'en'
        })
      })

  }

  componentDidMount() {
    socketHelper.attachSpecial('battery', (socketData) => {
      if (socketData.type !== 'battery')
        return

      this.setState({
        batteryLevel: parseInt(socketData.payload)
      })
    })
  }

  navigateTo = (screenName, screenProps) => {
    this.setState({
      screenProps: screenProps,
      activeScreen: screenName,
    })
  }

  _getLanguage = (langCode) => {
    console.log('App.js:_getLanguage', langCode)
    this.setState({ currentLanguage: langCode })
  }

  _setCursorIndex = (index) => {
    this.setState({
      _mainMenuCursorIndex: index
    })
  }

  renderActiveScreen = () => {
    switch (this.state.activeScreen) {
      case 'menuScreen': return <Mainmenu batteryLevel={this.state.batteryLevel} navigateTo={this.navigateTo} cursorIndex={this.state._mainMenuCursorIndex} setCursorIndex={this._setCursorIndex} />
      case 'settingsScreen': return <Settings navigateTo={this.navigateTo} setLanguage={this._getLanguage} />
      case 'filesScreen': return <Files navigateTo={this.navigateTo} />
      case 'turnOffScreen': return <TurnOff navigateTo={this.navigateTo} />
      case 'scanViewerAutomaticScreen': return <ScanViewerAutomatic navigateTo={this.navigateTo} screenProps={this.state.screenProps} />
      case 'scanViewerAdvancedScreen': return <ScanViewerAdvanced navigateTo={this.navigateTo} screenProps={this.state.screenProps} />
      case 'quickScanScreen': return <QuickScan navigateTo={this.navigateTo} />
      case 'quickScanActionScreen': return <QuickScanAction navigateTo={this.navigateTo} screenProps={this.state.screenProps} />
      case 'quickScanResultScreen': return <QuickScanResult navigateTo={this.navigateTo} screenProps={this.state.screenProps} />
      case 'automaticScanScreen': return <AutomaticScan navigateTo={this.navigateTo} />
      case 'automaticScanActionScreen': return <AutomaticScanAction navigateTo={this.navigateTo} />
      case 'advancedScanScreen': return <AdvancedScan navigateTo={this.navigateTo} />
      case 'advancedScanActionScreen': return <AdvancedScanAction navigateTo={this.navigateTo} />
      case 'turnOffActionScreen': return <TurnOffAction />
      case 'calibrationScreen': return <Calibration navigateTo={this.navigateTo} />
      case 'clearMemoryScreen': return <ClearMemory navigateTo={this.navigateTo} />
      default:
        break;
    }
  }


  render() {
    return (
      this.state.ready ?
        <div className="App">
          <DeviceContextProvider
            language={this.state.currentLanguage}
          >
            <StatusBar menuTitle={this.state.activeScreen} batteryLevel={this.state.batteryLevel} />
            {
              this.renderActiveScreen()
            }
          </DeviceContextProvider>
        </div>
        : null
    )
  }
}

export default App

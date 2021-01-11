import React from 'react'
import './App.css'
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

import dbStorage from './DatabaseHelper'
dbStorage.init()

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ready: false,
      activeScreen: 'scanViewerAdvancedScreen',
      screenProps: null,
      currentLanguage: "en",
      _mainMenuCursorIndex: 0
    }

    dbStorage.getAll()
      .then(settings => {
        this.setState({
          ready: true,
          currentLanguage: settings['lang'] || 'en'
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

  renderActiveScreen = () => {
    switch (this.state.activeScreen) {
      case 'menuScreen': return <Mainmenu navigateTo={this.navigateTo} />
      case 'settingsScreen': return <Settings navigateTo={this.navigateTo} setLanguage={this._getLanguage} />
      case 'filesScreen': return <Files navigateTo={this.navigateTo} />
      case 'turnOffScreen': return <TurnOff navigateTo={this.navigateTo} />
      case 'scanViewerAutomaticScreen': return <ScanViewerAutomatic navigateTo={this.navigateTo} />
      case 'scanViewerAdvancedScreen': return <ScanViewerAdvanced navigateTo={this.navigateTo} />
      case 'quickScanScreen': return <QuickScan navigateTo={this.navigateTo} />
      case 'quickScanActionScreen': return <QuickScanAction navigateTo={this.navigateTo} />
      case 'quickScanResultScreen': return <QuickScanResult navigateTo={this.navigateTo} screenProps={this.state.screenProps} />
      case 'automaticScanScreen': return <AutomaticScan navigateTo={this.navigateTo} />
      case 'automaticScanActionScreen': return <AutomaticScanAction navigateTo={this.navigateTo} />
      case 'advancedScanScreen': return <AdvancedScan navigateTo={this.navigateTo} />
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
            <StatusBar menuTitle={this.state.activeScreen} />
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

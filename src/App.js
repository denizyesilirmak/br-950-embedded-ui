import React from 'react'
import './App.css'

import StatusBar from './Components/Statusbar/Statusbar'
//SCREENS
import Mainmenu from './Components/Mainmenu/Mainmenu'
import Settings from './Components/Settings/Settings'
import Files from './Components/Files/Files'
import TurnOff from './Components/TurnOff/TurnOff'
import ScanViewer from './Components/ScanViewer/ScanViewer'
import QuickScan from './Components/ScanModes/QuickScan/QuickScan'
import QuickScanAction from './Components/ScanModes/QuickScan/QuickScanAction'
import QuickScanResult from './Components/ScanModes/QuickScan/QuickScanResult'
import AutomaticScan from './Components/ScanModes/AutomaticScan/AutomaticScan'
import AutomaticScanAction from './Components/ScanModes/AutomaticScan/AutomaticScanAction'
import AdvancedScan from './Components/ScanModes/AdvancedScan/AdvancedScan'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeScreen: 'settingsScreen',
      screenProps: null
    }
  }

  navigateTo = (screenName, screenProps) => {
    this.setState({
      screenProps: screenProps,
      activeScreen: screenName,
    })
  }

  renderActiveScreen = () => {
    switch (this.state.activeScreen) {
      case 'menuScreen': return <Mainmenu navigateTo={this.navigateTo} />
      case 'settingsScreen': return <Settings navigateTo={this.navigateTo} />
      case 'filesScreen': return <Files navigateTo={this.navigateTo} />
      case 'turnOffScreen': return <TurnOff navigateTo={this.navigateTo} />
      case 'scanViewerScreen': return <ScanViewer navigateTo={this.navigateTo} />
      case 'quickScanScreen': return <QuickScan navigateTo={this.navigateTo} />
      case 'quickScanActionScreen': return <QuickScanAction navigateTo={this.navigateTo} />
      case 'quickScanResultScreen': return <QuickScanResult navigateTo={this.navigateTo} screenProps={this.state.screenProps}/>
      case 'automaticScanScreen': return <AutomaticScan navigateTo={this.navigateTo} />
      case 'automaticScanActionScreen': return <AutomaticScanAction navigateTo={this.navigateTo} /> 
      case 'advancedScanScreen': return <AdvancedScan navigateTo={this.navigateTo} />
      default:
        break;
    }
  }


  render() {
    return (
      <div className="App">
        <StatusBar menuTitle={this.state.activeScreen} />
        {
          this.renderActiveScreen()
        }
      </div>
    )
  }
}

export default App

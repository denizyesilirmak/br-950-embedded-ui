import React from 'react'
import './App.css'

import StatusBar from './Components/Statusbar/Statusbar'
//SCREENS
import Mainmenu from './Components/Mainmenu/Mainmenu'
import Settings from './Components/Settings/Settings'
import Files from './Components/Files/Files'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeScreen: 'menuScreen'
    }
  }

  navigateTo = (screenName) => {
    this.setState({
      activeScreen: screenName
    })
  }

  renderActiveScreen = () => {
    switch (this.state.activeScreen) {
      case 'menuScreen': return <Mainmenu navigateTo={this.navigateTo} />
      case 'settingsScreen': return <Settings navigateTo={this.navigateTo} />
      case 'filesScreen': return <Files navigateTo={this.navigateTo} />

      default:
        break;
    }
  }


  render() {
    return (
      <div className="App">
        <StatusBar />
        {
          this.renderActiveScreen()
        }
      </div>
    )
  }
}

export default App

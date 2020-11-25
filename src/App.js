import React from 'react'
import './App.css'

import StatusBar from './Components/Statusbar/Statusbar'
//SCREENS
import Mainmenu from './Components/Mainmenu/Mainmenu'
import Settings from './Components/Settings/Settings'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activeScreen: 'settingsScreen'
    }
  }

  renderActiveScreen = () => {
    switch (this.state.activeScreen) {
      case 'menuScreen': return <Mainmenu/>
      case 'settingsScreen': return <Settings/>
    
      default:
        break;
    }
  }


  render() {
    return (
      <div className="App">
        <StatusBar/>
        {
          this.renderActiveScreen()
        }
      </div>
    )
  }
}

export default App

import React, { createContext, Component } from 'react'
import SnackBar from '../Components/SnackBar/SnackBar'
export const DeviceContext = createContext()
const STRINGS = require('./Strings.json')


class DeviceContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSnackBarActive: false
    }
  }

  _showSnackBar = (text = "notext", timeout = 2000) => {
    this.snackbarText = text
    this.snackbarTimeout = timeout
    this.setState({ isSnackBarActive: true })
  }

  _dispatchSnackBar = () => {
    this.setState({
      isSnackBarActive: false
    })
  }

  render() {
    return (
      <DeviceContext.Provider value={{
        strings: STRINGS[this.props.language],
        language: this.props.language,
        showSnackBar: this._showSnackBar
      }}>
        {
          this.state.isSnackBarActive ?
            <SnackBar
              dispatchSnackBar={this._dispatchSnackBar}
              timeout={this.snackbarTimeout}
              text={this.snackbarText}
            /> : null
        }

        {this.props.children}

      </DeviceContext.Provider>
    )
  }
}

export default DeviceContextProvider
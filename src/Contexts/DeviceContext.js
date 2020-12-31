import React, { createContext, Component } from 'react'
export const DeviceContext = createContext()
const STRINGS = require('./Strings.json')

class DeviceContextProvider extends Component {
  render() {
    return (
      <DeviceContext.Provider value={{
        strings: STRINGS[this.props.language],
        language: this.props.language
      }}>
        {this.props.children}
      </DeviceContext.Provider>
    )
  }
}

export default DeviceContextProvider
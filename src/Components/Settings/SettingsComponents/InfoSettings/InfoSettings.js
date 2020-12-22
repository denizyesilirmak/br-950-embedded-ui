import React, { Component } from 'react'
import './InfoSettings.css'
import BrLogo from '../../../../Assets/icons/br-logo.png'


class InfoSettings extends Component {
  render() {
    return (
      <div className="info-settings">
        <img alt="logo" className="info-logo" src={BrLogo} />

      </div>
    )
  }
}
export default InfoSettings
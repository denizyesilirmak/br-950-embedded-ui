import React, { Component } from 'react'
import './InfoSettings.css'
import BrLogo from '../../../../Assets/icons/br-logo.png'


class InfoSettings extends Component {
  render() {
    return (
      <div className="info-settings">
        <img alt="logo" className="info-logo" src={BrLogo} />

        <div className="info-property">
          <div className="label">
            Brand
          </div>
          <div className="value">
            Br Systems
          </div>
        </div>

        <div className="info-property">
          <div className="label">
            Model
          </div>
          <div className="value">
            BR-950 Pro
          </div>
        </div>

        <div className="info-property">
          <div className="label">
            Brand
          </div>
          <div className="value">
            Br Systems
          </div>
        </div>

        <div className="info-property">
          <div className="label">
            Brand
          </div>
          <div className="value">
            Br Systems
          </div>
        </div>

      </div>
    )
  }
}
export default InfoSettings
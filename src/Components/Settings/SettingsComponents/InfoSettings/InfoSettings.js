import React, { Component } from 'react'
import './InfoSettings.css'
import { DeviceContext } from '../../../../Contexts/DeviceContext'
import BrLogo from '../../../../Assets/icons/br-logo.png'


class InfoSettings extends Component {
  static contextType = DeviceContext
  render() {
    return (
      <div className="info-settings">
        <img alt="logo" className="info-logo" src={BrLogo} />

        <div className="info-property">
          <div className="label">
            {this.context.strings['brand']}
          </div>
          <div className="value">
            Br Systems
          </div>
        </div>

        <div className="info-property">
          <div className="label">
            {this.context.strings['model']}
          </div>
          <div className="value">
            BR-950 Pro
          </div>
        </div>

        <div className="info-property">
          <div className="label">
          {this.context.strings['software_version']}
          </div>
          <div className="value">
            2.0
          </div>
        </div>

        <div className="info-property">
          <div className="label">
          {this.context.strings['build_number']}
          </div>
          <div className="value">
            100500D.001
          </div>
        </div>

      </div>
    )
  }
}
export default InfoSettings
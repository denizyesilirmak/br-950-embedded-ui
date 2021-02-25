import React, { Component } from 'react'
import './InfoSettings.css'
import { DeviceContext } from '../../../../Contexts/DeviceContext'
import Api from '../../../../Api.json'
import BrLogo from '../../../../Assets/icons/br-logo.png'


class InfoSettings extends Component {
  static contextType = DeviceContext
  constructor(props) {
    super(props)
    this.state = {
      buildNumber: '-',
      softwareVersion: '-'
    }
  }

  componentDidMount() {
    fetch(Api.url + '/build.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          buildNumber: data.buildNumber,
          softwareVersion: data.software
        })
      })
      .catch(err => {
        this.setState({
          buildNumber: 'error',
          softwareVersion: 'error'
        })
      })
  }


  render() {
    return (
      <div className="info-settings">
        <img alt="logo" className="info-logo" src={BrLogo} />

        <div className="info-property" style={{ flexDirection: (this.context.language === 'ar' || this.context.language === 'fa') ? 'row-reverse' : 'row' }}>
          <div className="label">
            {this.context.strings['brand']}
          </div>
          <div className="value">
            Br Systems
          </div>
        </div>

        <div className="info-property" style={{ flexDirection: (this.context.language === 'ar' || this.context.language === 'fa') ? 'row-reverse' : 'row' }}>
          <div className="label">
            {this.context.strings['model']}
          </div>
          <div className="value">
            BR-950 Pro
          </div>
        </div>

        <div className="info-property" style={{ flexDirection: (this.context.language === 'ar' || this.context.language === 'fa') ? 'row-reverse' : 'row' }}>
          <div className="label">
            {this.context.strings['software_version']}
          </div>
          <div className="value">
            {this.state.softwareVersion}
          </div>
        </div>

        <div className="info-property" style={{ flexDirection: (this.context.language === 'ar' || this.context.language === 'fa') ? 'row-reverse' : 'row' }}>
          <div className="label">
            {this.context.strings['build_number']}
          </div>
          <div className="value">
            {`100500D.${this.state.buildNumber}`}
          </div>
        </div>

      </div>
    )
  }
}
export default InfoSettings
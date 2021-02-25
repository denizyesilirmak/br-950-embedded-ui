import React from 'react'
import './SettingsItem.css'
import { DeviceContext } from '../../../Contexts/DeviceContext'

class SettingsItem extends React.Component {
  static contextType = DeviceContext


  render() {
    return (
      <div
        className={`settings-item ${this.props.selected ? 'selected' : ''}`}
        style={{
          flexDirection: (this.context.language === 'ar' || this.context.language === 'fa') ? 'row-reverse' : 'row'
        }}
      >

        <div style={{ display: "flex", alignItems: 'center', flexDirection: (this.context.language === 'ar' || this.context.language === 'fa') ? 'row-reverse' : 'row' }}>
          <div className="icon">
            <img className="settings-prop-icon" src={this.props.icon} alt="icon" />
          </div>

          <div className="settings-prop-label">
            {this.props.label}
          </div>
        </div>

        <div className="settings-prop-value">
          {this.props.value}
        </div>
      </div>
    )
  }
}

export default SettingsItem
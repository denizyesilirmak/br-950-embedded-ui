import React from 'react'
import './SettingsItem.css'

class SettingsItem extends React.Component {
  render() {
    return (
      <div className={`settings-item ${this.props.selected ? 'selected' : ''}`}>
          <div className="icon">
            <img className="settings-prop-icon" src={this.props.icon} alt="icon" />
          </div>

          <div className="settings-prop-label">
            {this.props.label}
          </div>

          <div className="settings-prop-value">
            {this.props.value}
          </div>
      </div>
    )
  }
}

export default SettingsItem
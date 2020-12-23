import React from 'react'
import './ResetSettings.css'

import SettingsItem from '../SettingsItem'
import DateIcon from '../../../../Assets/icons/settings/d-date.png'
import TimeIcon from '../../../../Assets/icons/settings/d-time.png'

class ResetSettings extends React.Component {
  render() {
    return (
      <div className="reset-settings">
        <div className="reset-settings-container">
          <SettingsItem
            icon={TimeIcon}
            label="Clear Memory"
            value={null}
            selected={this.props.index === 0}
          />

          <SettingsItem
            icon={DateIcon}
            label="Factory Reset"
            value={null}
            selected={this.props.index === 1}
          />
        </div>
      </div>
    )
  }
}

export default ResetSettings
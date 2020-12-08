import React from 'react'
import './DateTimeSettings.css'

import SettingsItem from '../SettingsItem'

import DateIcon from '../../../../Assets/icons/settings/d-date.png'
import TimeIcon from '../../../../Assets/icons/settings/d-time.png'

class DateTimeSettings extends React.Component {
  render() {
    return (
      <div className="date-time-settings">
        <div className="date-time-settings-container">

          <SettingsItem
            icon={TimeIcon}
            label="Time"
            value="11:58"
            selected={this.props.index === 0}
          />

          <SettingsItem
            icon={DateIcon}
            label="Date"
            value="13.11.1453"
            selected={this.props.index === 1}
          />

        </div>
      </div>
    )
  }
}

export default DateTimeSettings
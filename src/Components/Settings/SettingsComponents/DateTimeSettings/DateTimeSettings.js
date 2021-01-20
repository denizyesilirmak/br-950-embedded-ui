import React from 'react'
import './DateTimeSettings.css'
import { DeviceContext } from '../../../../Contexts/DeviceContext'

import SettingsItem from '../SettingsItem'

import DateIcon from '../../../../Assets/icons/settings/d-date.png'
import TimeIcon from '../../../../Assets/icons/settings/d-time.png'

class DateTimeSettings extends React.Component {
  static contextType = DeviceContext
  render() {
    return (
      <div className="date-time-settings">
        <div className="date-time-settings-container">

          <SettingsItem
            icon={TimeIcon}
            label={this.context.strings['time']}
            value={`${this.props.hour < 10 ? '0' + this.props.hour : this.props.hour}:${this.props.minute < 10 ? '0' + this.props.minute : this.props.minute}`}
            selected={this.props.index === 0}
          />

          <SettingsItem
            icon={DateIcon}
            label={this.context.strings['date']}
            value={`${this.props.day < 10 ? '0' + this.props.day : this.props.day}.${this.props.month < 10 ? '0' + this.props.month : this.props.month}.${this.props.year}`}
            selected={this.props.index === 1}
          />

        </div>
      </div>
    )
  }
}

export default DateTimeSettings
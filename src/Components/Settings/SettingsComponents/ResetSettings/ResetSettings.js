import React from 'react'
import './ResetSettings.css'
import { DeviceContext } from '../../../../Contexts/DeviceContext'

import SettingsItem from '../SettingsItem'
import MemoryIcon from '../../../../Assets/icons/reset-memory.png'
import FactoryIcon from '../../../../Assets/icons/reset-factory.png'

class ResetSettings extends React.Component {
  static contextType = DeviceContext
  render() {
    return (
      <div className="reset-settings">
        <div className="reset-settings-container">
          <SettingsItem
            icon={MemoryIcon}
            label={this.context.strings['clearMemoryScreen']}
            value={null}
            selected={this.props.index === 0}
          />

          <SettingsItem
            icon={FactoryIcon}
            label={this.context.strings['factoryResetScreen']}
            value={null}
            selected={this.props.index === 1}
          />
        </div>
      </div>
    )
  }
}

export default ResetSettings
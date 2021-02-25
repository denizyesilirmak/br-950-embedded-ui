import React from 'react'

import Language_Icon from '../../../../Assets/icons/settings/language.png'
import Date_Icon from '../../../../Assets/icons/settings/date.png'
import Volume_Icon from '../../../../Assets/icons/settings/volume.png'
import Info_Icon from '../../../../Assets/icons/settings/info.png'
import Reset_Icon from '../../../../Assets/icons/reset-memory.png'

class TabBar extends React.Component {

  render() {
    return (
      <div className="left">
        <div className={`settings-tab ${(this.props.activeTabIndex === 0 && this.props.tabBarActive === true) ? 'active' : ''}`}>
          <img src={Language_Icon} alt="tab-icon" className="tab-icon" />
        </div>
        <div className={`settings-tab ${(this.props.activeTabIndex === 1 && this.props.tabBarActive === true) ? 'active' : ''}`}>
          <img src={Date_Icon} alt="tab-icon" className="tab-icon" />
        </div>
        <div className={`settings-tab ${(this.props.activeTabIndex === 2 && this.props.tabBarActive === true) ? 'active' : ''}`}>
          <img src={Volume_Icon} alt="tab-icon" className="tab-icon" />
        </div>
        <div className={`settings-tab ${(this.props.activeTabIndex === 3 && this.props.tabBarActive === true) ? 'active' : ''}`}>
          <img src={Reset_Icon} alt="tab-icon" className="tab-icon" />
        </div>
        <div className={`settings-tab ${(this.props.activeTabIndex === 4 && this.props.tabBarActive === true) ? 'active' : ''}`}>
          <img src={Info_Icon} alt="tab-icon" className="tab-icon" />
        </div>
      </div>
    )
  }
}

export default TabBar
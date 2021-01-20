import React from 'react'
import './Statusbar.css'
import { DeviceContext } from '../../Contexts/DeviceContext'

import WifiIcon from '../../Assets/icons/wifi.png'

import en from '../../Assets/flags/settings/en.png'
import de from '../../Assets/flags/settings/de.png'
import tr from '../../Assets/flags/settings/tr.png'
import ar from '../../Assets/flags/settings/ar.png'
import fa from '../../Assets/flags/settings/fa.png'
import ru from '../../Assets/flags/settings/ru.png'
import zh from '../../Assets/flags/settings/zh.png'
import fr from '../../Assets/flags/settings/fr.png'
import es from '../../Assets/flags/settings/es.png'
import it from '../../Assets/flags/settings/it.png'

import Battery from './Statusbar-Items/Battery'
import Clock from './Statusbar-Items/Clock'

const FLAGS = {
  en: {
    img: en
  },
  de: {
    img: de
  },
  tr: {
    img: tr
  },
  ar: {
    img: ar
  },
  fa: {
    img: fa
  },
  ru: {
    img: ru
  },
  zh: {
    img: zh
  },
  fr: {
    img: fr
  },
  es: {
    img: es
  },
  it: {
    img: it
  }
}


class Statusbar extends React.Component {
  static contextType = DeviceContext

  componentDidMount() {
    console.log('from context', this.context.language)
  }

  render() {
    return (
      <div className="status-bar">
        <div className="status-bar-left">
          <div className="menu-title">
            {this.context.strings[this.props.menuTitle]}
          </div>
        </div>
        <div className="status-bar-right">
          <Clock />
          <img src={WifiIcon} alt="wifi-icon" className="wifi-icon" />
          <Battery level={this.props.batteryLevel} />
          <div className="flag">
            <img src={FLAGS[this.context.language].img} alt="flag" />
          </div>
        </div>
      </div>
    )
  }
}

export default Statusbar
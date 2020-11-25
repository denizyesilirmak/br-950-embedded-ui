import React from 'react'
import './LanguageSettings.css'

import en from '../../../../Assets/flags/settings/en.png'
import de from '../../../../Assets/flags/settings/de.png'
import tr from '../../../../Assets/flags/settings/tr.png'
import ar from '../../../../Assets/flags/settings/ar.png'
import fa from '../../../../Assets/flags/settings/fa.png'
import ru from '../../../../Assets/flags/settings/ru.png'
import zh from '../../../../Assets/flags/settings/zh.png'
import fr from '../../../../Assets/flags/settings/fr.png'
import es from '../../../../Assets/flags/settings/es.png'
import it from '../../../../Assets/flags/settings/it.png'

const LANGUAGES = [
  {
    name: "English",
    icon: en
  },
  {
    name: "German",
    icon: de
  },
  {
    name: "Turkish",
    icon: tr
  },
  {
    name: "Arabic",
    icon: ar
  },
  {
    name: "Persian",
    icon: fa
  },
  {
    name: "Russian",
    icon: ru
  },
  {
    name: "Chinese",
    icon: zh
  },
  {
    name: "French",
    icon: fr
  },
  {
    name: "Spanish",
    icon: es
  },
  {
    name: "Italian",
    icon: it
  }
]

class LanguageSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLanguageIndex: 100 * 10
    }
  }
  render() {
    return (
      <div className="language-settings">
        <div className="language-container">
          {
            LANGUAGES.map((e, i) => {
              return (
                <div className={`language ${this.state.activeLanguageIndex % 10 === i ? 'selected': ''}`} key={i}>
                  <img src={e.icon} alt="lang-icon" className="language-icon"></img>
                  <div className="language-name">{e.name}</div>
                </div>
              )
            })
          }


        </div>
      </div>
    )
  }
}

export default LanguageSettings

//languages
//en
//de
//tr
//ar
//fa
//ru
//zh
//fr
//es
//it

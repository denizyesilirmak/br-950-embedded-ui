import React from 'react'
import './LanguageSettings.css'



class LanguageSettings extends React.Component {
  render() {
    return (
      <div className="language-settings">
        <div className="language-container">
          {
            this.props.languages.map((e, i) => {
              return (
                <div className={`language ${this.props.index % 10 === i ? 'selected' : ''}`} key={i}>
                  <img src={e.icon} alt="lang-icon" className="language-icon"></img>
                  <div className="language-name">{e.originalName}</div>
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

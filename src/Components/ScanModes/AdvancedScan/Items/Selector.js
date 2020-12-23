import React from 'react'
import './Selector.css'

import ArrowLeftIcon from '../../../../Assets/icons/arrow-left.png'
import ArrowRightIcon from '../../../../Assets/icons/arrow-right.png'

class Selector extends React.Component {
  render() {
    return (
      <div className="selector-item">
        <div className="left">
          <img src={ArrowLeftIcon} alt="icon"></img>
        </div>
        <div className="value">
          75 <span className="unit">Hz</span>
        </div>
        <div className="right">
          <img src={ArrowRightIcon} alt="icon"></img>
        </div>
      </div>
    )
  }
}

export default Selector
import React from 'react'
import './Time.css'
import './Popup.css'

import UpArrow from '../../../Assets/icons/arrow-up.png'
import DownArrow from '../../../Assets/icons/arrow-down.png'

class TimePopup extends React.Component {
  render() {
    return (
      <div className="popup date-popup">
        <div className="title">Set Time</div>

        <div className="popup-picker-container">

          <div className={`popup-picker-item ${this.props.index === 0 ? 'selected' : ''}`}>
            <div className="popup-item-title">Hour</div>
            <div className="up-arrow">
              <img alt="arrow" src={UpArrow} />
            </div>
            <div className="value">
              {this.props.hour < 10 ? '0' + this.props.hour : this.props.hour}
            </div>
            <div className="down-arrow">
              <img alt="arrow" src={DownArrow} />
            </div>
          </div>

          <div className={`popup-picker-item ${this.props.index === 1 ? 'selected' : ''}`}>
            <div className="popup-item-title">Minute</div>
            <div className="up-arrow">
              <img alt="arrow" src={UpArrow} />
            </div>
            <div className="value">
              {this.props.minute < 10 ? '0' + this.props.minute : this.props.minute}
            </div>
            <div className="down-arrow">
              <img alt="arrow" src={DownArrow} />
            </div>
          </div>

        </div>

        <div className="description">
          Press OK to save
</div>
      </div>
    )
  }
}

export default TimePopup
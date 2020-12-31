import React from 'react'
import './Date.css'
import './Popup.css'
import UpArrow from '../../../Assets/icons/arrow-up.png'
import DownArrow from '../../../Assets/icons/arrow-down.png'


class DatePopup extends React.Component {
  render() {
    return (
      <div className="popup date-popup">
        <div className="title">Set Date</div>

        <div className="popup-picker-container">

          <div className={`popup-picker-item ${this.props.index === 0 ? 'selected' : ''}`}>
            <div className="popup-item-title">Day</div>
            <div className="up-arrow">
              <img alt="arrow" src={UpArrow} />
            </div>
            <div className="value">
              {this.props.day}
            </div>
            <div className="down-arrow">
              <img alt="arrow" src={DownArrow} />
            </div>
          </div>

          <div className={`popup-picker-item ${this.props.index === 1 ? 'selected' : ''}`}>
            <div className="popup-item-title">Month</div>
            <div className="up-arrow">
              <img alt="arrow" src={UpArrow} />
            </div>
            <div className="value">
              {this.props.month}
            </div>
            <div className="down-arrow">
              <img alt="arrow" src={DownArrow} />
            </div>
          </div>

          <div className={`popup-picker-item ${this.props.index === 2 ? 'selected' : ''}`}>
            <div className="popup-item-title">Year</div>
            <div className="up-arrow">
              <img alt="arrow" src={UpArrow} />
            </div>
            <div className="value">
              {this.props.year}
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

export default DatePopup
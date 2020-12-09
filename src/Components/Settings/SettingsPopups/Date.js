import React from 'react'
import './Date.css'
import './Popup.css'

class DatePopup extends React.Component {
  render() {
    return (
      <div className="popup date-popup">
        <div className="title">Set Date</div>

        <div className="popup-picker-container">

          <div className={`popup-picker-item ${this.props.index === 0 ? 'selected': ''}`}>
            <div className="popup-item-title">Day</div>
            <div className="up-arrow">
              <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path stroke="#000000" transform="rotate(-90 40,20) " id="svg_1" d="m41.59554,20.00001l-15.79993,-28.36229l28.40878,28.36229l-28.40878,28.36227l15.79993,-28.36227z" strokeWidth="0" fill="#000000" />
                </g>
              </svg>
            </div>
            <div className="value">
              {this.props.day}
            </div>
            <div className="down-arrow">
              <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path stroke="#000000" transform="rotate(90 40,20) " id="svg_1" d="m41.59554,20.00001l-15.79993,-28.36229l28.40878,28.36229l-28.40878,28.36227l15.79993,-28.36227z" strokeWidth="1.5" fill="#000000" />
                </g>
              </svg>
            </div>
          </div>

          <div className={`popup-picker-item ${this.props.index === 1 ? 'selected': ''}`}>
            <div className="popup-item-title">Month</div>
            <div className="up-arrow">
              <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path stroke="#000000" transform="rotate(-90 40,20) " id="svg_1" d="m41.59554,20.00001l-15.79993,-28.36229l28.40878,28.36229l-28.40878,28.36227l15.79993,-28.36227z" strokeWidth="0" fill="#000000" />
                </g>
              </svg>
            </div>
            <div className="value">
              {this.props.month}
            </div>
            <div className="down-arrow">
              <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path stroke="#000000" transform="rotate(90 40,20) " id="svg_1" d="m41.59554,20.00001l-15.79993,-28.36229l28.40878,28.36229l-28.40878,28.36227l15.79993,-28.36227z" strokeWidth="0" fill="#000000" />
                </g>
              </svg>
            </div>
          </div>

          <div className={`popup-picker-item ${this.props.index === 2 ? 'selected': ''}`}>
            <div className="popup-item-title">Year</div>
            <div className="up-arrow">
              <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path stroke="#000000" transform="rotate(-90 40,20) " id="svg_1" d="m41.59554,20.00001l-15.79993,-28.36229l28.40878,28.36229l-28.40878,28.36227l15.79993,-28.36227z" strokeWidth="0" fill="#000000" />
                </g>
              </svg>
            </div>
            <div className="value">
              {this.props.year}
            </div>
            <div className="down-arrow">
              <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path stroke="#000000" transform="rotate(90 40,20) " id="svg_1" d="m41.59554,20.00001l-15.79993,-28.36229l28.40878,28.36229l-28.40878,28.36227l15.79993,-28.36227z" strokeWidth="0" fill="#000000" />
                </g>
              </svg>
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
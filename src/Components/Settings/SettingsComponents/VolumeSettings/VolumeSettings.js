import React from 'react'
import './VolumeSettings.css'

import ArrowLeft from '../../../../Assets/icons/arrow-left.png'
import ArrowRight from '../../../../Assets/icons/arrow-right.png'

class VolumeSettings extends React.Component {
  render() {
    return (
      <div className="volume-settings">

        <div className="slider-volume" style={{ width: '200px', opacity: 0.6 }}>
          <div className="title">Volume</div>
          <div className="volume-value">{this.props.volume}%</div>
        </div>

        <div className="slider-volume">
          <div className="title">General Volume</div>

          <div className="arrow-container">
            <img src={ArrowLeft} alt="arrow" />
            <div className="slider-container">
              <div className="slider-value" style={{ width: `${this.props.volume}%` }}>

              </div>
            </div>
            <img src={ArrowRight} alt="arrow" />
          </div>



        </div>





      </div>
    )
  }
}

export default VolumeSettings
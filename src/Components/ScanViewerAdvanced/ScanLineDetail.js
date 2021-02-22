import React from 'react'
import './ScanLineDetail.css'
import { DeviceContext } from '../../Contexts/DeviceContext'

import rateIcon from '../../Assets/icons/detail/rate.png'
import salinityIcon from '../../Assets/icons/detail/salinity.png'
import depthIcon from '../../Assets/icons/detail/depth.png'
import waterTypeIcon from '../../Assets/icons/detail/water-type.png'

class ScanLineDetail extends React.Component {
  static contextType = DeviceContext
  render() {
    return (
      <div className="scan-line-detail" style={{ right: this.props.active ? '30px' : '-320px' }}>

        <div className="sld-line-name">
          <span>{this.context.strings[`${this.props.line.toLowerCase()}_line`]}</span>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={rateIcon} />
            <div className="sld-title">{this.context.strings['rate']}</div>
          </div>
          <div className="sld-line-value">
            {this.props.data.rate}%
          </div>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={waterTypeIcon} />
            <div className="sld-title">{this.context.strings['type']}</div>
          </div>
          <div className="sld-line-value">
            {this.context.strings[this.props.data.water_type]}
          </div>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={depthIcon} />
            <div className="sld-title">{this.context.strings['depth']}</div>
          </div>
          <div className="sld-line-value">
            {` ${this.props.data.water_type !== 'no_water' ? this.props.data.water_depth : '- - - '} m`}
          </div>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={salinityIcon} />
            <div className="sld-title">{this.context.strings['salinity']}</div>
          </div>
          <div className="sld-line-value">
            {this.props.data.salinity} ppm
          </div>
        </div>

        <div className="sld-graph">
          <svg width="300" height="119.99999999999999" xmlns="http://www.w3.org/2000/svg">

            <defs>
              <radialGradient r="0.5" cy="0.5" cx="0.5" spreadMethod="pad" id="gradient" >
                <stop offset="0" stopColor="#e5e5e5" />
                <stop offset="1" stopOpacity="0.99609" stopColor="#56aaff" />
              </radialGradient>
              <linearGradient y2="0" x2="1" y1="0" x1="0" id="svg_17">
                <stop offset="0" stopColor="#00bf00" />
                <stop offset="0.47656" stopColor="#ffe900" />
                <stop offset="1" stopColor="#ff1e1e" />
              </linearGradient>
            </defs>
            <g>

              <ellipse stroke="url(#svg_17)" ry="62" rx="62" cy="104" cx="75" strokeOpacity="null" strokeWidth="5" fill="url(#gradient)" />
              <ellipse stroke="url(#svg_17)" ry="62" rx="62" cy="104" cx="226" strokeOpacity="null" strokeWidth="5" fill="url(#gradient)" />

              <line transform={`rotate(${this.props.data.rate * 1.8} 75,104)`} stroke="#ff0000" strokeDasharray="50" strokeLinecap="round" strokeLinejoin="round" y2="104" x2="122" y1="104" x1="27" strokeWidth="5" fill="none" />
              <line transform={`rotate(${this.props.data.salinity_percent * 1.8} 226,104)`} stroke="#ff0000" strokeDasharray="50" strokeLinecap="round" strokeLinejoin="round" y2="104" x2="274" y1="104" x1="179" strokeWidth="5" fill="none" />


              <ellipse stroke="#000" ry="8" rx="8" cy="104" cx="75" strokeOpacity="null" strokeWidth="5" fill="#e5e5e5" />
              <ellipse stroke="#000" ry="8" rx="8" cy="104" cx="226" strokeOpacity="null" strokeWidth="5" fill="#e5e5e5" />

              <text fontWeight="bold" textAnchor="center" fontFamily="sans-serif" fontSize="24" y="28" x="48" fill="#000000">{this.context.strings['rate']}</text>
              <text fontWeight="bold" textAnchor="center" fontFamily="sans-serif" fontSize="24" y="28" x="182" fill="#000000">{this.context.strings['salinity']}</text>
            </g>
          </svg>

        </div >

      </div >
    )
  }
}

export default ScanLineDetail
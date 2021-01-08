import React from 'react'
import './ScanLineDetail.css'

import rateIcon from '../../Assets/icons/detail/rate.png'
import salinityIcon from '../../Assets/icons/detail/salinity.png'
import depthIcon from '../../Assets/icons/detail/depth.png'
import waterTypeIcon from '../../Assets/icons/detail/water-type.png'

class ScanLineDetail extends React.Component {
  render() {
    return (
      <div className="scan-line-detail" style={{ right: this.props.active ? '30px' : '-320px' }}>

        <div className="sld-line-name">
          <span>Line</span> <span>A</span>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={rateIcon} />
            <div className="sld-title">Water Rate</div>
          </div>
          <div className="sld-line-value">
            50%
          </div>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={waterTypeIcon} />
            <div className="sld-title">Water Type</div>
          </div>
          <div className="sld-line-value">
            Fresh Water
          </div>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={depthIcon} />
            <div className="sld-title">Depth</div>
          </div>
          <div className="sld-line-value">
            30 metres
          </div>
        </div>

        <div className="sld-line-prop">
          <div className="top">
            <img alt="sld" src={salinityIcon} />
            <div className="sld-title">Salinity</div>
          </div>
        </div>

        <div className="sld-graph">

          <svg viewBox="0 0 300 120">
            <defs>
              <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#cccccc" strokeWidth="1" />
              </pattern>
            </defs>

            <g>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <path path="M 0 0 L 2 0 C 3 0 3 -2 4 -2 C 5 -2 5 0 6 0 L 13 0" strokeWidth="2" stroke="red" />
              {/* <line x1="15" x2="15" y1="15" y2="105" stroke="#000000" strokeWidth="2" /> */}
              {/* <line x1="15" x2="285" y1="105" y2="105" stroke="#000000" strokeWidth="2" /> */}
              <path d="M15,110 A1,1 0 0,1 275,15" fill="blue" />
            </g>

          </svg>

        </div>

      </div >
    )
  }
}

export default ScanLineDetail
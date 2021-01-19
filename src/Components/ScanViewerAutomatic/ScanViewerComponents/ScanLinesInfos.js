import React from 'react'
import './ScanLinesInfos.css'

class ScanLinesInfos extends React.Component {
  render() {
    return (
      <div className="scan-lines-infos">

        {
          Object.keys(this.props.results).map((e, i) => {
            return (
              <div className={`scan-line-info ${this.props.index === i ? 'selected' : ''}`} key={i}>
                <div className="line-name">{`${e.toLocaleLowerCase()}_line`}</div>

                <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="0" width="90" height="5" fill="#9ff734"></rect>
                  <line x1="5" y1="2.5" x2={this.props.results[e].rate} y2="2.5" stroke="#4287f5" strokeWidth="5" />
                  <line x1="5" y1="2.5" x2={(this.props.results[e].salinity - 300) / 12} y2="2.5" stroke="#85176b" strokeWidth="2" />
                  <line x1="5" y1="4.5" x2="95" y2="4.5" stroke="#00000050" strokeDasharray=".2 4.79" strokeWidth="1" />
                </svg>

                <div className="tags">
                  <div className="water-type-tag">
                    {this.props.results[e].water_type}
                  </div>

                  <div className="water-type-tag">
                    Rate: <span>{this.props.results[e].rate}%</span>
                  </div>

                  <div className="water-type-tag">
                    Salinity: <span>{this.props.results[e].salinity}</span>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>

    )
  }
}

export default ScanLinesInfos
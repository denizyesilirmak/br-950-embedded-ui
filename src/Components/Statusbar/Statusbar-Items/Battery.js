import React from 'react'
import './Battery.css'

class Battery extends React.Component {
  render() {
    return (
      <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect stroke="#40acff" rx="4"  height="19.80629" width="49.97498" y="10.09685" x="13.9116" strokeWidth="2.5" fill="none" />
          <rect rx="2"  height="8.88653" width="4.5271" y="15.55674" x="63.91462" strokeWidth="3.5" fill="#40acff" />

          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="16.60553" strokeWidth="3.5" fill="#ff0000" opacity={this.props.level > 5 ? 1 : 0.11}  />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="21.55965" strokeWidth="3.5" fill="#ff7200" opacity={this.props.level > 10 ? 1 : 0.11}  />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="26.51377" strokeWidth="3.5" fill="#ffe500" opacity={this.props.level > 20 ? 1 : 0.11}  />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="31.4679" strokeWidth="3.5" fill="#a1ff00"  opacity={this.props.level > 30 ? 1 : 0.11} />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="36.42202" strokeWidth="3.5" fill="#7fff00" opacity={this.props.level > 40 ? 1 : 0.11}  />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="41.37615" strokeWidth="3.5" fill="#7fff00" opacity={this.props.level > 50 ? 1 : 0.11}  />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="46.33027" strokeWidth="3.5" fill="#7fff00" opacity={this.props.level > 65 ? 1 : 0.11}  />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="51.2844" strokeWidth="3.5" fill="#7fff00"  opacity={this.props.level > 78 ? 1 : 0.11} />
          <rect className="battery-level-indicators" rx="1"  height="13" width="3.3" y="13.4" x="56.42201" strokeWidth="3.5" fill="#7fff00" opacity={this.props.level >= 90 ? 1 : 0.11}  />
        </g>
      </svg>
    )
  }
}

export default Battery
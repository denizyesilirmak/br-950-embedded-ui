import React from 'react'
import './Dashboard.css'
import BR_LOGO from '../../Assets/icons/br-logo.png'
import Utils from '../../Utils'

const TIME_INTERVAL = 5000

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
      date: ''
    }
  }

  componentDidMount() {
    const time = new Date()
    this.setState({
      time: `${Utils.pad(time.getHours())}:${Utils.pad(time.getMinutes())}`,
      date: `${Utils.pad(time.getDay())}.${Utils.pad(time.getMonth())}.${time.getFullYear()}`

    })

    //gets time every 5 seconds
    this.interval = setInterval(() => {
      const time = new Date()
      this.setState({
        time: `${Utils.pad(time.getHours())}:${Utils.pad(time.getMinutes())}`,
        date: `${Utils.pad(time.getDay())}.${Utils.pad(time.getMonth())}.${time.getFullYear()}`
      })
    }, TIME_INTERVAL)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }


  render() {
    return (
      <div className="dashboard">
        <div className="clock">
          {this.state.time}
        </div>
        <div className="date">
          {this.state.date}
        </div>

        <div className="battery">
          <svg width="200" height="102" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient y2="1" x2="1" y1="0" x1="1" id="svg_5">
                <stop offset="0" stopOpacity="0.2" stopColor="#ffffff" />
                <stop offset="1" stopOpacity="0.6" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <g>
              <rect rx="10" id="svg_2" height="46" width="150" y="28" x="25" strokeWidth="3.5" stroke="#ffffff" fill="none" />
              <rect stroke="null" rx="3" id="svg_3" height="21.27658" width="8.51063" y="40.36171" x="174.25525" strokeWidth="5.5" fill="#ffffff" />
              <rect rx="5" id="svg_4" height="33" width="138.29774" y="34.5" x="30.85113" strokeOpacity="null" strokeWidth="5.5" stroke="null" fill="url(#svg_5)" />
              <text textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontWeight="bold" fontSize="24" id="svg_12" y="59.4375" x="100" strokeOpacity="null" fill="#ffffff">94%</text>
            </g>
          </svg>
        </div>

        <div className="logo">
          <img src={BR_LOGO} alt="br-logo" className="logo-icon"></img>
        </div>

      </div>
    )
  }
}

export default Dashboard
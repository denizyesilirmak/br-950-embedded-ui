import React from 'react'
import './Clock.css'
import Utils from '../../../Utils'

const TIME_INTERVAL = 5000

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: ':'
    }
  }

  componentDidMount() {
    //gets time on first run
    const time = new Date()
    this.setState({
      time: `${Utils.pad(time.getHours())}:${Utils.pad(time.getMinutes())}`
    })

    //gets time every 5 seconds
    setInterval(() => {
      const time = new Date()
      this.setState({
        time: `${Utils.pad(time.getHours())}:${Utils.pad(time.getMinutes())}`
      })
    }, TIME_INTERVAL)
  }

  render() {
    return (
      <div className="status-bar-clock">
        {this.state.time}
      </div>
    )
  }

}

export default Clock
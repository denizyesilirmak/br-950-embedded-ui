import React from 'react'
import './TurnOffAction.css'
import socketHelper from '../../SocketHelper'

class TurnOffAction extends React.Component {

  componentDidMount(){
    socketHelper.attach(this.handleSocket)
  }

  handleSocket = () => {
    console.log('a')
  }

  render() {
    return (
      <div className="turn-off-action">
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse ry="54" rx="54" id="svg_1" cy="75" cx="75" strokeWidth="13" stroke="#ffffff" fill="none"  className="ring" />
            <line strokeLinecap="round" id="svg_2" y2="99" x2="75" y1="50" x1="75" strokeWidth="20" stroke="#ffffff" fill="none" />
          </g>
        </svg>
      </div>
    )
  }
}

export default TurnOffAction
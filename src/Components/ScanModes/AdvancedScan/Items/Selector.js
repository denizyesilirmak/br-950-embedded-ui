import React from 'react'
import './Selector.css'

import ArrowLeftIcon from '../../../../Assets/icons/arrow-left.png'
import ArrowRightIcon from '../../../../Assets/icons/arrow-right.png'

class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.oldValue = 0
    this.state = {
      leftAnimation: 0,
      rightAnimation: 0
    }


  }

  componentDidUpdate() {
    this.oldValue = this.props.value
  }


  render() {
    return (
      <div className="selector-item">
        <div
          animating={this.props.value < this.oldValue ? 1 : 0}
          onAnimationEnd={() => { this.setState({ leftAnimation: 0 }) }}
          className="left" >

          <img src={ArrowLeftIcon} alt="icon"></img>
        </div>

        <div className="value" style={{ fontSize: this.props.fontSize }}>
          {this.props.value} <span className="unit">{this.props.unit}</span>
        </div>

        <div
          animating={this.props.value > this.oldValue ? 1 : 0}
          onAnimationEnd={() => { this.setState({ rightAnimation: 0 }) }}
          className="right" >
          <img src={ArrowRightIcon} alt="icon"></img>
        </div>
      </div>
    )
  }
}

export default Selector
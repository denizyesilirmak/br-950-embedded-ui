import React from 'react'
import './Sensitivity.css'
import Selector from '../Items/Selector'

class Sensitivity extends React.Component {
  render() {
    return (
      <div className="sensitivity">
        <Selector value={this.props.sensitivity} fontSize={30} />

        <div className="sensitivity-visual">
            <span>
              <marquee>Sensitivity; refers to the sensitivity to the water density in the area you want to scan. Select low values for a small amount of water, lower values if you want a large amount of water.</marquee>
            </span>
        </div>
        
      </div>
    )
  }
}

export default Sensitivity


import React from 'react'
import './DirtType.css'

import Selector from '../Items/Selector'

class DirtType extends React.Component {
  render() {
    return (
      <div className="dirt-type">
        <Selector value="Neutral" fontSize={20} />

        <div className="dirt-type-visual">
          dirt-type-visual
        </div>

      </div>
    )
  }
}

export default DirtType
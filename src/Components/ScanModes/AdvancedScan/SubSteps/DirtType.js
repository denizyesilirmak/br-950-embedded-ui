import React from 'react'
import './DirtType.css'

import Selector from '../Items/Selector'

const DIRTTYPES = [
  {
    name: 'rock',
    value: 1
  },
  {
    name: 'neutral',
    value: 1
  },
  {
    name: 'mixed',
    value: 1
  },
  {
    name: 'clay',
    value: 1
  },
  {
    name: 'sandy',
    value: 1
  },
  {
    name: 'mineral',
    value: 1
  }
]


class DirtType extends React.Component {
  render() {
    return (
      <div className="dirt-type">
        <Selector value={DIRTTYPES[this.props.dirtTypeIndex].name} fontSize={20} />

        <div className="dirt-type-visual">
          dirt-type-visual
        </div>

      </div>
    )
  }
}

export default DirtType
import React from 'react'
import './DirtType.css'

import Selector from '../Items/Selector'

import dt_clay from '../../../../Assets/dirt-types/clay.png'
import dt_mineral from '../../../../Assets/dirt-types/mineral.png'
import dt_mixed from '../../../../Assets/dirt-types/mixed.png'
import dt_neutral from '../../../../Assets/dirt-types/neutral.png'
import dt_sandy from '../../../../Assets/dirt-types/sandy.png'
import dt_rocky from '../../../../Assets/dirt-types/rocky.png'

const DIRTTYPES = [
  {
    name: 'rock',
    value: 1,
    image: dt_rocky
  },
  {
    name: 'neutral',
    value: 1,
    image: dt_neutral
  },
  {
    name: 'mixed',
    value: 1,
    image: dt_mixed
  },
  {
    name: 'clay',
    value: 1,
    image: dt_clay
  },
  {
    name: 'sandy',
    value: 1,
    image: dt_sandy
  },
  {
    name: 'mineral',
    value: 1,
    image: dt_mineral
  }
]


class DirtType extends React.Component {
  render() {
    return (
      <div className="dirt-type">
        <Selector value={DIRTTYPES[this.props.dirtTypeIndex].name} fontSize={20} />

        <img src={DIRTTYPES[this.props.dirtTypeIndex].image} alt="dirt-type" className="dirt-type-visual"/>

      </div>
    )
  }
}

export default DirtType
import React from 'react'
import './SnackBar.css'

class SnackBar extends React.Component {
  constructor(props) {
    super(props)
    this.snackRef = React.createRef()
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.props.dispatchSnackBar()
      clearTimeout(this.timeout)
    }, this.props.timeout);
  }

  render() {
    return (
      <div ref={this.snackRef} className="snack-bar" >
        {this.props.text}
      </div>
    )
  }
}

export default SnackBar 
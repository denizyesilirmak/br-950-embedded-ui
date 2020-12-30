import React from 'react'
import './Popup.css'

class Popup extends React.Component {
  constructor(props){
    super(props)
    this.popupRef = React.createRef()
  }

  componentDidMount(){
    this.animationTimeout = setTimeout(() => {
      this.popupRef.current.style.transform = "translateY(0px) scale(1)"
      this.popupRef.current.style.opacity = 1
    }, 150);
  }

  componentWillUnmount(){
    clearTimeout(this.animationTimeout)
  }


  render() {
    return (
      <div className="app-popup-container">
        <div className="app-popup" ref={this.popupRef}>
          <div className="app-popup-title">
            {this.props.title}
          </div>

          <div className="app-popup-text"  style={{textAlign: this.props.rtl ? 'right' : 'left'}}>
            {this.props.text}
          </div>

          {
            this.props.buttontext ?
              <div className="app-popup-button">
                {this.props.buttontext}
              </div> : null
          }
        </div>
      </div>
    )
  }
}

export default Popup
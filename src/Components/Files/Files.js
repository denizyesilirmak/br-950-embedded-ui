import React from 'react'
import './Files.css'
import socketHelper from '../../SocketHelper'

import UP_ICON from '../../Assets/icons/files/up.png'
import DOWN_ICON from '../../Assets/icons/files/down.png'
import FILE_ICON from '../../Assets/icons/files/file1.png'

const dummy_file_list = [
  "0001",
  "0002",
  "0003",
  "0004",
  "0005",
  "0006",
  "0007",
  "0008",
  "0009",
  "0010",
  "0011",
  "0012",
  "0013",
  "0014",
  "0015",
  "0016"
]

class Files extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fileList: dummy_file_list,
      selectedFileIndex: 0
    }

    this.scrollable = React.createRef()
    this.scrollhandle = React.createRef()
  }

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }
    let tempSelectedFileIndex = this.state.selectedFileIndex
    switch (sd.payload) {
      case 'ok':
        this.props.navigateTo('scanViewerScreen')
      return
      case 'up':
        if (tempSelectedFileIndex > 0) {
          tempSelectedFileIndex--
        }
        break;
      case 'down':
        if (tempSelectedFileIndex < this.state.fileList.length - 1) {
          tempSelectedFileIndex++
        }
        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        return;
      default:
        break;
    }

    this.setState({
      selectedFileIndex: tempSelectedFileIndex
    }, () => {
      this.scrollable.current.style.transform = `translateY(${parseInt(this.state.selectedFileIndex / 6) * -360}px)`
      this.scrollhandle.current.style.transform = `translateY(${parseInt(this.state.selectedFileIndex) * (270 / this.state.fileList.length)}px)`
    })

    //270
  }


  render() {
    return (
      <div className="files component">
        <div className="files-container">
          <div className="file-list-container">
            <div className="file-list-titles">

              <div className="file-list-title file-list-title-a">
                File Name
              </div>

              <div className="file-list-title file-list-title-b">
                File Type
              </div>

              <div className="file-list-title file-list-title-c">
                Creation Date
              </div>

            </div>

            <div className="file-list">
              <div className="scrollable" ref={this.scrollable}>

                {
                  this.state.fileList.map((e, i) => {
                    return (
                      <div className={`file ${this.state.selectedFileIndex === i ? 'selected' : ''}`} key={i}>
                        <div className="file-a">
                          <img src={FILE_ICON} alt="file-icon" className="file-icon"></img>
                          <div className="file-item">{e}</div>
                        </div>
                        <div className="file-b">
                          <div className="file-item">Advanced</div>
                        </div>
                        <div className="file-b">
                          <div className="file-item" style={{textDecoration: 'underline'}}>12:53 24.11:2020</div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>

            </div>

          </div>
          <div className="file-scroll">
            <div className="file-scroll-top">
              <img src={UP_ICON} alt="scroll-icon" className="scroll-icon" />
            </div>

            <div className="file-scroll-bar">
              <div className="file-scroll-handle" ref={this.scrollhandle}></div>
            </div>

            <div className="file-scroll-bottom">
              <img src={DOWN_ICON} alt="scroll-icon" className="scroll-icon" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Files
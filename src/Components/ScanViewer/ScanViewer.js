import React from 'react'
import './ScanViewer.css'
import socketHelper from '../../SocketHelper'

import ScanTitle from './ScanViewerComponents/Title'
import ScanLinesInfos from './ScanViewerComponents/ScanLinesInfos'
import PlotViewer from './ScanViewerComponents/PlotViewer'

class ScanViewer extends React.Component {

  componentDidMount() {
    socketHelper.attach(this.handleSocket)
  }

  componentWillUnmount() {
    socketHelper.detach()
  }

  handleSocket = (sd) => {
    if (sd.type !== 'button') { return }
    switch (sd.payload) {
      case 'up':

        break;
      case 'down':

        break;
      case 'left':

        break;
      case 'right':

        break;
      case 'ok':

        break;
      case 'back':
        this.props.navigateTo('menuScreen')
        return;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="scan-viewer component">
        <ScanTitle
          type="advanced"
          date="16:45 12.02.2020"
        />
        {/* <ScanLinesInfos
          data={
            {
              values: {
                A: 1024, B: 1024, C: 1024, D: 1024, E: 1024, F: 1025
              }
            }
          }
        /> */}

        <PlotViewer />

      </div>
    )
  }
}

export default ScanViewer
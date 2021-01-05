import React from 'react'
import './ScanLinesInfos.css'

class ScanLinesInfos extends React.Component {
  render() {
    return (
      <div className="scan-lines-infos">

        <div className={`scan-line-info ${this.props.index === 0 ? 'selected' : ''}`}>
          <div className="line-name">A Line</div>
          <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="0" width="90" height="5" fill="#9ff734"></rect>
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#4287f5" strokeDasharray="50 50" strokeWidth="5" />
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#85176b" strokeDasharray="60 40" strokeWidth="2" />
            <line x1="5" y1="4.5" x2="95" y2="4.5" stroke="#00000050" strokeDasharray=".2 4.79" strokeWidth="1" />
          </svg>
          <div className="tags">
            <div className="water-type-tag">
              Fresh Water
            </div>

            <div className="water-type-tag">
              Rate: <span>50%</span>
            </div>

            <div className="water-type-tag">
              Salinity: <span>0.003</span>
            </div>
          </div>
        </div>

        <div className={`scan-line-info ${this.props.index === 1 ? 'selected' : ''}`}>
          <div className="line-name">B Line</div>
          <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="0" width="90" height="5" fill="#9ff734"></rect>
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#4287f5" strokeDasharray="50 50" strokeWidth="5" />
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#85176b" strokeDasharray="20 80" strokeWidth="2" />
            <line x1="5" y1="4.5" x2="95" y2="4.5" stroke="#00000050" strokeDasharray=".2 4.79" strokeWidth="1" />
          </svg>
          <div className="tags">
            <div className="water-type-tag">
              Fresh Water
        </div>

            <div className="water-type-tag">
              Rate: <span>50%</span>
            </div>

            <div className="water-type-tag">
              Salinity: <span>0.003</span>
            </div>
          </div>
        </div>


        <div className={`scan-line-info ${this.props.index === 2 ? 'selected' : ''}`}>
          <div className="line-name">C Line</div>
          <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="0" width="90" height="5" fill="#9ff734"></rect>
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#4287f5" strokeDasharray="50 50" strokeWidth="5" />
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#85176b" strokeDasharray="60 40" strokeWidth="2" />
            <line x1="5" y1="4.5" x2="95" y2="4.5" stroke="#00000050" strokeDasharray=".2 4.79" strokeWidth="1" />
          </svg>
          <div className="tags">
            <div className="water-type-tag">
              Fresh Water
        </div>

            <div className="water-type-tag">
              Rate: <span>50%</span>
            </div>

            <div className="water-type-tag">
              Salinity: <span>0.003</span>
            </div>
          </div>
        </div>

        <div className={`scan-line-info ${this.props.index === 3 ? 'selected' : ''}`}>
          <div className="line-name">D Line</div>
          <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="0" width="90" height="5" fill="#9ff734"></rect>
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#4287f5" strokeDasharray="50 50" strokeWidth="5" />
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#85176b" strokeDasharray="60 40" strokeWidth="2" />
            <line x1="5" y1="4.5" x2="95" y2="4.5" stroke="#00000050" strokeDasharray=".2 4.79" strokeWidth="1" />
          </svg>
          <div className="tags">
            <div className="water-type-tag">
              Fresh Water
        </div>

            <div className="water-type-tag">
              Rate: <span>50%</span>
            </div>

            <div className="water-type-tag">
              Salinity: <span>0.003</span>
            </div>
          </div>
        </div>

        <div className={`scan-line-info ${this.props.index === 4 ? 'selected' : ''}`}>
          <div className="line-name">E Line</div>
          <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="0" width="90" height="5" fill="#9ff734"></rect>
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#4287f5" strokeDasharray="50 50" strokeWidth="5" />
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#85176b" strokeDasharray="60 40" strokeWidth="2" />
            <line x1="5" y1="4.5" x2="95" y2="4.5" stroke="#00000050" strokeDasharray=".2 4.79" strokeWidth="1" />
          </svg>
          <div className="tags">
            <div className="water-type-tag">
              Fresh Water
        </div>

            <div className="water-type-tag">
              Rate: <span>50%</span>
            </div>

            <div className="water-type-tag">
              Salinity: <span>0.003</span>
            </div>
          </div>
        </div>

        <div className={`scan-line-info ${this.props.index === 5 ? 'selected' : ''}`}>
          <div className="line-name">F Line</div>
          <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="0" width="90" height="5" fill="#9ff734"></rect>
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#4287f5" strokeDasharray="50 50" strokeWidth="5" />
            <line x1="5" y1="2.5" x2="95" y2="2.5" stroke="#85176b" strokeDasharray="60 40" strokeWidth="2" />
            <line x1="5" y1="4.5" x2="95" y2="4.5" stroke="#00000050" strokeDasharray=".2 4.79" strokeWidth="1" />
          </svg>
          <div className="tags">
            <div className="water-type-tag">
              Fresh Water
         </div>

            <div className="water-type-tag">
              Rate: <span>50%</span>
            </div>

            <div className="water-type-tag">
              Salinity: <span>0.003</span>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default ScanLinesInfos
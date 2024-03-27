import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  onClickMode = () => {
    const {isLightMode} = this.state
    if (isLightMode === true) {
      return {className: 'light-mode', text: 'Light Mode'}
    }
    return {className: 'dark-mode', text: 'Dark Mode'}
  }

  render() {
    const {className, text} = this.onClickMode()
    return (
      <div className="container">
        <div className={`mini-container ${className}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

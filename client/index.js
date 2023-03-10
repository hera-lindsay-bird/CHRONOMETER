import React from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'))
})

if (module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import './fonts/Apercu-Bold.ttf'
import './fonts/Apercu-Light.ttf'
import './fonts/Apercu-Medium.ttf'
import './fonts/Apercu.ttf'

import './fonts/clearface.ttf'
import './fonts/clearface_bold.ttf'
import './fonts/clearface_bolditalic.ttf'

import 'normalize.css'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

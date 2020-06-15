import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './containers/Main'

import {enableMapSet} from "immer"

enableMapSet()

ReactDOM.render(<MainApp/>, document.querySelector('#root'))
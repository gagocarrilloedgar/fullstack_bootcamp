// Import react into the bundle
import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap'

import { Home } from './components/homeHooks.js'
// Import { Home } from './components/home.js'
// Import { SimpleCounterButton } from './components/simpleCounterButton.js'
// Import { TodoList } from "./components/todo-list";

//Render your react application
ReactDOM.render(<Home />, document.querySelector('#app'))

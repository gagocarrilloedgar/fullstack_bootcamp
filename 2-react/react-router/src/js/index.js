//import react into the bundle
import React from 'react'
import ReactDOM from 'react-dom'

// include your styles into the webpack bundle
import '../styles/index.css'

//import your own components
// import Home from "./component/home.jsx";
// import { HomeRouterWithCreateBrowser } from './component/HomeRouterWithCreateBrowser.jsx'
// import { HomeRouter } from './component/HomeRouter.jsx'
import { StarWarsLayout } from './StarWarsBlog'

//render your react application
ReactDOM.render(<StarWarsLayout />, document.querySelector('#app'))

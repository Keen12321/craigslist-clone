import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import FrontPage from './FrontPage'
import FirstPostPage from './FirstPostPage'
import SecondPostPage from './SecondPostPage'
import ListingsPage from './ListingsPage'
import AllListingsPage from './AllListingsPage'
import SpecificListing from './SpecificListing'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
	      <Router>
	      	<div className="mainContainer">
	      		<Route exact path="/" component={FrontPage}/>
	      		<Route path="/listings/:id" component={ListingsPage}/>
	      		<Route path="/d/:id" component={AllListingsPage}/>
	      		<Route path="/l/:id" component={SpecificListing}/>
	      		<Route path="/i" component={FirstPostPage}/>
	      		<Route path="/a" component={SecondPostPage}/>
	      	</div>
	      </Router>
	    </Provider>
    )
  }
}

export default App

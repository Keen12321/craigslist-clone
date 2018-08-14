import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'

import FrontPage from './FrontPage'
import ListingsPage from './ListingsPage'
import ThumbView from './ThumbView'
import GalleryView from './GalleryView'
import AllListingsPage from './AllListingsPage'
import SpecificListing from './SpecificListing'
import PostPage from './PostPage'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
	      <Router>
	      	<div>
	      		<Link to="/" id="headerLink">
	      			<div className="header"> Ryan's List </div>
	      		</Link>
	      		<div className="mainContainer">
		      		<Route exact path="/" component={FrontPage}/>
		      		<Route path="/listings/:id" component={ListingsPage}/>
		      		<Route path="/thumbview/:id" component={ThumbView}/>
		      		<Route path="/galleryview/:id" component={GalleryView}/>
		      		<Route path="/d/:id" component={AllListingsPage}/>
		      		<Route path="/l/:id" component={SpecificListing}/>
		      		<Route path="/posting/:id/add" component={PostPage}/>
		      	</div>
	      	</div>
	      </Router>
	    </Provider>
    )
  }
}

export default App

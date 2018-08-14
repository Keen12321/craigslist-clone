import React, { Component } from 'react'
import { getListings } from '../actions/frontPageActions'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ListingsPage extends Component {
	componentDidMount() {
		getListings(this.props.match.params.id)
	}

 	render() {
   	return (
 			<div className="listingsContainer">
 				<Link to={`/posting/${this.props.match.params.id}/add`}>POST</Link>
 				{this.props.listings.map(data => (
					<Link to={`/l/${data.id}`} className="listings">{data.name}</Link>
 				))}

 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		listings: appState.listings
	}
}

export default connect(mapStateToProps)(ListingsPage)
import React, { Component } from 'react'
import { getListings } from '../actions/frontPageActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ListingsPage extends Component {
	componentDidMount() {
		getListings(this.props.match.params.id)
	}

 	render() {
   	return (
 			<div className="listingsContainer">
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
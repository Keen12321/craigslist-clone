import React, { Component } from 'react'
import { getAllListings } from '../actions/frontPageActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AllListingsPage extends Component {
	componentDidMount() {
		getAllListings(this.props.match.params.id)
	}

 	render() {
   	return (
 			<div className="listingsContainer">
 				{this.props.allListings.map(data => (
					<Link to={`/l/${data.id}`} className="listings">{data.name}</Link>
 				))}
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		allListings: appState.allListings
	}
}

export default connect(mapStateToProps)(AllListingsPage)
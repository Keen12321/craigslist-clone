import React, { Component } from 'react'
import { getSpecific } from '../actions/frontPageActions'
import {connect} from 'react-redux'

class SpecificListing extends Component {
	componentDidMount() {
		getSpecific(this.props.match.params.id)
	}

	render() {
	  return (
	 		<div className="specificListingContainer">
	 			{this.props.specificListing.map(data => (
	 				<div className="specificListing">
						<div className="listingName">{data.name}</div>
						<img src={data.image} className="listingPicture" alt=""/>
						<div className="listingDescription">{data.description}</div>
					</div>
	 			))}
	 		</div>
	  )
	}
}

function mapStateToProps(appState) {
	return {
		specificListing: appState.specificListing
	}
}

export default connect(mapStateToProps)(SpecificListing)
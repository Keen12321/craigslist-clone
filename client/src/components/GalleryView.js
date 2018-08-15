import React, { Component } from 'react'

import { getListings } from '../actions/frontPageActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class GalleryView extends Component {
	componentDidMount() {
		getListings(this.props.match.params.id)
	}

 	render() {
   	return (
 			<div className="listingsContainer">
 				<Link to ={`/listings/${this.props.match.params.id}`}>List View</Link>
 				<Link to ={`/thumbview/${this.props.match.params.id}`}>Thumb View</Link>
 				<Link to={`/posting/${this.props.match.params.id}/add`}>POST</Link>
 				{this.props.listings.map(data => (
 					<div className="galleryViewContainer">
						<Link to={`/specificlisting/${data.id}`} className="listings">
						<img src={data.image} classname="galleryViewImg"/>
						<div>{data.name}</div>
						</Link>
					</div>
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

export default connect(mapStateToProps)(GalleryView)
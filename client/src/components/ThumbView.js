import React, { Component } from 'react'
import { getListings } from '../actions/frontPageActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ThumbView extends Component {
	componentDidMount() {
		getListings(this.props.match.params.id)
	}

 	render() {
   	return (
 			<div className="listingsContainer">
 				<Link to ={`/listings/${this.props.match.params.id}`}>List View</Link>
 				<Link to ={`/galleryview/${this.props.match.params.id}`}>Gallery View</Link>
 				<Link to={`/posting/${this.props.match.params.id}/add`}>POST</Link>
 				{this.props.listings.map(data => (
 				<Link to={`/specificlisting/${data.id}`} className="listings">
 					<div className="thumbViewContainer">
					<img src={data.image} className="thumbViewImg"/>
					<p>{data.name}</p>
					</div>
				</Link>
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

export default connect(mapStateToProps)(ThumbView)
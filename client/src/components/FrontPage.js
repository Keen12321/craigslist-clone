import React, { Component } from 'react'
import { getCategories } from '../actions/frontPageActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class FrontPage extends Component {
	componentDidMount() {
		getCategories()
	}

 	render() {
   	return (
   		<div>
	   		<div className="cityHeader">las vegas</div>
	 			<div className="frontPageContainer">
	 				{this.props.categories.map((data, i) => (
	 					<div className="categoriesContainer">
							<Link to={`/d/${data.id}`} className="categories">{data.category}</Link>
							{data.sub.map((sub, p) => (
								<Link to={`/listings/${sub.id}`} className="sub-cat">{sub.category}</Link>
							))}
						</div>
	 				))}
	 			</div>
	 		</div>
   	)
 	}
}

function mapStateToProps(appState) {
	return {
		categories: appState.categories
	}
}

export default connect(mapStateToProps)(FrontPage)
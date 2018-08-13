import React, { Component } from 'react'
import { getSecondPostPage } from '../actions/frontPageActions'
import {connect} from 'react-redux'

class SecodPostPage extends Component {
	componentDidMount() {
		getSecondPostPage()
	}
 	render() {
   	return (
 			<div>
 				{this.props.secondPostPage.map(data => (
 					<div>
						<input type="radio" name="subcat" id={data.category} value={data.id}/>
						<label htmlFor={data.category}>{data.category}</label>
					</div>
 				))}
 			</div>
   	)
 	}
}

function mapStateToProps(appState) {
 	return {
		secondPostPage: appState.secondPostPage
 	}
}

export default connect(mapStateToProps)(SecodPostPage)
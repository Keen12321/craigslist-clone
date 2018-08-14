import React, { Component } from 'react'
import { post } from '../actions/frontPageActions'

class PostPage extends Component {
	state = {
		name: '',
		image: '',
		description: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		post({
			name: this.state.name,
			image: this.state.image,
			description: this.state.description,
			child_id: this.props.match.params.id
		})
	}

 	render() {
   	return (
 			<div>
 				<form onSubmit={this.handleSubmit} action='/'>
 					<label name="name">Listing Name::</label>
					<input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
					<label name="image">Listing Picture::</label>
					<input type="text" name="image" onChange={this.handleChange} value={this.state.image}/>
					<label name="description">Description::</label>
					<textarea name="description" onChange={this.handleChange} value={this.state.description}/>
					<button type="submit">Submit</button>
	 			</form>
 			</div>	
   	)
 	}
}

export default PostPage
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAbout } from '@/actions/about'

class About extends Component {

	componentDidMount() {
		this.props.fetchAbout()
	}

	render() {
		return (
			<div className="container">
				<h2 className="title">About</h2>
				<p className="text">{this.props.about}</p>
			</div>
		);
	}
}

const mapActions = {
	fetchAbout
}

const mapStates = ({ about }) => {
	return { about }
}

export default connect(mapStates, mapActions)(About);
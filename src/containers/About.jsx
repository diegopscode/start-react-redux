import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAbout, setAbout } from '@/actions/about'

class About extends Component {

	constructor(props) {
		super(props)

		this.onHandleClick = this.onHandleClick.bind(this)
	}

	componentDidMount() {
		this.props.fetchAbout()
	}

	onHandleClick() {
		this.props.setAbout("About is changed!")
	}

	render() {
		return (
			<div className="container">
				<h2 className="title">About</h2>
				<p className="text">{this.props.about}</p>
				<br/>
				<button onClick={this.onHandleClick}>Change About</button>
			</div>
		);
	}
}

const mapActions = {
	fetchAbout,
	setAbout
}

const mapStates = ({ about }) => {
	return { about }
}

export default connect(mapStates, mapActions)(About);
import React, { Component } from 'react';
import './post';

export class dhikr extends Component {
	render() {
		return (
			<div>
				{this.props.listen.map((item) => <p>{item}</p>)}
				<p>Loading</p>
			</div>
		);
	}
}

export default dhikr;

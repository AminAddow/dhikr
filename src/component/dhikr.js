import React, { Component } from 'react';
import './post';

export class dhikr extends Component {
	render() {
		return (
			<div>
                {this.props.listen.map((item, index) => 
                <>
					<p key={item.key}>{item.text}</p>
                    <p>Read {item.times} time</p>
                    <br></br>
                </>
				)}
			</div>
		);
	}
}

export default dhikr;

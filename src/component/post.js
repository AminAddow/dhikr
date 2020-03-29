import React, { Component } from 'react';
import firebase from './../firebase';
import Dhikr from './dhikr';

class post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: []
		};
	}

	getData = () => {
		// Init connection to firestore
		var db = firebase.firestore();
		// init empty array
		var dhikr = [];
		// Retrieve data from firestore
		db.collection('morning').get().then((snapshot) => {
			snapshot.forEach((doc) => {
				var dua = doc.data().text;
				var times = doc.data().times;

				// Push data to local array
				dhikr.push(doc.data().text);
			});
			// Lenght on list -- Will be removed
			console.log(dhikr.length);
			// Conent of list. -- Will be removed
			console.log(dhikr);

			// Send local array to state
			this.setState({ list: dhikr });
		});
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div>
				<Dhikr listen={this.state.list} />
			</div>
		);
	}
}

export default post;

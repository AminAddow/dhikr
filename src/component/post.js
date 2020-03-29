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
		// var dhikr = [];

		var dhikr = [];

		// Retrieve data from firestore
		db.collection('morning').get().then((snapshot) => {
			snapshot.forEach((doc) => {
				var key = doc.data().key;
				var text = doc.data().text;
				var times = doc.data().times;

				dhikr.push({ key: key, text: text, times: times });

				console.log(' ');
				console.log(key);
				console.log(text);
				console.log(times);

				// Push data to local array
				// dhikr.push(doc.data().text);

				// this.setState((prevState) => ({
				// 	list: {
				// 		...prevState.list,
				// 		text: text,
				// 		times: times
				// 	}
				// }));
			});
			console.log(dhikr);
			// Send local array to state
			this.setState({ list: [ ...this.state.list, ...dhikr ] });
		});
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		return <div>{<Dhikr listen={this.state.list} />}</div>;
		// return <div />;
	}
}

export default post;

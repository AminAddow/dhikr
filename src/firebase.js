import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

var firebaseConfig = {
	apiKey: 'AIzaSyCIoSTqAkcX04YKVDf3Uz7VXNCspHwY-2g',
	authDomain: 'dhikr-d7cd4.firebaseapp.com',
	databaseURL: 'https://dhikr-d7cd4.firebaseio.com',
	projectId: 'dhikr-d7cd4',
	storageBucket: 'dhikr-d7cd4.appspot.com',
	messagingSenderId: '737418985546',
	appId: '1:737418985546:web:c7f7f3436dfc45d447e6b3',
	measurementId: 'G-LSBKG0BM69'
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;

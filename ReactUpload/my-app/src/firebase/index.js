import firebase from 'firebase/app';
import 'firebase/storage';
// Initialize Firebase
// firebase config here
firebase.initializeApp(config);

const storage = firebase.storage();

export {
	storage, firebase as default
}

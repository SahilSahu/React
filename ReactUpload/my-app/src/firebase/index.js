import firebase from 'firebase/app';
import 'firebase/storage';
// Initialize Firebase
var config = {
apiKey: "AIzaSyCkMWBO3__-pyJhLUG-agVd_qYdX0Min50",
authDomain: "react-6d249.firebaseapp.com",
databaseURL: "https://react-6d249.firebaseio.com",
projectId: "react-6d249",
storageBucket: "react-6d249.appspot.com",
messagingSenderId: "214512394793"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
	storage, firebase as default
}
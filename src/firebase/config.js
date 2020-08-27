import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAadGG04WkFeNYeaeFCcEJ3aZFnJ2zd6zU',
  authDomain: 'firegram-2e85a.firebaseapp.com',
  databaseURL: 'https://firegram-2e85a.firebaseio.com',
  projectId: 'firegram-2e85a',
  storageBucket: 'firegram-2e85a.appspot.com',
  messagingSenderId: '788929728611',
  appId: '1:788929728611:web:4f63f1e212b55b70d06856',
  measurementId: 'G-G7V1RYZN6B',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

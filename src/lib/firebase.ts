import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// db define
const db = firebase.firestore();

export const addData = async () => {
  await db
    .collection('users')
    .add({
      first: 'Satake',
      last: 'Yusuke',
      born: 1992,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};

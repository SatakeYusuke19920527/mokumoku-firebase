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

/**
 *
 * @param uid
 * @param name
 * @param age
 * @param country
 */
export const addData = async (name: string, age: number, country: string) => {
  db.collection('users')
    .doc(`${name}`)
    .set({
      name,
      age,
      country,
    })
    .then(function () {
      console.log('Document successfully written!');
    })
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
  return false;
};

/**
 *
 * @param name
 */
export const deleteData = async (name: string) => {
  await db
    .collection('users')
    .doc(name)
    .delete()
    .then(function () {
      console.log('Document successfully deleted!');
    })
    .catch(function (error) {
      console.error('Error removing document: ', error);
    });
  return false;
};
/**
 *
 */
export const readData = async () => {
  let users: Array<{}> = [];
  await db
    .collection('users')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        users.push(doc.data());
      });
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error);
      return error;
    });
  return users;
};

export const realTimeReadData = async () => {
  let users: Array<{}> = [];
  await db.collection('users').onSnapshot(function (docs) {
    docs.forEach((doc) => {
      users.push(doc.data());
    });
    console.log(users, 'in firebase');
    return users;
  });
  console.log(users, 'in firebase2');
};

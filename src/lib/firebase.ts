import firebase from 'firebase/app';
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

const auth = firebase.auth();
const user = auth.currentUser
const provider = new firebase.auth.GoogleAuthProvider()

export const createUser = async (email: string, password: string) => {
  let result = ''
  await auth.createUserWithEmailAndPassword(email, password)
  .then(res => {
    console.log(res)
    console.log('create user success')
    result = 'success'
    })
  .catch(err => {
    console.log(err)
    console.log('create user error')
    result = 'error'
  })
  return result
}

export const login = async (email:string, password:string) => {
  let result = ''
  await auth.signInWithEmailAndPassword(email, password)
    .then(res => {
    console.log(res)
    console.log('login success')
    result = 'success'
    })
  .catch(err => {
    console.log(err)
    console.log('login error')
    result = 'error'
  })
  return result
}

export const userNameUpdate = async (name: string) => {
  console.log(name, 'this is invoked in userNameUpdate')
  await user?.updateProfile({
      displayName: name,
    }).then(function() {
      // Update successful.
      console.log('displayName 更新')
    }).catch(function(error) {
      // An error happened.
      console.log('displayName 更新失敗')
    });
}

export const googleLogin = async () => {
  let result = ''
  await auth.signInWithPopup(provider)
  .then(user => {
    console.log(user.user?.displayName)
    result = `success`
  })
  .catch(err => {
    result = `error: ${err}`
  })
  return result
}

export const authState = async () => {
  await auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    const name = user.displayName;
    const email = user.email;
    const photoUrl = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    console.log(`name: ${name} | email: ${email} | photoUrl: ${photoUrl} | emailVerrified: ${emailVerified} | uid: ${uid}`)
  } else {
    // No user is signed in.
    console.log(user, 'in firebase else ==========================')
  }
});
}
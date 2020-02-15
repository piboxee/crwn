import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAWSxcbMGp-knw-jzFwnUsdVRw31zoFtR0",
    authDomain: "crwn-db-5f2e5.firebaseapp.com",
    databaseURL: "https://crwn-db-5f2e5.firebaseio.com",
    projectId: "crwn-db-5f2e5",
    storageBucket: "crwn-db-5f2e5.appspot.com",
    messagingSenderId: "286044570599",
    appId: "1:286044570599:web:e42af027eb47bc89beb342"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
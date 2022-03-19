import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDN1SYAAjY0HTqkkhSHkiwd8RPjwA6T-GU",
  authDomain: "crown-db-3c931.firebaseapp.com",
  projectId: "crown-db-3c931",
  storageBucket: "crown-db-3c931.appspot.com",
  messagingSenderId: "748350494718",
  appId: "1:748350494718:web:bee458d060866358c952af",
  measurementId: "G-M7EDHQGQRQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
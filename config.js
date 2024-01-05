import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA57FRD6RVXHz8C6kwhvXmF2xlJ3etkc2k",
  authDomain: "todofirebase-d133d.firebaseapp.com",
  projectId: "todofirebase-d133d",
  storageBucket: "todofirebase-d133d.appspot.com",
  messagingSenderId: "752422541745",
  appId: "1:752422541745:web:f797db7c2f1a480e78c590",
  measurementId: "G-B0SJXG8STK"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw9Rwxw-iMNJYYaVgqdSYee8j77TokMgM",
    authDomain: "clone-by-amrit.firebaseapp.com",
    projectId: "clone-by-amrit",
    storageBucket: "clone-by-amrit.appspot.com",
    messagingSenderId: "278950375540",
    appId: "1:278950375540:web:f8e5d376694b38ac9c6121",
    measurementId: "G-9C8KZ5QBNX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
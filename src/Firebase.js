// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBpJKqkAgHuM-v6YjUoC-xyEllxzsyNyjw",
    authDomain: "fir-cccd0.firebaseapp.com",
    projectId: "fir-cccd0",
    storageBucket: "fir-cccd0.appspot.com",
    messagingSenderId: "625707386726",
    appId: "1:625707386726:web:051bc0c29e95ccebeaaaa7",
    measurementId: "G-B6BE6KVJKF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export default firebaseConfig

  export {db, auth}
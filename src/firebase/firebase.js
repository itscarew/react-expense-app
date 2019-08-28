import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPUulOFAX6L0St4zvpWvZ8hIPAUDZ_VYE",
  authDomain: "expensify-1f13f.firebaseapp.com",
  databaseURL: "https://expensify-1f13f.firebaseio.com",
  projectId: "expensify-1f13f",
  storageBucket: "expensify-1f13f.appspot.com",
  messagingSenderId: "544193783401",
  appId: "1:544193783401:web:c4106278decdf1e9"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

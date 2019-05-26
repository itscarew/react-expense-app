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
// // database
// //   .ref()
// //   .once("value")
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log("Error fetching data", e);
// //   });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is working as a ${val.jobs.title}`);
// });

// // database
// //   .ref()
// //   .set({
// //     name: "Ola",
// //     age: 22,
// //     stresslevel: 9,
// //     jobs: {
// //       title: "software developer",
// //       company: "Amazon"
// //     },
// //     isSingle: true,
// //     location: {
// //       city: "Eko",
// //       country: "Nigeria"
// //     }
// //   })
// //   .then(() => {
// //     console.log("Data is saved");
// //   })
// //   .catch(error => {
// //     console.log("Data Failed in saving", error);
// //   });

// // database
// //   .ref()
// //   .update({
// //     name: "Carew",
// //     age: 21,
// //     stresslevel: "5",
// //     "jobs/company": "Andela",
// //     "location/city": "Ibadan"
// //   })
// //   .then(() => {
// //     console.log("data updated");
// //   })
// //   .catch(e => {
// //     console.log("failed updating");
// //   });

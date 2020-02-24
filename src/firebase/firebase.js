import * as firebase from 'firebase'; // imports all the named exports fron firebase(pkg) and stores as a variable firebase

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });


//  database.ref('expenses').push({
//   description: 'cable bill',
//   amount: 2900,
//   createdAt: 4857495794,
//   note: ""
// });

// database.ref().set({
//   name: "Adeola Idowu",
//   age: 28,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: "Lagos",
//     country: 'Nigeria'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('error:', error);
// });

// database.ref('age').set(29);
// database.ref('location/city').set('Abuja');

// database.ref('isSingle').remove().then(() => {
//   console.log('remove successful');
// }).catch((e) => {
//   console.log('Error! unable to remove', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data:', e);
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error fetching data', e)
// });
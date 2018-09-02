import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOO_ZPr5Sc2mCgzHo9jnFtZp36e7KDioM",
    authDomain: "expensify-5ec78.firebaseapp.com",
    databaseURL: "https://expensify-5ec78.firebaseio.com",
    projectId: "expensify-5ec78",
    storageBucket: "expensify-5ec78.appspot.com",
    messagingSenderId: "974128289327"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Expense One',
//     note: 'My first expense',
//     amount: '2400',
//     createdAt: 0
// });
//
// database.ref('expenses').push({
//     description: 'Expense Two',
//     note: 'My first expense',
//     amount: '320',
//     createdAt: 0
// });
//
// database.ref('expenses').push({
//     description: 'Expense Three',
//     note: 'My first expense',
//     amount: '7000',
//     createdAt: 0
// });

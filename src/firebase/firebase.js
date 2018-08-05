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

database.ref().set({
    name: 'Michael James',
    age: 27,
    isSingle: false,
    location: {
        city: 'Austin',
        country: 'United States'
    }
});

// database.ref().set('This is my data');

database.ref('age').set(28);
database.ref('location/city').set('Savannah');
database.ref('attributes').set({
    height: '6.4',
    weight: 235
});

import * as firebase from 'firebase';
import moment from 'moment';

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

export { firebase, database as default};

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('removed: ', snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('changed: ', snapshot.val());
// });

// // database.ref('expenses').push({
// //     description: 'Description',
// //     note: 'First note',
// //     amount: 10000,
// //     createdAt: new Date().getTime()
// // });

// // database.ref('expenses').push({
// //     description: 'Description',
// //     note: 'Second note',
// //     amount: 24000,
// //     createdAt: new Date().getTime()
// // });

// // database.ref('expenses').push({
// //     description: 'Description',
// //     note: 'Thid note',
// //     amount: 15000,
// //     createdAt: new Date().getTime()
// // });



// // database.ref('notes/-MSEPJAGYP7KqJBD7yBs').update({
// //     body: 'Buy food'
// // });

// // database.ref('notes').push({
// //     title: 'Course topics',
// //     body: 'React native, angular, python'
// // });

// // const onValueChange = (snapshot) => {
// //     console.log(snapshot.val());
// // };

// // database.ref().on('value', onValueChange);

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         console.log(snapshot.val());
// //     }).catch((e) => {
// //         console.log('error fetching; ', e);
// //     })

// // database.ref().set({
// //     name: 'Breno Antunes',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     isSingle: false,
// //     location: {
// //         city: 'Campinas',
// //         country: 'Brazil'
// //     }
// // }).then(() => {
// //     console.log('data saved');
// // });


// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon'
// // });
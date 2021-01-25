//
// Object Destructuring
//

// const person = {
//     // name: 'Breno',
//     age: 26,
//     location: {
//         city: 'Campinas',
//         temp: 28
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} - ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);




//
// Array destructuring
//

// const address = ['Rua maria jose', 'Campinas', 'SP'];
// const [, city, state, zipCode= '13085085'] = address;
// console.log(`You are in ${city} ${state} - ${zipCode}.`)

const item = ['Coffee', 2, 2.5, 2.75];
const [name, , mediumPrice] = item;

console.log(`A medium ${name} costs $${mediumPrice}`);
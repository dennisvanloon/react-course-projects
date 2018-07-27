const person = {
    name: 'Dennis',
    age: 46,
    location: {
        city: 'Dordrecht',
        temp: 26
    }
}

console.log(`${person.name} is ${person.age} years old.`);
console.log(`It is ${person.location.temp} degrees in ${person.location.city}.`);

const {name: firstname = 'Anonymous', age} = person;
const {city, temp: temperature} = person.location;

console.log(`${firstname} is ${age} years old.`);
console.log(`It is ${temperature} degrees in ${city}.`);



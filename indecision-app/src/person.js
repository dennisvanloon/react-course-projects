console.log('person.js is running');

const isAdult = (age) => age >= 18;
const canDrink = (age) => isAdult(age);

export { isAdult, canDrink };
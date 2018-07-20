console.log('person.js is running');

const isAdult = (age) => age >= 18;
const canDrink = (age) => isAdult(age);
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };
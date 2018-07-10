// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 100));

// this keyword, no longer bound

const user = {
  name: 'Andrew',
  cities: ['Rotterdam', 'Dordrecht'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplier: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplier);
  }
};
console.log(multiplier.multiply());

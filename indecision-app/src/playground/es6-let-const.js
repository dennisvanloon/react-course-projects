var nameVar = 'Andrew';
var nameVar = 'Dennis';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Andrew Mead';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log('Firstname', firstName);
}
console.log('Firstname', firstName);

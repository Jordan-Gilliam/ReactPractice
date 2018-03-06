var nameVar = "andres";
nameVar= 'mike';
console.log('nameVar', nameVar);

let nameLet = 'jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank'; 
consol.log('nameConst', nameConst);



///////////////////////////////////////////////////////

// Block scoping 
var fullName = 'Andrew Mead';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName)
}

// breaks because not in block level {}
console.log(firstName)



// Block scoping that doesn't break when accessing firstName outside of block
const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

// doesn't break because let is defined outside of scope
console.log(firstName)
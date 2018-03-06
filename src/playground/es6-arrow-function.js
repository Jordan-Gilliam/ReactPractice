const square = function (x) {
 return x * x;
};


const squareArrow = (x) => {
  return x*x; 
};


const squareArrowCool = (x) => x * x; 

console.log(squareArrowCool(9))




// Challenge ////////////////////////


// full arrow function 
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

// test here
console.log(getFirstName('Jordan Gilliam'));



// reduced version
const getFirstName2 = (fullName) => fullName.split(' ')[0];


// test here
console.log(getFirstName2('Jordan Gilliam2'));

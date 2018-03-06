"use strict";

// arguments object - no longer bound with arrow functions 

var add = function add(a, b) {
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

"use strict";

// FIRST EXERCISE given this array, show an array without "dog"
const words = ["cat", "dog", "duck", "bear"];

// first solution -> array mutation
words.forEach((word, index) => {
  if (word === "dog") {
    words.splice(index, 1);
  }
});

/* console.log(words); */

// second solution -> new array
const newArray1 = words.filter((word) => {
  return word != "dog";
});

/* console.log(newArray1); */

// third solution
const newArray2 = [];

words.forEach((word) => {
  if (word != "dog") {
    newArray2.push(word);
  }
});

/* console.log(newArray2); */

// SECOND EXERCISE
const signaturesByColor = {
  "blue": ["maths", "chemistry"],
  "red": ["geography", "biology"],
  "yellow": ["music", "design"],
};

const signatures = ["music", "chemistry", "biology"];

const solutionArray = [];
signatures.forEach((signature) => {
  for(let [key, value] of Object.entries(signaturesByColor)) {
    if(value.includes(signature)) {
      const newObject = {
        "value": signature,
        "color": key
      };

      solutionArray.push(newObject);
    }
  }
});

/* console.log(solutionArray); */

// THIRD EXERCISE splice vs slice with an array

const array1 = ["oranges", "apples", "strawberries"];
console.log(array1);

// new array removing oranges
const array2 = array1.slice(1);
console.log(array2);

// same original array removing oranges
array1.splice(0, 1);
console.log(array1);
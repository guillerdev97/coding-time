"use strict";

// given this array, show an array without "dog"
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

console.log(solutionArray);

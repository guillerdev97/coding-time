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

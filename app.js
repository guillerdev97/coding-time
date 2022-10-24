"use strict";

// given this array, show an array without "dog"
const words = ["cat", "dog", "duck", "bear"];

// first solution -> array mutation
words.forEach((word, index) => {
  if(word === "dog") {
    words.splice(index, 1);
  }
})

console.log(words);

// second solution
const newArray = words.filter((word) => {
  return word != "dog";
});

console.log(newArray);



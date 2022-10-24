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

// secon



"use strict";

/* given an array of fruits, remove the fruits that finish with the E letter */
const fruits = ["orange", "banana", "apple", "strawberry"];

fruits.forEach((fruit, index) => {
  const lastLetter = fruit.length - 1;
  if (fruit[lastLetter] === "e") {
    fruits.splice(index, 1);
  }
});

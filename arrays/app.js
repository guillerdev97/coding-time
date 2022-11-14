"use strict";

/* given an array of fruits, remove the fruits that finish with the E letter */
const fruits1 = ["orange", "banana", "apple", "strawberry"];
const fruits2 = ["orange", "banana", "apple", "strawberry"];

fruits1.forEach((fruit, index) => {
  const lastLetter = fruit.length - 1;

  if (fruit[lastLetter] === "e") {
    fruits1.splice(index, 1);
  }
});

const newArray = fruits2.filter(fruit => fruit[fruit.length - 1] != "e");

console.log(fruits1);
console.log(newArray);

# [Lesson 11 - Arrays and Loops](https://youtu.be/EerdGm-ehJQ?t=31363)

## 11a. Create an array of numbers: const nums = [10, 20, 30]; Modify the last value in this array and change it to 99.

> **SOLUTION :**

```h
const nums = [10, 20, 30];
nums[2] = 99;
```

---

## 11b. Create a function getLastValue(array) that takes an array and returns the last value in the array. Hint: array indexes start at 0 so the last index is the number of values in the array minus 1
(lastIndex = array.length - 1).
  + getLastValue([1, 20, 22, 24, 5]) => 5
  + getLastValue(['hi', 'hello', 'good']) => 'good'

---

> **SOLUTION :**

```js
function getLastValue(array) {
  return array[array.length - 1];
}
```

---

## 11c. Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched).

  + arraySwap([1, 20, 22, 24, 5]) => [5, 20, 22, 24, 1]
  + arraySwap(['hi', 'hello', 'good']) => ['good', 'hello', 'hi']

---

> **SOLUTION :**

```js
function arraySwap(array) {
  let reversed = [];
  array.forEach((item, index) => {
    reversed[array.length - 1 - index] = item;
  });
  return reversed;
}
```

---

## 11d. Create a for loop that counts up from 0 to 10, but counts up by 2 (0, 2, 4, ..., 8, 10).

> **SOLUTION :**

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

---

## 1le. Create a for loop that counts down from 5 to 0.

> **SOLUTION :**

```js
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
```

---

## 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.

  + [1, 2, 3] => [2, 3, 4]

---

> **SOLUTION :**

```js
let original = [1, 2, 3];
let newArray = [];

original.forEach(num => {
  newArray.push(num + 1);
});

console.log(newArray);
```

---

## 11h. Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.

  + addOne([1, 2, 3]) => [2, 3, 4]
  + addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100]

---

> **SOLUTION :**

```js
function addOne(array) {
  array.forEach((item, index) => {
      array[index] = item + 1;
    });
}
```

---

## 11i. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'.

  + addNum([1, 2, 3], 2) => [3, 4, 5]
  + addNum([1, 2, 3), 3) => [4, 5, 6]
  + addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]

---

> **SOLUTION :**

```js
function addNum(array, num) {
  array.forEach((item, index) => {
      array[index] = item + num;
    });
}
```

---

## 11j. Create a function addArrays(array1, array2) that takes 2 arrays of numbers and adds each number in the arrays together.

  + addArrays([1, 1, 2], [1, 1, 3]) => [2, 2, 5]
  + addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]

---

> **SOLUTION :**

```js
function addArrays(array1, array2) {
  let arr = [];
  let maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    let val1 = array1[i] || 0;
    let val2 = array2[i] || 0;
    arr.push(val1 + val2);
  }
  return arr;
}
```

---

## 11k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.

  + countPositive([1, -3, 5]) => 2
  + countPositive([-2, 3, -5, 7, 10]) => 3

---

> **SOLUTION :**

```js
function countPositive(nums) {
  let count = 0;
  nums.forEach((num) => {
    if(num > 0){
      count++
    }
  });
  return count;
}
```

---

## 11l. Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop instead of using something like Math.min).

  + minMax([1, -3, 5]) => { min: -3, max: 5 }
  + minMax([-2, 3, -5, 7, 10]) => { min: -5, max: 10 }

---

> **SOLUTION :**

```js
function minMax(nums) {
  let result = {};
  result.min = nums[0];
  result.max = nums[0];
  for(let i = 0; i < nums.length; i++){
    result.min = nums[i] < result.min ? nums[i] : result.min;
    result.max = nums[i] > result.max ? nums[i] : result.max;
  }
  return result;
}
```

---

## 11m. Update exercise [11l.](#11l-create-a-function-minmaxnums-that-takes-an-array-of-numbers-and-returns-an-object-with-the-minimum-and-maximum-numbers-in-the-array-do-this-using-a-loop-instead-of-using-something-like-mathmin) to also handle these cases:

  + minMax([ ]) => { min: null, max: null }
  + minMax([3]) => { min: 3, max: 3 }

---

> **SOLUTION :**

```js
if (nums.length === 0) {
  result.min = null; 
  result.max = null;
}
```

---

## 11n. Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.

  + countWords(['apple', 'grape', 'apple', 'apple']) => { apple: 3, grape: 1} (Hint: you can access a property using a variable: object[variable]; This uses the value inside the variable as the property name).

---

> **SOLUTION :**

```js
function countWords(words) {
  let totalCount = {};
  words.forEach((item) => {
    if (totalCount[item]) {
      totalCount[item] += 1;
    } else {
      totalCount[item] = 1;
    }
  });
  return totalCount;
}
```

---

## 11o. Create an array of strings, loop over the array, and check if the string 'search' is inside the array. If it is, console.log() the index of 'search' in the array. If not, console '-1'.

  + ['hello', 'world', 'search', 'good'] => console.log(2)
  + ['not', 'found'] => console.log(-1)

---

> **SOLUTION :**

```js
let arr = ['hello', 'world', 'search', 'good']

for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 'search') {
    console.log(i);
  } else {
    console.log(-1);
  }
}
```

---

## 11p. Modify [11o](#11o-create-an-array-of-strings-loop-over-the-array-and-check-if-the-string-search-is-inside-the-array-if-it-is-consolelog-the-index-of-search-in-the-array-if-not-console--1) so that if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. Use break; 

  + ['hello', 'world', 'search', 'good', 'search'] => console.log(2)

---

> **SOLUTION :**

```js
for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 'search') {
    console.log(i);
    break;
  } else {
    console.log(-1);
  }
}
```

---

## 11q. Create a function findIndex(array, word) that searches an array for a string (in the 'word' parameter) and returns the index of the first appearance of the string. If it doesn't exist in the array, return -1.

  + findIndex(['green', 'red', 'blue', 'red'], 'red') => 1
  + findIndex(['green', 'red', 'blue', 'red'], 'yellow') => 1

---

> **SOLUTION :**

```js
function findIndex(array, word) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === word) {
      return i;
    }
  }
  return -1;
}
```

---

## 11r. Create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed. (Hint: loop though the array and check if each string is 'egg'. If it is 'egg' use 'continue;' to skip it. If it not 'egg' add it to the result).

  + removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']

---

> **SOLUTION :**

```js
function removeEgg(foods) {
  let newArray = [];
  for(let i = 0; i < foods.length; i++) {
    if(foods[i] === 'egg') {
      continue;
    } else {
      newArray.push(foods[i]);
    }
  }
  return newArray;
}
```

---

## 11s. Update exercise [11r](#11r-create-a-function-removeeggfoods-that-takes-an-array-of-strings-and-returns-an-array-where-the-string-egg-is-removed-hint-loop-though-the-array-and-check-if-each-string-is-egg-if-it-is-egg-use-continue-to-skip-it-if-it-not-egg-add-it-to-the-result) to only remove the first two eggs from the array.

  + removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

---

> **SOLUTION :**

```js
let count = 0
function removeEgg(foods) {
  let newArray = [];
  for(let i = 0; i < foods.length; i++) {
    if(foods[i] === 'egg' && count < 2) {
      count++;
      continue;
    } else {
      newArray.push(foods[i]);
    }
  }
  return newArray;
}
```

---


## 11t. Arrays have a method called .reverse(), which reverses the order of the values in the array. Using .reverse(), update exercise to [11s](#11s-update-exercise-11r-to-only-remove-the-first-two-eggs-from-the-array) to only remove the last two eggs from the array.

> **SOLUTION :**

```js
function removeEgg(foods) {
  let reversed = foods.reverse();
  let newArray = [];
  let count = 0;

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] === 'egg' && count < 2) {
      count++;
      continue;
    }
    else {
      newArray.push(reversed[i]);
    }
  }
  return newArray.reverse();
}
```

---

## 11u. In exercise [11t](#11t-arrays-have-a-method-called-reverse-which-reverses-the-order-of-the-values-in-the-array-using-reverse-update-exercise-to-11s-to-only-remove-the-last-two-eggs-from-the-array), one problem with .reverse() is that it doesn't create a copy of the array it is reversing. It modifies the original array. Update the code so the function doesn't modify the original array. (Hint: use the .slice() to create a copy of an array's values).

  + const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
  + console.log(removeEgg(foods)) => ['apple', 'egg', 'ham']
  + console.log(foods) => ['egg', 'apple', 'egg', 'egg', 'ham'];

  ---

> **SOLUTION :**

```js
let reversed = foods.slice().reverse();
```

---

## 11v. We'll do the famous FizzBuzz problem. Create a loop that displays 1 to 20 in the console. If the number is divisible by 3, display 'Fizz' instead of the number. If it is divisible by 5, display 'Buzz' instead. If it is divisible by the 3 and 5, display 'FizzBuzz' instead. (Reminder: divisible by 3 means num % 3 === 0).

  + 1, 2, Fizz, 4, Buzz, 7, 8, ... 13, 14, FizzBuzz, 16, 17, ...

---

> **SOLUTION :**

```js
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
```

---

## 11w. Create a copy of exercise [11q](#11q-create-a-function-findindexarray-word-that-searches-an-array-for-a-string-in-the-word-parameter-and-returns-the-index-of-the-first-appearance-of-the-string-if-it-doesnt-exist-in-the-array-return--1), where we created findIndex(). Below it, create a function unique(array) that takes an array of strings and returns an array where each string only appears once (there are no duplicates). Try to use the findIndex() function in your solution.

  + unique(['green', 'red', 'blue', 'red']) => ['green', 'red', 'blue']
  + unique(['red', 'green', 'green', 'red']) => ['red', 'green']

---

> **SOLUTION :**

```js
function unique(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if(findIndex(newArray, array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
```

---

## 11x. Create 3 files 11x.html, 11x.css and 11x.js, and copy the code for the Todo List project into these files.

  + Update the `<link>` and `<script>` elements to load 11x.css and 11x.js
  + Update the todo list to use localStorage (if we modify the todo list and refresh the page, the todo list should stay the same).
  + Hint: remember that localStorage only supports strings. You can use JSON.stringify() to convert an array into a string. 

---

> **SOLUTION :**

  + View full code here: 
    - [11x.html](./11x/11x.html)
    - [11x.css](./11x/11x.css)
    - [11x.js](./11x/11x.js)

---
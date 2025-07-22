# [Lesson 12 - Advanced Functions](https://youtu.be/EerdGm-ehJQ?t=36590)

## 12a. Create a variable called 'add' and save a function inside. This function will console.log(2+3); Run the function twice.

> **SOLUTION :**

```js
const add = function() {
  console.log(2+3);
};

add();
add();
```

---

## 12b. Continuing from exercise[12a](#12a-create-a-variable-called-add-and-save-a-function-inside-this-function-will-consolelog23-run-the-function-twice), create a function called runTwice(fun) that takes a function (as a parameter) and runs it twice.

   + runTwice(function(){console.log('12b');}); => console.log('12b') twice
   + runTwice(add); => console.log(5) twice.

---

> **SOLUTION :**

```js
function runTwice(fun) {
  fun();
  fun();
}
```

---

## 12c. Create the button below. When clicking the button, after 1 second, the text inside the button changes to 'finished!'. (Hint: use setTimeout() and the DOM)

> **SOLUTION :**

```html
<button>Start</button>
```

```js
document.querySelector('button').addEventListener('click', (e) => {
  setTimeout(() => {
    e.target.innerHTML = 'Finished!';
  }, 1000);
});
```

---

## 12d. Continuing from exercise [12c](#12c-create-the-button-below-when-clicking-the-button-after-1-second-the-text-inside-the-button-changes-to-finished-hint-use-settimeout-and-the-dom), modify the button so that when we click it, the text immediately changes to 'Loading...,' and then after 1 second, it changes to 'Finished!'.

> **SOLUTION :**

```js
document.querySelector('button').addEventListener('click', (e) => {
  e.target.innerHTML = 'Loading...';
  setTimeout(() => {
    e.target.innerHTML = 'Finished!';
  }, 1000);
});
```

---

## 12e. Create the 'Add to Cart' button below. When clicking this button, display the message 'Added' BELOW THE BUTTON. Then after two seconds, remove the mnesage.

> **SOLUTION :**

```html
<button>Add to Cart</button>
<p></p>
```

```js
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('p').textContent = 'Added';
  setTimeout(() => {
    document.querySelector('p').textContent = '';
  }, 2000);
});
```

---

## 12f. Continuing from [12e](#12e-create-the-add-to-cart-button-below-when-clicking-this-button-display-the-message-added-below-the-button-then-after-two-seconds-remove-the-mnesage), if we click the button, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, the message disappears very quickly (because the first setTimeout is still running and will make the message disappear very soon).

  + Modify the code so when we click the button, it "refreshes" the two second wait time (waits for 2 seconds again and removes the message).
  Hint: you can cancel the previous setTimeout using clearTimeout()

---

> **SOLUTION :**

```js
let timeoutId;

document.querySelector('button').addEventListener('click', () => {
  clearTimeout(timeoutId);
  document.querySelector('p').textContent = 'Added';
  timeoutId = setTimeout(() => {
    document.querySelector('p').textContent = '';
  }, 2000);
});
```

---

## 12g. Imagine we're creating a messaging app. Use setInterval() and document.title to create the feature on the right (the title changes every 1 second). 

> **SOLUTION :**

```js
let originalTitle = document.title;
let isOriginal = true;
setInterval(() => {
  document.title = isOriginal ? '(2) New messages' : originalTitle;
  isOriginal = !isOriginal;
}, 1000);

```

---

## 12h. Continuing from [12g](#12g-imagine-were-creating-a-messaging-app-use-setinterval-and-documenttitle-to-create-the-feature-on-the-right-the-title-changes-every-1-second), instead of displaying "(2) New messages" every time, save the number of messages in a variable: let messages = 2;
  + Use the number in the variable to determine what title to display.
  + Create 2 buttons 'Add'/'Remove' that increase/decrease the 'messages' variable by 1.

---

> **SOLUTION :**

```html
<button class="addBtn">Add</button>
<button class="removeBtn">Remove</button>
```
```js
let messages = 2;

document.querySelector('.addBtn').addEventListener('click', () => {
  messages++;
});
document.querySelector('.removeBtn').addEventListener('click', () => {
  messages--;
});
```

---

## 12i. Continuing from [12h](#12h-continuing-from-12g-instead-of-displaying-2-new-messages-every-time-save-the-number-of-messages-in-a-variable-let-messages--2):

  + Don't let 'messages' go below zero.
  + If messages === 0 stop changing the title and display 'App' as the title.
  + When messages > 0 start changing the title again.

---

> **SOLUTION :**

  + View full code here: 
    - [12i.html](./12i/12i.html)
    - [12i.js](./12i/12i.js)

---

## 12j. Create an arrow function called 'multiply' that takes 2 numbers, multiplies them together and returns the result.

  + multiply(2, 3) => 6
  + multiply(7, 10) => 70

---

> **SOLUTION :**

```js
const multiply = (a, b) => {
  return a * b;
}
```

---

## 12k. Continuing from exercise [12j](#12j-create-an-arrow-function-called-multiply-that-takes-2-numbers-multiplies-them-together-and-returns-the-result), write the arrow function on one line, (if you already did this, skip this exercise).

> **SOLUTION :**

```js
const multiply = (a, b) => return a * b;
```

---

## 12l. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0. Create this function using forEach() instead of a for loop.

  + countPositive([1, -3, 5]) => 2
  + countPositive([-2, 3, -5, 7, 10]) => 3 

---

> **SOLUTION :**

```js
function countPositive(nums) {
  let positiveNum = 0;
  nums.forEach((num) => {
    if(num > 0) {
      positiveNum ++;
    }
  });
  return positiveNum;
}
```

---

## 12m. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'. Create this function using .map() instead of loop.

  + addNum([1, 2, 3], 2) => [3, 4, 5]
  + addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]

---

> **SOLUTION :**

```js
function addNum(array, num) {
  return array.map((item) => item + num);
}
```

---

## 12n. Create a function removeEggs(foods) that takes an array of strings and returns an array where the string 'egg' is removed. Create this function using .filter() instead of a loop.

  + removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']

---

> **SOLUTION :**

```js
function removeEggs(foods) {
  return foods.filter((item) => item !== 'egg');
}
```

## 12o. Update exercise [12n](#12n) to only remove the first two eggs from the array. Again, use .filter() instead of a loop.

  + removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

---

> **SOLUTION :**

```js
function removeEggs(foods) {
  let eggCount = 0;

  return foods.filter((item) => {
    if (item === 'egg' && eggCount < 2) {
      eggCount++;
      return false;
    }
    return true;
  });
}
```

---

## 12p. Go back to earlier exercises in lesson 12 ([12c](#12c-create-the-button-below-when-clicking-the-button-after-1-second-the-text-inside-the-button-changes-to-finished-hint-use-settimeout-and-the-dom) - [12i](#12i-continuing-from-12h)) and switch the code to use arrow functions. (When passing a function into another function, use arrow functions. Otherwise, you can use either syntax.)

> **SOLUTION :**

Already done!

---

## 12q. Go back to the earlier exercises in lesson 12 ([12c](#12c-create-the-button-below-when-clicking-the-button-after-1-second-the-text-inside-the-button-changes-to-finished-hint-use-settimeout-and-the-dom) - [12i](#12i-continuing-from-12h)) and instead of using onclick="...", switch the code to use .addEventListener('click', ...)

> **SOLUTION :**

Already done!

---

## 12r. Make a copy of Rock Paper and Scissors game into the files 12r.html, 12r.css, and 12r.js.

  + Update the `<link>` and `<script>` elements to load 12r.css and 12r.js.
  + Also, make a copy of the images and make sure they load properly.

---

> **SOLUTION :**

  + View full code here: 
    - [12r.html](./12r/12r.html)
    - [12r.css](./12r/12r.css)
    - [12r.js](./12r/12r.js)

---

## 12s. Update the 'Auto Play' button to use .addEventListener('click', ...) instead of onclick="..."

> **SOLUTION :**

```js
document.querySelector('.auto-play-button').addEventListener('click', autoPlay);
```

  + View full code here: 
    - [12r.html](./12r/12r.html)
    - [12r.css](./12r/12r.css)
    - [12r.js](./12r/12r.js)

---

## 12t. Update the 'Auto Play' button so that when the game is auto playing, the text in the button is 'Stop Playing'. Otherwise the text in button is 'Auto Play'. 

> **SOLUTION :**

```js
document.querySelector('.auto-play-button').textContent = 'Stop Playing';
```

  + View full code here: 
    - [12r.html](./12r/12r.html)
    - [12r.css](./12r/12r.css)
    - [12r.js](./12r/12r.js)

---

## 12u. Update the code so pressing 'a' on keyboard will auto play the game.

> **SOLUTION :**

```js
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    autoPlay();
  }
});
```

  + View full code here: 
    - [12r.html](./12r/12r.html)
    - [12r.css](./12r/12r.css)
    - [12r.js](./12r/12r.js)

---

## 12v. Update the 'Reset Score' button to use .addEventListener('click', ...)

> **SOLUTION :**

```js
document.querySelector('.reset-score-button').addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
});
```

  + View full code here: 
    - [12r.html](./12r/12r.html)
    - [12r.css](./12r/12r.css)
    - [12r.js](./12r/12r.js)

---

## 12w. Update the code so pressing 'Backspace' will reset the score.

> **SOLUTION :**

```js
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  }
});
```

  + View full code here: 
    - [12r.html](./12r/12r.html)
    - [12r.css](./12r/12r.css)
    - [12r.js](./12r/12r.js)

---

## 12x. When clicking 'Reset Score' or pressing 'Backspace', instead of resetting the score immediately, display a confirmation message below the button: 

  + Clicking 'Yes' will reset the score, and hide the message.
  + Clicking 'No' will not reset the score, and hide the message.

---

> **SOLUTION :**

  + View full code here: 
    - [12x.html](./12x/12x.html)
    - [12x.css](./12x/12x.css)
    - [12x.js](./12x/12x.js)

---
# [Lesson 6 - Booleans and If-Statements](https://youtu.be/EerdGm-ehJQ?t=12829)

## 6a. Create a variable called 'hour' and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23).
+ If hour is between 6 and 12, display 'Good morning!' in the console
+ If hour is between 13 and 17, display 'Good afternoon!' in the console
+ Otherwise, display 'Good night!' in the console

> **SOLUTION :**

```js
let hour = 18;
if (hour >=6 && hour <= 12) {
  console.log('Good morning!');
} else if (hour >=13 && hour <= 17) {
  console.log('Good afternoon!');
} else {
  console.log('Good night!');
}
```

+ View full code here: [6a.html](6a.html)

---

## 6b. Continuing from [6a](#6a-create-a-variable-called-hour-and-save-the-current-hour-of-the-day-use-24-hour-format-and-save-it-as-a-number-between-0-and-23), try changing the value in the ‘hour' variable to make it display different messages.

> **SOLUTION :**

```js
hour = 7; //'Good morning!'
hour = 0; //'Good night!'
```

+ View full code here: [6a.html](6a.html)

---

## 6c. Continuing from [6a](#6a-create-a-variable-called-hour-and-save-the-current-hour-of-the-day-use-24-hour-format-and-save-it-as-a-number-between-0-and-23), create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For example: 'Good morning ${name}!'

> **SOLUTION :**

+ View full code here: [6a.html](6a.html)

---

## 6d. Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
+ Create a variable 'age' and save a person's age inside.
+ Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
  - Note: try to use the || operator in your solution.
+ Try changing the 'age' variable to display different messages.

> **SOLUTION :**

```js
let age;

if(age <= 6 || age >= 65) {
  console.log('Discount');
}
```

+ View full code here: [6d.html](6d.html)

---

## 6e. Continuing from exercise [6d](#6d-imagine-an-amusement-park-that-has-a-discount-for-children-6-years-and-younger-or-seniors-65-years-and-older), let's say the discount is only available if it is not a holiday. Create a variable: const isHoliday = true;
+ Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.
  - Note: && has a higher priority than || so you may need to use brackets () to control which code gets done first.
+ Try changing the value of isHoliday to display different messages.

> **SOLUTION :**

+ View full code here: [6d.html](6d.html)

---

## 6f. Generate a random number with Math.random(). Save it in a variable.

> **SOLUTION :**

```js
let randumNum = Math.random();
```

+ View full code here: [6f.html](6f.html)

---

## 6g. Create an if-statement and check:
+ If the number is less than 0.5, then display ‘heads' in the console.
+ Else display 'tails' in the console.

> **SOLUTION :**

```js

if(randumNum < 0.5) {
  console.log('heads');
} else {
  console.log('tails');
}
```

+ View full code here: [6f.html](6f.html)

---

## 6h. Instead of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.

> **SOLUTION :**

```js
let result;

if(randumNum < 0.5) {
  result = randumNum
} else {
  result = randumNum;
}
```

+ View full code here: [6f.html](6f.html)

---

## 6i. Let's say we're trying to guess the result. Create a variable called 'guess' and save your guess ('heads' or 'tails').
+ If your guess matches the result, display ‘You win!' in the console
+ . If your guess does not match the result, display ‘You lose!'

> **SOLUTION :**

+ View full code here: [6f.html](6f.html)

---

## 6j. (Challenge) Instead of using if-statements in the previous exercises, try switching them into ternary operators (condition? A : B).

> **SOLUTION :**

```js
let randumNum = Math.random();
let result;
let guess = 'heads';

randumNum < 0.5 ? result = 'heads': result = 'tails';

result == guess ? console.log('You win!') : console.log('You lose!');
```

---

## 6k. Let's say the cart has a maximum quantity of 10. Before updating the quantity, check if the quantity will be greater than 10:
+ If it will, display a popup saying 'The cart is full' and don't update the quantity.
+ Otherwise, update the quantity and console.log() it as usual.

> **SOLUTION :**

+ View full code here: [06-cart-quantity.html](06-cart-quantity.html)

---

## 6l. In exercises [5i](../05-variables/README.md#5i-add-the-html-structure-doctype-html-html-head-body-add-a-title-with-the-text-calculator) - [5k](../05-variables/README.md#5k-use-the-shortcuts----and---in-5i-and-5j), we created the ‘Remove from cart', '-2', and '-3' buttons. Before updating the quantity, check if it will go below 0:
+ If it will, create a popup saying 'Not enough items in the cart' and don't update the quantity.
+ Otherwise, update the quantity and console.log() it as usual.

> **SOLUTION :**

+ View full code here: [06-cart-quantity.html](06-cart-quantity.html)

---
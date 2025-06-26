# [Lesson 8 - Objects](https://youtu.be/EerdGm-ehJQ?t=19527)

## 8a. Let's say in the Amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display it in the console.

> **SOLUTION :**

```js
let product = {
  name: 'basketball',
  price: 2095,
}

console.log(product);
```

---

## 8b. Continuing from [8a](#8a-lets-say-in-the-amazon-project-we-have-a-basketball-product-this-product-has-a-name-of-basketball-a-price-of-2095-cents-create-an-object-to-represent-this-product-and-display-it-in-the-console), let's say we want to increase the price by 500 cents. Use dot notation to increase the price, and display the updated object in the console.

> **SOLUTION :**

```js
product.price += 500
console.log(product);
```

---

## 8c. Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. Display the updated object in the console.

> **SOLUTION :**

```js
product.delivery-time = '3 days';
console.log(product);
```

---

## 8d. Create a function 'comparePrice(product1, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.

> **SOLUTION :**

```js
function comparePrice(product1, product2){
  if(product1.price > product2.price) {
    return product2;
  } else if(product1.price < product2.price) {
    return product1;
  } else {
    return 'same price';
  }
}
```

+ View full code here: [8d.js](8d.js)

---

## 8e. Create a function 'isSameProduct(product1, product2)', which returns true if 2 products have the same values inside ('name' and 'price'). If not, return false. Create 2 products and try out the function. (Hint: objects are references so you can't compare them directly).

> **SOLUTION :**

```js
function isSameProduct(product1, product2){
  if(product1.name == product2.name && product1.price == product2.price) {
    return true;
  } else {
    return false;
  }
}
```

+ View full code here: [8e.js](8e.js)

---

## 8f. Using Google or an A.I. tool, search how to convert a string to all lowercase with JavaScript ('Good Morning' => 'good morning')

> **SOLUTION :**

```js
let greeting = 'Good Morning';
console.log(greeting.toLowerCase());
```

---

## 8g. Search how to repeat a string many times ('test' 2 times => 'testtest')

> **SOLUTION :**

```js
console.log('test'.repeat(2));
```

---

## 8h. We'll add localStorage to the calculator project. First, make a copy of the project from exercise [7j](../07-functions/README.md#7j-create-a-copy-of-the-calculator-project-from-exercise-5r-if-you-didnt-do-5r-copy-the-code-for-5r-from-the-solutions) (see the solution for [7j](../07-functions/README.md#7j-create-a-copy-of-the-calculator-project-from-exercise-5r-if-you-didnt-do-5r-copy-the-code-for-5r-from-the-solutions) if needed).

+ Whenever we update the calculation, save it using .setItem()
+ When the page first loads, get the calculation using .getItem()
+ Use a default value of '' if a calculation doesn't exist in local storage

---

> **SOLUTION :**

+ View full code here: [08-calculator.html](08-calculator.html)

---

## 8i. We'll improve the coin flip game from exercise [6j](../06-booleans-and-if-statements/README.md#6j-challenge-instead-of-using-if-statements-in-the-previous-exercises-try-switching-them-into-ternary-operators-condition-a--b) to be like the rock paper scissors game.

+ Copy the code from exercise [6j](../06-booleans-and-if-statements/README.md#6j-challenge-instead-of-using-if-statements-in-the-previous-exercises-try-switching-them-into-ternary-operators-condition-a--b) (see the solution for [6j](../06-booleans-and-if-statements/README.md#6j-challenge-instead-of-using-if-statements-in-the-previous-exercises-try-switching-them-into-ternary-operators-condition-a--b) if needed).
+ Create 2 buttons to play the game: 'heads', 'tails'
+ When clicking 'heads' play the game with guess = 'heads'.
+ When clicking 'tails' play the game with guess = 'tails'.
+ Create a function 'playGame(guess)' to reuse the code.

---

> **SOLUTION :**

+ View full code here: [8i.html](8i.html)

---

## 8j. Create a score object { wins: 0, losses: 0 }, update the score each time after playing, and display the score in the console.

> **SOLUTION :**

+ View full code here: [8i.html](8i.html)

---

## 8k. Use localStorage to save and load the score (hint: you'll need to use JSON.stringify() to convert the score object to a string).

> **SOLUTION :**

+ View full code here: [8k.html](8k.html)

---
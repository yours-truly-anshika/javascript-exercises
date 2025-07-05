# [Lesson 7 - Functions](https://youtu.be/EerdGm-ehJQ?t=15322)

## 7a. Create a function called 'greet' that displays the message 'Hello!' in the console. Call/run this function a few times using: greet();

> **SOLUTION :**

```js
function greet(){
  console.log('Hello!');
}

greet();
greet();
greet();
```

---

## 7b. Continuinng from [7a](#7a-create-a-function-called-greet-that-displays-the-message-hello-in-the-console-callrun-this-function-a-few-times-using-greet), add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!' Call the function a few times with different names: greet('Simon');

> **SOLUTION :**

```js
function greet(name){
  console.log(`Hello ${name}!`);
}

greet('Anshika');
greet('Aditi');
greet('Archy');
```

---

## 7c. Try calling greet() without a name (it will display 'Hello undefined!').Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead. (Hint: use an if-statement. Since undefined is a falsy value, you can use: if (!name) { ... } to check if 'name' is undefined).

> **SOLUTION :**

```js
function greet(name){
  if(!name){
    console.log('hi there!');
  } else {
    console.log(`Hello ${name}!`);
  }
}
```

---

## 7d. Create a function 'convertToFahrenheit(celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
+ Formula: Fahrenheit = (Celsius * 9 / 5) + 32
+ convertToFahrenheit(25) => 77

---

> **SOLUTION :**

```js
function convertToFahrenheit(celsius){
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}
```

---

## 7e. Create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
+ Formula: Celsius = (Fahrenheit - 32) * 5 /9
+ convertToCelsius(86) => 30

---

> **SOLUTION :**

```js
function convertToCelsius(fahrenheit){
  let celsius = (fahrenheit - 32) * 5 / 9;
  return fahrenheit;
}
```

---

## 7f. Create a function 'convertTemperature(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit.
+ convertTemperature(25, 'C') => '77F'
+ convertTemperature(86, 'F') => '30C'

  - Note: return a string, and try to reuse the functions from [7d](#7d-create-a-function-converttofahrenheitcelsius-that-takes-a-number-in-degrees-celsius-and-returns-a-number-in-degrees-fahrenheit) and [7e](#7e-create-a-function-converttocelsiusfahrenheit-that-takes-a-number-in-degrees-fahrenheit-and-returns-a-number-in-degrees-celsius).

---

> **SOLUTION :**

```js
function convertTemperature(degrees, unit){
  if(unit == 'C') {
    let fahrenheit = (degrees * 9 / 5) + 32;
    return `${fahrenheit}F;
  } else {
    let celsius = (degrees - 32) * 5 / 9;
    return `${celcius}C;
  }
}
```

---

## 7g. Create a function convertLength(length, from, to)that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles'). Note: 1 mile = 1.6 km (approximately).
+ convertLength(50, 'miles', 'km') => '80 km'
+ convertLength(32, 'km', 'miles') => '20 miles'
+ convertLength(50, 'km', 'km') => '50 km'

---

> **SOLUTION :**

```js
function convertLength(length, from, to){
  if(from == 'miles' && to == 'km'){
    let result = length * 1.6;
    console.log(`${result} km`);
  } else if (from == 'km' && to == 'miles'){
    let result = length / 1.6;
    console.log(`${result} miles`);
  } else {
    let result = length;
    console.log(`${result}`);
  }
}
```

---

## 7h. Update convertLength to support converting between km, miles, and also feet. Note: 1 mile = 5280 ft, 1 km = 3281 ft (approximately).
+ convertLength(5, 'miles', 'km') => '8 km'
+ convertLength(5, 'miles', 'ft') => '26400 ft'
+ convertLength(5, 'km', 'ft') => '16405 ft'

---

> **SOLUTION :**

+ View full code here: [7h.js](7h.js)

---

## 7i. Update convertLength so that if you give it an invalid unit, it will return Invalid unit: ${unit}.
+ convertLength(5, 'lbs', 'lbs') => 'Invalid unit: Ibs'

---

> **SOLUTION :**

+ View full code here: [7h.js](7h.js)

---

## 7j. Create a copy of the Calculator project from exercise [5r](../05-variables/README.md#5r-create-the-rest-of-the-buttons-in-the-calculator-to-create-multiple-rows-of-buttons-put-the-buttons-inside-p-elements-like-this) (if you didn't do 5r, copy the code for 5r from the solutions).
+ Notice there's a lot of duplicated code in the buttons.
+ Create a function 'updateCalculation' and reuse the code.

---

> **SOLUTION :**

+ View full code here: [07-calculator.html](07-calculator.html)

---

## 7k. Create a copy of the Cart Quantity project from exercise [6l](../06-booleans-and-if-statements/README.md#6l-in-exercises-5i---5k-we-created-the-remove-from-cart--2-and--3-buttons-before-updating-the-quantity-check-if-it-will-go-below-0).
+ Create a function 'updateCartQuantity' and reuse the code.

---

> **SOLUTION :**

+ View full code here: [07-cart-quantity.html](07-cart-quantity.html)

---

## 7l. Modify 'updateCartQuantity' so that if the quantity is invalid, alert(); and then return; (this is called an early return). An early return make our code cleaner because we can remove the ‘else-if' / 'else'.

> **SOLUTION :**

```js
if (sign === '+') {
  if (cartQuantity + number > 10) {
    alert('The cart is full');
    return;
  }
  cartQuantity += number;
}

if (sign === '-') {
  if (cartQuantity - number < 0) {
    alert('Not enough items in the cart');
    return;
  }
  cartQuantity -= number;
}

console.log(`Cart quantity: ${cartQuantity}`);
```

---
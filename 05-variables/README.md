# [Lesson 5: Variables](https://youtu.be/EerdGm-ehJQ?t=9147)

## 5a. Create a `<script>` element. Inside the `<script>`, create a variable called 'name', and save your name in this variable (as a string).

> **SOLUTION :**

```html
<script>
  let name = 'Anshika Choudhary';
</script>
```

---

## 5b. Continuing from [5a](#5a-create-a-script-element-inside-the-script-create-a-variable-called-name-and-save-your-name-in-this-variable-as-a-string), display the message 'My name is: ${name}' in the console (insert the ‘name' variable created in [5a](#5a-create-a-script-element-inside-the-script-create-a-variable-called-name-and-save-your-name-in-this-variable-as-a-string) into this message).

> **SOLUTION :**

```html
<script>
  let name = 'Anshika Choudhary';
  console.log(`My name is: ${name}`);
</script>
```

---

## 5c. At a restaurant, you order 1 coffee ($5), 2 bagels ($3 each), and 1 soup ($9). Calculate the cost and save it in a variable called 'cost'.

> **SOLUTION :**

```html
<script>
  let cost = 5 + (2 * 3) + 9;
</script>
```

---

## 5d. Continuing from [5c](#5c-at-a-restaurant-you-order-1-coffee-5-2-bagels-3-each-and-1-soup-9-calculate-the-cost-and-save-it-in-a-variable-called-cost), display ‘Cost of food: $${cost}' in the console.

> **SOLUTION :**

```html
<script>
  let cost = 5 + (2 * 3) + 9;
  console.log(`Cost of food: $${cost}`);
</script>
```

---

## 5e. Let's say the restaurant charges a 10% tax. Using the 'cost' variable from [5c](#5c-at-a-restaurant-you-order-1-coffee-5-2-bagels-3-each-and-1-soup-9-calculate-the-cost-and-save-it-in-a-variable-called-cost), calculate the tax (hint: multiply by 0.1), and save the result in a variable.

> **SOLUTION :**

```html
<script>
  let cost = 5 + (2 * 3) + 9;
  let tax = cost * 0.1;
</script>
```

---

## 5f. Continuing from [5e](#5e-lets-say-the-restaurant-charges-a-10-tax-using-the-cost-variable-from-5c-calculate-the-tax-hint-multiply-by-01-and-save-the-result-in-a-variable), display 'Tax (10%): $${tax}' in the console.

> **SOLUTION :**

```html
<script>
  let cost = 5 + (2 * 3) + 9;
  let tax = cost * 0.1;
  console.log(`Tax (10%): $${tax}`);
</script>
```

---

## 5g. Continuing from [5f](#5f-continuing-from-5e-display-tax-10-tax-in-the-console), calculate the total (cost + tax), save it in a variable called 'totalCost', and display the message 'Total cost: $${totalCost}' in the console.


> **SOLUTION :**

```html
<script>
  let cost = 5 + (2 * 3) + 9;
  let tax = cost * 0.1;
  console.log(`Tax (10%): $${tax}`);
  let totalCost = cost + tax;
  console.log(`Total cost: $${totalCost}`)
</script>
```

---

> *This exercise ([5h.](#5h-in-the-cart-quantity-project-add-2-more-buttons-4-and-5-which-increase-the-quantity-by-4-and-5-when-you-click-them-try-using-) to [5k.](#5k-use-the-shortcuts----and---in-5i-and-5j)) requires working with project which was originally created by [SuperSimpleDev](https://github.com/SuperSimpleDev) and I have referred to his [GitHub repo](https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/05-cart-quantity.html) for my solution.*

---

## 5h. In the Cart Quantity project, add 2 more buttons '+4' and '+5', which increase the quantity by 4 and 5 when you click them. Try using +=

> **SOLUTION :**

```html
<button onclick="
  cartQuantity = cartQuantity + 4;
  console.log(`Cart quantity: ${cartQuantity}`);
">+4</button>

<button onclick="
  cartQuantity = cartQuantity + 5;
  console.log(`Cart quantity: ${cartQuantity}`);
">+5</button>
```

+ View full code here: [05-cart-quantity.html](05-cart-quantity.html)

---

## 5i. In the Cart Quantity project, add a button 'Remove from cart', which decreases the cart quantity by 1.

> **SOLUTION :**

```html
<button onclick="
  cartQuantity = cartQuantity - 1;
  console.log(`Cart quantity: ${cartQuantity}`);
">Remove from cart</button>
```

+ View full code here: [05-cart-quantity.html](05-cart-quantity.html)

---

## 5j. Add 2 buttons '-2' and '-3', which decrease the quantity by 2 and 3.

> **SOLUTION :**

```html
<button onclick="
  cartQuantity = cartQuantity - 2;
  console.log(`Cart quantity: ${cartQuantity}`);
">-2</button>

<button onclick="
  cartQuantity = cartQuantity - 3;
  console.log(`Cart quantity: ${cartQuantity}`);
">-3</button>
```

+ View full code here: [05-cart-quantity.html](05-cart-quantity.html)

---

## 5k. Use the shortcuts -- and -= in [5i](#5i-in-the-cart-quantity-project-add-a-button-remove-from-cart-which-decreases-the-cart-quantity-by-1) and [5j](#5j-add-2-buttons--2-and--3-which-decrease-the-quantity-by-2-and-3).

> **SOLUTION :**

```html
  cartQuantity --;  <!--  cartQuantity = cartQuantity - 1; -->
  cartQuantity -= 2;  <!--  cartQuantity = cartQuantity - 2; --> 
  cartQuantity -= 3;  <!--  cartQuantity = cartQuantity - 3; -->
```

---

## 5i. Add the HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`). Add a `<title>` with the text ‘Calculator'

> **SOLUTION :**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Calculator</title>
</head>
<body>
  
</body>
</html>
```

+ View full code here: [05-calculator.html](05-calculator.html)

---

## 5m. Create these 5 buttons: '1', '2', '3', '+', '='

> **SOLUTION :**

```html
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>+</button>
  <button>=</button>
```

+ View full code here: [05-calculator.html](05-calculator.html)

---

## 5n. Create a `<script>`, create a variable called 'calculation', and save an empty string inside: let calculation = ''; (This variable will store the calculation like '1 + 2' or '11 + 2 + 2')

> **SOLUTION :**

```html
<script>
  let calculation = '';
</script>
```

+ View full code here: [05-calculator.html](05-calculator.html)

---
## 5o. When we click the '1' button: Add the string '1' to the calculation variable: calculation += '1'; Display the calculation in the console: console.log(calculation);

> **SOLUTION :**

```html
  <button onclick="
    calculation += '1';
    console.log(calculation);
  ">1</button>
```

+ View full code here: [05-calculator.html](05-calculator.html)

---

## 5p. Do the same for the '2', '3', and '+' buttons (add ' + ' instead of '+').

> **SOLUTION :**

+ View full code here: [05-calculator.html](05-calculator.html)

---

## 5q. When we click the '=' button, use the code: eval(calculation); (eval(...) converts the calculation string into actual math). Save the result back in 'calculation': calculation = eval(calculation);. Display the result in the console: 

> **SOLUTION :**

```html
<button onclick="
  eval(calculation);
  calculation = eval(calculation);
  console.log(calculation);
  ">=</button>
```

+ View full code here: [05-calculator.html](05-calculator.html)

---

## 5r. Create the rest of the buttons in the calculator. To create multiple rows of buttons, put the buttons inside `<p>` elements like this:
```
<p>
  <button>1</button>
  <button>2</button>
  ...
</p>
<p>
  <button>4</button>
  <button>5</button>
  ...
```

---

> **SOLUTION :**

+ View full code here: [05-calculator.html](05-calculator.html)

---
# [Lesson 3: Strings](https://youtu.be/EerdGm-ehJQ?t=4037)

## 3a. Create a text 'My name is: ' as a string.

> **SOLUTION :**

```js
string1 = 'My name is: ';
string1;
```

---

## 3b. Create your name as a string (for example: 'Simon').

> **SOLUTION :**

```js
string2 = 'Anshika Choudhary';
string2;
```

---

## 3c. Using concatenation, add the 2 strings from [3a.](#3a-create-a-text-my-name-is--as-a-string) and [3b.](#3b-create-your-name-as-a-string-for-example-simon) together to create the text: 'My name is: __' (replace __ with your name).

> **SOLUTION :**

```js
string1 = 'My name is: ';
string2 = 'Anshika Choudhary';
string1 + string2;
```

---

## 3d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $__' (replace __ with the total you calculated).

> **SOLUTION :**

```js
let totalCost = 5 + 3;
let result = 'Total cost: $' + totalCost;
result;
```

---

## 3e. Do the same thing as [3d](#3d-at-a-restaurant-you-order-1-coffee-5-and-1-bagel-3-using-math-calculate-the-total-cost-and-using-concatenation-create-the-text-total-cost-__-replace-__-with-the-total-you-calculated), but use the template string and interpolation.

> **SOLUTION :**

```js
let totalCost = 5 + 3;
let result = `Total cost : $${totalCost}`;
result;
```

---

## 3f. Display the text from [3e](#3e-do-the-same-thing-as-3d-but-use-the-template-string-and-interpolation) in a popup using alert(...);

> **SOLUTION :**

```js
let totalCost = 5 + 3;
let result = `Total cost : $${totalCost}`;
alert(result);
```

---

## 3g. You order 1 coffee($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $__' (hint: calculate in cents to avoid inaccuracies)

> **SOLUTION :**

```js
let totalCost = (599 + 295) / 100;
let result = 'Total cost: $' + totalCost;
result;
```

---

## 3h. Do the same thing as [3g](#3g-you-order-1-coffee599-and-1-bagel-295-using-math-calculate-the-total-cost-and-using-concatenation-create-the-text-total-cost-__-hint-calculate-in-cents-to-avoid-inaccuracies), but use a template string and interpolation.

> **SOLUTION :**

```js
let totalCost = (599 + 295) / 100;
let result = `Total cost : $${totalCost}`;
result;
```

---

## 3i. Display the text from [3h](#3h-do-the-same-thing-as-3g-but-use-a-template-string-and-interpolation) in a popup.

> **SOLUTION :**

```js
let totalCost = (599 + 295) / 100;
let result = `Total cost : $${totalCost}`;
alert(result);
```

---

## 3j. Using a multi-line string, create the text from [3h](#3h-do-the-same-thing-as-3g-but-use-a-template-string-and-interpolation) and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.

> **SOLUTION :**

```js
let totalCost = (599 + 295) / 100;
let result = `Total cost : $${totalCost}`;
alert(`${result}
Thank you, come again!`);
```

---

## 3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).

> **SOLUTION :**

```js
let firstLine = `Items (${2 + 2}): $${2 * (2095 + 799) / 100}`;
firstLine;
```

---

## 3l. Create the second line of text: 'Shipping & handling: $9.98' (use  math).

> **SOLUTION :**

```js
let secondLine = `Shipping & handling: $${(499 + 499) / 100}`;
secondLine;
```

---

## 3m. Create the third line: 'Total before tax: $67.86' (use math)


> **SOLUTION :**

```js
let thirdLine = `Total before tax: $${((2 * (2095 + 799)) + (2 * 499)) / 100}`;
thirdLine;
```

---

## 3n. Create the fourth line of text: 'Estimated tax (10%): $6.79' (use math and Math.round(...); to calculate the exact number).

> **SOLUTION :**

```js
let fourthLine = `Estimated tax (10%): $${Math.round(((2 * (2095 + 799)) + (2 * 499)) * 0.1) / 100}`;
fourthLine;
```

---
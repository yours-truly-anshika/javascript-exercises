# [Lesson 2: Numbers and Math](https://youtu.be/EerdGm-ehJQ?t=2586)

## 2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.

> **SOLUTION :**

```js
10 + (3 * 8) + 5
```

---

## 2b. You're at a restaurant with two friends (3 people in total) and make the same order as [2a.](#2a-at-a-restaurant-you-order-1-soup-for-10-3-burgers-for-8-each-and-1-ice-cream-for-5-use-javascript-to-calculate-the-cost-of-the-order) Calculate how much each person pays.

> **SOLUTION :**

```js
(10 + (3 * 8) + 5) / 3
```

---

## 2c. Calculate the total cost of a toaster ($18.50) and two shirts ($7.50 each).

> **SOLUTION :**

```js
(1850 + (750 * 2)) / 100
```

---

## 2d. Calculate the 10% tax for the total in exercise [2c.](#2c-calculate-the-total-cost-of-a-toaster-1850-and-two-shirts-750-each) 

> **SOLUTION :**

```js
( (1850 + (750 * 2)) / 100 ) * 0.1
```

---

## 2e. Calculate a 20% tax for the total in [2c.](#2c-calculate-the-total-cost-of-a-toaster-1850-and-two-shirts-750-each) (remember that 1% = 1/100, so 20% = 20 / 100 = 0.2).

> **SOLUTION :**

```js
( (1850 + (750 * 2)) / 100 ) * 0.2
```

---

## 2f. Calculate the cost of the products (before shipping and taxes). Hint: calculate in cents to avoid inaccuracies

> **SOLUTION :**

```js
(2095 + 1899 + 799) / 100
```

---

## 2g. Calculate the Total before tax.

> **SOLUTION :**

```js
((2095 + 1899 + 799) + 499) / 100
```

---

## 2h. Calculate the 10% tax exactly. Hint: use Math.round() 

> **SOLUTION :**

```js
Math.round((2095 + 1899 + 799 + 499) * 0.1) /100
```

---

## 2i. Calculate the Order total at the bottom.


> **SOLUTION :**

```js
((2095 + 1899 + 799) + 499) / 100 + Math.round((2095 + 1899 + 799 + 499) * 0.1) /100
```

---

## 2j. Let's say we want to always round a number down (2.8 => 2) Using Google or an A.I. tool, search for the code to do this.

> **SOLUTION :**

```js
Math.floor(2.8);
```

---

## 2k. Let's always round a number up (2.2 => 3). Search how to do this.

> **SOLUTION :**

```js
Math.ceil(2.2);
```

---

## 2l. The temperature is 25°C. Calculate the temperature in Fahrenheit. (77)

> **SOLUTION :**

```js
(25 * 9/5) + 32
```

---

## 2m. The temperature is 86°F. Calculate the temperature in Celcius. (30)

> **SOLUTION :**

```js
(86 - 32) * 5/9
```

---

## 2n. The temperature is -5°C. Calculate the temperature in Fahrenheit. (23)

> **SOLUTION :**

```js
(-5 * 9/5) + 32
```

---
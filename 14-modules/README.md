# [Lesson 14 - Modules](https://youtu.be/EerdGm-ehJQ?t=50149)

## 14a. In [checkout.html](./project-folder/checkout.html), find the element that displays "3 items" and delete the text inside. It should display "Checkout ()" when the page loads.   

> **SOLUTION :**

```html
<div class="checkout-header-middle-section">
  Checkout (<a class="return-to-home-link"
    href="amazon.html"></a>)
</div>
```

+ View full code here: [checkout.html](./project-folder/checkout.html)

---

## 14b.  In [checkout.js](./project-folder/scripts/checkout.js), when the page loads, calculate the actual quantity of products in the cart, and display it in the header: `${quantity} items`

Hints:
  + In amazon.js, inside the function updateCartQuantity(), we wrote some code to calculate the cart quantity. Reuse this code.
  + In checkout.html, you'll need to add a class to the element so you can select it with the DOM and change the innerHTML

---

> **SOLUTION :**

+ View full code here:
  - [checkout.js](./project-folder/scripts/checkout.js)

---

## 14c. Continuing from [14b](#14b--in-checkoutjs-when-the-page-loads-calculate-the-actual-quantity-of-products-in-the-cart-and-display-it-in-the-header-quantity-items), also calculate and display the quantity in the header when clicking "delete".

  + First, create a function updateCartQuantity() and put the code from [14b](#14b--in-checkoutjs-when-the-page-loads-calculate-the-actual-quantity-of-products-in-the-cart-and-display-it-in-the-header-quantity-items) inside
  + Run this function when loading the page and when clicking delete (notice that this function doesn't conflict with updateCartQuantity in [amazon.js](./project-folder/scripts/amazon.js) because we're using modules)


> **SOLUTION :**

+ View full code here:
  - [checkout.js](./project-folder/scripts/checkout.js)

---

## 14d. If we open the home page ([amazon.html](./project-folder/amazon.html)) notice the cart quantity in the top-right always starts at 0.

  + Remove the text "O" (so the cart quantity starts as blank)
  + When the page loads, calculate the cart quantity and display it in the top right (reuse the updateCartQuantity function)

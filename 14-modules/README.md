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

---

> **SOLUTION :**

+ View full code here: [amazon.js](./project-folder/scripts/amazon.js)

---

## 14e.  Inside the function updateCartQuantity, we have some code that calculates the cart quantity (creates a variable, loops through the cart, and adds up all the quantities). Notice this code is repeated in [checkout.js](./project-folder/scripts/checkout.js) and [amazon.js](./project-folder/scripts/amazon.js).

  + Create a function calculateCartQuantity() and move this code into the function so we can reuse it
  + Put calculateCartQuantity() inside [cart.js](./project-folder/data/cart.js) (because this code relates to the cart) and use export/import to share it between the 2 files

---

> **SOLUTION :**

+ View full code here: 
  - [cart.js](./project-folder/data/cart.js)
  - [amazon.js](./project-folder/scripts/amazon.js)
  - [checkout.js](./project-folder/scripts/checkout.js)

---

## 14f.  In [checkout.js](./project-folder/scripts/checkout.js), get all the "Update" links from the page and add a "click" event listener to each link. Also, attach the productid to each link. When clicking the link, get the productid and console.log() it.

> **SOLUTION :**

```js
document.querySelectorAll('.js-update-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    console.log(productId)
  });
});
```

---

## 14g. Add 2 HTML elements after the "Update" link:

  + An `<input class="quantity-input">` (for entering a new quantity)
  + A `<span class="save-quantity-link">Save</span>` (to save the quantity)
  + Style the `<input>` and set its width to 30px (put the styles in the file: styles/pages/checkout/checkout.css)
  + Add the class "link-primary" to the `<span>`

---

> **SOLUTION :**

+ View full code here: 
  - [checkout.js](./project-folder/scripts/checkout.js)
  - [checkout.css](./project-folder/styles/pages/checkout/checkout.css)

---

## 14h. Make "Save" appear when clicking "Update"

  + When clicking "Update", get the cart-item-container for the product, and add the class "is-editing-quantity" to the container (use .classList)
  + In [checkout.css](./project-folder/styles/pages/checkout/checkout.css), style the `<input>` & "Save" link and add display: none; (they will be invisible at the start)
  + The CSS ".is-editing-quantity .quantity-input {...}" styles elements with class "quantity-input" inside an element with class "is-editing-quantity"
  + Use this, and "display: initial;" (resets the display property) to make the `<input>` appear when editing the quantity. Same for the "Save" link.

---

> **SOLUTION :**

+ View full code here: 
  - [checkout.js](./project-folder/scripts/checkout.js)
  - [checkout.css](./project-folder/styles/pages/checkout/checkout.css)

---

## 14i. Using similar CSS selectors as [14h](#14h-make-save-appear-when-clicking-update), make the quantity and "Update" link disappear when editing the quantity.

> **SOLUTION :**

+ View full code here: 
  - [checkout.js](./project-folder/scripts/checkout.js)
  - [checkout.css](./project-folder/styles/pages/checkout/checkout.css)

---

## 14j. Now we'll implement switching between "Update" and "Save". Add "click" event listeners to all "Save" links. When clicking "Save", do the opposite of "Update": get the cart-item-container for the product, and remove the class "is-editing-quantity". This should reverse all the styling that's applied when editing the quantity.

> **SOLUTION :**

```js
document.querySelectorAll('.save-quantity-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.remove('is-editing-quantity');
  });
});
```

+ View full code here: [checkout.js](./project-folder/scripts/checkout.js)

---

## 14k. When clicking "Save", use the DOM to get the quantity `<input>`  for the product, and get the value inside (remember to convert this value to a number). This will be the new quantity of the product in the cart.

> **SOLUTION :**

```js
const quantityInput = Number(document.querySelector('.quantity-input').value);

document.querySelector(`.quantity-label`).textContent = quantityInput;
```

+ View full code here: [checkout.js](./project-folder/scripts/checkout.js)

---

## 14l. In [cart.js](./project-folder/data/cart.js), create a function updateQuantity(productID, newQuantity) which will find a matching productId in the cart, and update its quantity to the new quantity (remember to save to storage after).

> **SOLUTION :**

```js
export function updateQuantity(productId, newQuantity) {
  const matchingItem = cart.find(item => item.productId === productId);
  matchingItem.quantity = newQuantity;
  saveToStorage();
}
```

+ View full code here:
  - [cart.js](./project-folder/data/cart.js)
  - [checkout.js](./project-folder/scripts/checkout.js)

---

## 14m. Now that we've updated the quantity in the cart, the last step is to update the quantity in the HTML. Update these 2 places:
  + Inside the product
  + Inside the header at the top

> **solution :**

```js
export function updateQuantity(productId, newQuantity) {
  const matchingItem = cart.find(item => item.productId === productId);
  matchingItem.quantity = newQuantity;
  saveToStorage();
  calculateCartQuantity('.return-to-home-link');
}
```

+ View full code here: [cart.js](./project-folder/data/cart.js)

---
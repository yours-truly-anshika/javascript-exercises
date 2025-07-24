# [Lesson 13 - Amazon Project](https://youtu.be/EerdGm-ehJQ?t=44841)

## 13a. The HTML element for a dropdown selector is `<select>`. Use Ctrl + F OR Cmd + F to find this code (in [amazon.js](project-folder/scripts/amazon.js))   

> **SOLUTION :**
Done!

---

## 13b. When generating the HTML, add a unique class to `<select>` to iidentify which product the dropdown is for (class="js-quality-selector-${product.id}") 

> **SOLUTION :**

```js
<select class="js-quality-selector-${product.id}">
  <option selected value="1">1</option>
  <option value="2">2</option>
  |
  |
  |
  <option value="10">10</option>
</select>
```

+ View full code here: [amazon.js](./project-folder/scripts/amazon.js)

---

## 13c. When clicking the 'Add to Cart' button, use the DOM to get quantity selector (the `<select>` element) for the product. Hint: use document.querySelector(`.js-quality-selector-${productId}`)

> **SOLUTION :**

```js
const quantitySelector = document.querySelector(`.js-quality-selector-${productId}`);
```

---

## 13d. Get the value selected in the quantity selector (to get the value out of a `<select>` element, you acn use teh property '.value')

> **SOLUTION :**

```js
const selectedQuantity = quantitySelector.value;
```

---

## 13e. When updating the cart, instead of using a quantity of 1 every time, use the quantity that we got from [13d.](#13d-get-the-value-selected-in-the-quantity-selector-to-get-the-value-out-of-a-select-element-you-acn-use-teh-property-value) Hint: in order for the math to work properly, convert the value from [13d](#13d-get-the-value-selected-in-the-quantity-selector-to-get-the-value-out-of-a-select-element-you-acn-use-teh-property-value) into a number first using Number() (since values we get from the DOM are strings by default)

> **SOLUTION :**

+ View full code here: [amazon.js](./project-folder/scripts/amazon.js)

---

## 13f. Select a quality other than 1 and clcik 'Add to Cart'. The quantity selector should now work. Check the changes for [13a](#13a-the-html-element-for-a-dropdown-selector-is-select-use-ctrl--f-or-cmd--f-to-find-this-code-in-amazonjs) - [13e](#13e-when-updating-the-cart-instead-of-using-a-quantity-of-1-every-time-use-the-quantity-that-we-got-from-13d-hint-in-order-for-the-math-to-work-properly-convert-the-value-from-13d-into-a-number-first-using-number-since-values-we-get-from-the-dom-are-strings-by-default) in Git and commit the changes. 

> **SOLUTION :**
Done!

---

## 13g. We'll add some more products to the page.

  + Inside [data/products.js](./project-folder/data/products.js) add some more objects to the array.
  + For the id, use any id that you want, like 'id1', 'id2' etc. (just make sure its unique).
  + For the image, I've provided "[images/products/backpack.jpg](./project-folder/images/products/backpack.jpg)" and "[images/products/umbrella.jpg](./project-folder/images/products/umbrella.jpg)" or find an image yourself online.
  + For the name, rating and priceCents, use any values that you want.

---

> **SOLUTION :**

+ View full code here: [product.js](./project-folder/data/products.js)

---

## 13h. We'll review some JavaScript shortcuts we can use. In [amazon.js](./project-folder/scripts/amazon.js):

  + Search for the code 'const productId = button.dataset.productId;' and use the destructuring shortcut to simplify it.
  + Search for 'cart.push({' and use shorthand property in the 2 lines below this code.

---

> **SOLUTION :**

+ View full code here: [product.js](./project-folder/data/products.js)

---

## 13i. Add the unique class to this element (like we did in exercise [13b](#13b-when-generating-the-html-add-a-unique-class-to-select-to-iidentify-which-product-the-dropdown-is-for-classjs-quality-selector-productid)) to identify which product it is for.

---

> **SOLUTION :**

+ View full code here: [amazon.js](./project-folder/scripts/amazon.js)

---

## 13j. When clicking 'Add to Cart', use the DOM to get the 'Added' message element for the product (like we did in exercise [13c](#13c-when-clicking-the-add-to-cart-button-use-the-dom-to-get-quantity-selector-the-select-element-for-the-product-hint-use-documentqueryselectorjs-quality-selector-productid))

> **SOLUTION :**

```js
const addedProduct = document.querySelector(`.js-added-product-${productId}`);
```

+ View full code here: [amazon.js](./project-folder/scripts/amazon.js)

---

## 13k. Add a class to the message element using .classList.add(). Then, in [style/pages/amazon.css](./project-folder/styles/pages/amazon.css), style this class so it has opacity: 1;

> **SOLUTION :**

```js
addedProduct.classList.add('added-to-cart-visible');
```
```css
.added-to-cart-visible {
  opacity: 1;
}
```

+ View full code here: 
  - [amazon.js](./project-folder/scripts/amazon.js)
  - [amazon.css](./project-folder/styles/pages/amazon.css)
---

## 13l. After 2 seconds (use setTimeout), make the message disappear by removing the class.

> **SOLUTION :**

```js
setTimeout(() => {
  addedProduct.classList.remove('added-to-cart-visible');
}, 2000);
```

+ View full code here: [amazon.js](./project-folder/scripts/amazon.js)

---

## 13m. If we click 'Add to cart', wait 1 to 1.5 seconds, and click again, the message disappears quickly (since the previous setTimeout is still running and will make the message disappear soon).

  + Modify the code so when we click 'Add to cart', it "refreshes" the 2 second wait time (waits 2 seconds again and message disappears)
  + Hint: you can cancel the previous setTimeout using clearTimeout()

---

> **SOLUTION :**

+ View full code here: [amazon.js](./project-folder/scripts/amazon.js)

---
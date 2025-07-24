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

+ View full code here: [amazon.js](project-folder/scripts/amazon.js)

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

+ View full code here: [amazon.js](project-folder/scripts/amazon.js)

---

## 13f. Select a quality other than 1 and clcik 'Add to Cart'. The quantity selector should now work. Check the changes for [13a](#13a-the-html-element-for-a-dropdown-selector-is-select-use-ctrl--f-or-cmd--f-to-find-this-code-in-amazonjs) - [13e](#13e-when-updating-the-cart-instead-of-using-a-quantity-of-1-every-time-use-the-quantity-that-we-got-from-13d-hint-in-order-for-the-math-to-work-properly-convert-the-value-from-13d-into-a-number-first-using-number-since-values-we-get-from-the-dom-are-strings-by-default) in Git and commit the changes. 

> **SOLUTION :**
Done!

---

## 13g. We'll add some more products to the page.

  + Inside data/products.js add some more objects to the array.
  + For the id, use any id that you want, like 'id1', 'id2' etc. (just make sure its unique).
  + For the image, I've provided "images/products/backpack.jpg" and "images/products/umbrella.jpg" or find an image yourself online.
  + For the name, rating and priceCents, use any values that you want.

---

> **SOLUTION :**


---
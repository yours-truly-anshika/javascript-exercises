# [Lesson 9 - DOM](https://youtu.be/EerdGm-ehJQ?t=23907)

## 9a. Create a `<button>9a</button>`. Use document.querySelector('button') to get the button from the page, and then display it in the console.

> **SOLUTION :**
```html
<button>9a</button>
```
```js
let btn = document.querySelector('button');
console.log(btn);
```

---

## 9b. Continuing from [9a](#9a-create-a-button9abutton-use-documentqueryselectorbutton-to-get-the-button-from-the-page-and-then-display-it-in-the-console), create another button `<button>9b</button>` below. Using JavaScript, change the text in the second button to '9b done!' (hint: add a class and use .querySelector).

> **SOLUTION :**

```html
<button>9a</button>
<button class="secondBtn">9b</button>
```
```js
let btn = document.querySelector('.secondBtn');
btn.textContent = '9b done!';
```

---

## 9c. Create 2 buttons 'heads' and 'tails', and a paragraph (`<p></p>`) underneath. When clicking the 'heads' button, display 'You chose: heads' in the paragraph. When the 'tails' button, display 'You chose: tails'.

> **SOLUTION :**

+ View full code here: 
  - [9c.html](./9c/9c.html)
  - [9c.js](./9c/9c.js)

---

## 9d. Create a text box (`<input>`) and a submit button. When clicking 'Submit', display 'Your name is: `${text}`' on the page (${text} = the text inside the text box) (hint: use .value to get the text inside an `<input>`).

> **SOLUTION :**

+ View full code here:   
  - [9d.html](./9d/9d.html)
  - [9d.js](./9d/9d.js)

---

## 9e. Modify exercise 9d so that when you press 'Enter' in the `<input>`, it will also display the same message on the page (hint: use onkeydown and the event object).


> **SOLUTION :**

```js
name.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    displayResult(name.value.trim());
  }
});
```

+ View full code here:   
  - [9d.html](./9d/9d.html)
  - [9d.js](./9d/9d.js)

---

## 9f. Continuing from [9e](#9e-modify-exercise-9d-so-that-when-you-press-enter-in-the-input-it-will-also-display-the-same-message-on-the-page-hint-use-onkeydown-and-the-event-object), create a function to reuse the code (if you already did this, skip this exercise).

> **SOLUTION :**

Already did!

---

## 9g. Create a 9g.html and copy the code from [09-dom-projects.html](https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/09-dom-projects.html) into this file. In the Amazon Shipping Calculator, enter a cost of 7.99 and click 'Calculate'. What issue do you see? Find a fix for this issue. 

> **SOLUTION :**

+ View full code here: [9g.html](./9g/9g.html)

---

## 9h. Let's create the project on the right: 

  + Whenever we type in the text box, update the text on the page.
  + To do this, we'll learn another event called `<input onkeyup="...">`.
  + This runs code after we press a key and release it (key comes up).

  > **SOLUTION :**

  + View full code here: 
    - [9g.html](./9g/9g.html)
    - [9g.js](./9g/9g.js)

---

## 9i. We'll improve the Cart Quantity Project.

  + Make a copy of exercise [7l](../07-functions/README.md#7l-modify-updatecartquantity-so-that-if-the-quantity-is-invalid-alert-and-then-return-this-is-called-an-early-return-an-early-return-make-our-code-cleaner-because-we-can-remove-the-else-if--else) (see the solution of [7l](../07-functions/README.md#7l-modify-updatecartquantity-so-that-if-the-quantity-is-invalid-alert-and-then-return-this-is-called-an-early-return-an-early-return-make-our-code-cleaner-because-we-can-remove-the-else-if--else) if needed).
  + Create a paragraph (`<p></p>`) to display the quantity.
  + Whenever we update the  quantity, display it on the page instead of in the console. Also, display the quantity when page first loads.

> **SOLUTION :**

  + View full code here: [9i.html](./9i/9i.html)

---

## 9j. We'll improve the calculator project.

  + Make a copy of exercise [8h.](../08-objects/README.md#8h-well-add-localstorage-to-the-calculator-project-first-make-a-copy-of-the-project-from-exercise-7j-see-the-solution-for-7j-if-needed).
  + Whenever we update the calculation, display it on the page instead of in the console.
  + When the page first loads, if a calculation exits in localStorage, display it on the page.

  > **SOLUTION :**

  + View full code here: [9j.html](./9j/9j.html)

---
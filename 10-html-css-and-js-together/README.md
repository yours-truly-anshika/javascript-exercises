# [Lesson 10 - HTML, CSS and JS together](https://youtu.be/EerdGm-ehJQ?t=27724)

Create the following buttons using HTML and CSS. The styles don't have to be exact (just use your best judgement).

## 10a. Amazon button.

> **SOLUTION :**

+ View full code here: [10a.html](./10a/10a.html)

---

## 10b. Uber buttons.

> **SOLUTION :**

+ View full code here: [10b.html](./10b/10b.html)

---

## 10c. ClassList has another method, classList.contains('class-name'), which checks if an element has a class.

  + Create a button: `<button class="js-button">Test</button>`
  + Use document.querySelector() and classList.contains('js-button') to check if this button has the class 'js-button'.
  + console.log() the result.

---

> **SOLUTION :**
```html
<button class="js-button">Test</button>
```
```js
let btn = document.querySelector('button');
console.log(btn.classList.contains('js-button'));
```

---

## 10d. Create the button on the right. When clicking this button, it should turn ON / OFF. Hints:

  + When clicking the button, add or remove the class 'is-toggled', and use it to change the styling.
  + Use if (classList.contains('is-toggled')) to decide whether to add or remove the 'is-toggled' class.

  ---

> **SOLUTION :**

+ View full code here: 
  - [10d.html](./10d/10d.html)
  - [10d.js](./10d/10d.js)

---

## 10e. Continuing from [10d](#10d-amazon-button), create 3 buttons that can be turned ON / OFF.

> **SOLUTION :**

+ View full code here: 
  - [10d.html](./10d/10d.html)
  - [10d.js](./10d/10d.js)

---

## 10f. Continuing from [10e](#10e-continuing-from-10d-create-3-buttons-that-can-be-turned-on--off), use a function to reuse the code, and separate each language into its own file (if you didn't do this already).

> **SOLUTION :**

Already done!

---

## 10g. Modify [10f](#10f-continuing-from-10e-use-a-function-to-reuse-the-code-and-separate-each-language-into-its-own-file-if-you-didnt-do-this-already) so that only one button can be ON at a time.

> **SOLUTION :**

+ View full code here: 
  - [10g.html](./10g/10g.html)
  - [10g.js](./10g/10g.js)

---

## 10h. Create a file 10h.html and copy the code from [10-dom-projects.html](https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/10-dom-projects.html). In the Amazon Shipping Calculator, if we type a number less than 0, display a red error message below the text box:

> **SOLUTION :**

+ View full code here: [10h.html](./10h/10h.html)

---

## 10i. We'll style the calculator project using CSS.

  + Make a copy of exercise [9j](../09-dom/README.md#9j-well-improve-the-calculator-project).
  + In your browser, go to: [supersimple.dev/projects/calculator-final](supersimple.dev/projects/calculator-final). This is the final design for the project.
  + Using CSS, style the calculator project to look like the final design on the right.

---

> **SOLUTION :**

+ View full code here: [10i.html](./10i/10i.html)

---

## 10j. Continuing from exercise [10i](#10i-well-style-the-calculator-project-using-css), separate each language into its own file (if you didn't do this already).

> **SOLUTION :**

+ View full code here: 
  - [10j.html](./10j/10j.html)
  - [10j.css](./10j/10j.css)
  - [10j.js](./10j/10j.js)

---
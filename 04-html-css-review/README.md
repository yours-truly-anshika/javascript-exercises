# [Lesson 4: HTML CSS Review, console.log](https://youtu.be/EerdGm-ehJQ?t=6656)

> *Quick code snippets are included for a fast preview along with the links to source code files.*

---

## 4a. Create a button with the text ‘Click' inside

> **SOLUTION :**

```html
<button>Click</button>
```

+ View full code here: [4a.html](4a.html)

---

## 4b. Create 2 buttons. 1 with your name and 1 with your favorite food.

> **SOLUTION :**

```html
<button>Anshika</button>
<button>Chocolate</button>
```

+ View full code here: [4b.html](4b.html)

---

## 4c. Create a paragraph with the text ‘Hello, world!' inside.

> **SOLUTION :**

```html
<p>Hello World!</p>
```

+ View full code here: [4c.html](4c.html)

---

## 4d. Continuing from exercise [4c](#4c-create-a-paragraph-with-the-text-hello-world-inside), create a paragraph below the previous paragraph and write something you did today.

> **SOLUTION :**

```html
<p>Hello World!</p>
<p>Today I completed strings lecture from JavaScript Tutorial Course by SuperSimpleDev.</p>
```

+ View full code here: [4d.html](4d.html)

---
  
## 4e. Create 2 buttons 'Add to cart' and 'Buy now'. Use CSS to give them yellow and orange background colors:

> **SOLUTION :**

```html
<button class="yellow-btn">Add to cart</button>
<button class="orange-btn">Buy now</button>

<style>
  .yellow-btn {
    background-color: yellow;
  }

  .orange-btn {
    background-color: orange;
  }
</style>
```
+ View full code here: [4e.html](4e.html)

---

## 4f. Add the HTML structure to exercise [4e](4e.html) (add `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) and put the elements into the `<head>` or `<body>`. (For more practice, add the HTML structure to exercises [4a](4a.html) - [4d](4d.html)).

> **SOLUTION :**

+ [4a.html](4a.html)
+ [4b.html](4b.html)
+ [4c.html](4c.html)
+ [4d.html](4d.html)
+ [4e.html](4e.html)

## 4g. Continuing from 4f, change the title at the top of the tab to 'Buttons'

> **SOLUTION :**

```html
<title>Buttons</title>
```

+ View full code here: [4g.html](4g.html)

---

## 4h. Continuing from 4g, add a `<script>` element so that when the page loads, it displays the message 'Welcome!' in the Console.

> **SOLUTION :**

```html
<script>
  console.log('Welcome!');
</script>
```
+ View full code here: [4h.html](4h.html)

---

## 4i. Using HTML and CSS, try to copy the design on the right.(Make sure to follow the HTML structure.)

> **SOLUTION :**

+ View full code here: [4i.html](4i.html)

---

## 4j. Continuing from [4i](4i.html), add onclick="..." attributes to the two buttons: When clicking ‘Add to cart', create a popup with the text ‘Added'. When clicking ‘Buy now', display the message ‘Loading...' in the Console, and then create a popup with the text ‘Purchased’.

> **SOLUTION :**

+ View full code here: [4i.html](4i.html)

---
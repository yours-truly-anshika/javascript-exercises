let inputTxt = document.querySelector('.inputTxt');
let displayTxt = document.querySelector('p');

inputTxt.addEventListener('keyup', (event) =>{ if (event.key === 'Enter') {
  return;
} else if (event.key === 'Backspace') {
    displayTxt.innerHTML = displayTxt.innerHTML.slice(0, -1);
    return;
} else {
  let key = event.key;
  displayTxt.innerHTML += `${key}`;
}
});
const name = document.querySelector('.name');
const submitBtn = document.querySelector('.submitBtn');
const result = document.querySelector('p');

function displayResult(text) {
  result.innerHTML = `Your name is: ${text}`;
}

submitBtn.addEventListener('click', () => {
  displayResult(name.value.trim());
});

name.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    displayResult(name.value.trim());
  }
});
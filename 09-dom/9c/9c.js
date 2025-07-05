let buttons = document.querySelectorAll('button');
let caption = document.querySelector('p');

function displayCaption(text){
  caption.innerHTML = `You chose: ${text}`;
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    displayCaption(btn.textContent);
  });
  
});
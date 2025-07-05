let calculation = localStorage.getItem('calculation') || '';
    
const buttons = document.querySelectorAll('button');

function displayCalculation() {
  const resultElement = document.querySelector('.result');
  resultElement.innerHTML = calculation || '0';
}

function updateCalculation(e) {
  const value = e.target.innerHTML.trim();

  if (value === 'Clear') {
    calculation = '';
  } else if (value === '=') {
    calculation = eval(calculation);
  } else {
    calculation += value;
  }
  
  localStorage.setItem('calculation', calculation);
  displayCalculation();
}

buttons.forEach(btn => btn.addEventListener('click', updateCalculation));
'use strict';


function turnRed() {
  const colorChangers = document.querySelectorAll(".color-change");
    
  for (const change of colorChangers) {
    change.classList.add('red');
  }
}

colorChangers.addEventListener('click', turnRed)

function checkNumber(evt) {
  evt.preventDefault();

  const form = document.querySelector('number-form')
  const numberInput = document.querySelector('#number-input');
  const submittedNum = Number(numberInput.value);
  const formFeedback = document.querySelector('#formFeedback');

  if (isNaN(submittedNum) || submittedNum >= 10) {
    formFeedback.innerHTML = 'please enter a smaller number';
  } else {
    formFeedback.innerHTML = 'you are good to go!';
  }
}

form.addEventListener('submit', checkNumber);
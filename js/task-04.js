"use strict"
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const displayValue = document.querySelector('#value');
let counterValue = [0];
incrementBtn.addEventListener('click', (e) => {
    counterValue += 1;
    displayValue.innerText = counterValue;
});
decrementBtn.addEventListener('click', (e) => {
    counterValue -= 1;
    displayValue.innerText = counterValue;
});
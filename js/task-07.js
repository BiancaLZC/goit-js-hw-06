"use strict"
const text = document.getElementById("text");
const sizeControl = document.getElementById("font-size-control");

sizeControl.addEventListener('input', (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`
});
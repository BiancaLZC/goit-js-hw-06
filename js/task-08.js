"use strict"
const loginForm = document.querySelector('.login-form');
const user = {
    user: "",
    password: "" 
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const {elements} = e.target;
    const userEmail = elements['email'].value;
    const userPassword = elements['password'].value;

    if (userEmail === ''||userPassword === '') {
        alert('You must complete all fields !');
        return;
    }
    user.email = userEmail;
    user.password = userPassword;
    console.log(user);
    loginForm.reset();
});

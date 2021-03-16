'use strict';

// SignIn form elements
const signInForm = document.getElementById('loginForm');
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');
const errorMessgae = document.querySelector('.login100-form-errorMessage');

signInForm.addEventListener('submit', async (event) => {
  localStorage.clear();
  event.preventDefault();

  const fd = { email: signInEmail.value, password: signInPassword.value };

  myFetch('login', fd);
});

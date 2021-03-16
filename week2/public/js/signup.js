(async () => {
  'use strict';

  // Signup form elements
  const signUpForm = document.getElementById('signUpForm');
  const signUpUsername = document.getElementById('signUpUsername');
  const signUpEmail = document.getElementById('signUpEmail');
  const signUpPassword = document.getElementById('signUpPassword');
  const confirmPassword = document.getElementById('confirmPassword');

  const validatePassword = () => {
    console.log('password.value', signUpPassword.value);
    console.log('confirmPassword.value', confirmPassword.value);
    if (signUpPassword.value != confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      confirmPassword.setCustomValidity('');
    }
  };

  const validateEmail = () => {
    const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!signUpEmail.value.match(mailformat)) {
      signUpEmail.setCustomValidity('Valid email is required: ex@abc.xyz');
    } else {
      signUpEmail.setCustomValidity('');
    }
  };

  // Event Listeners
  signUpEmail.addEventListener('change', validateEmail);
  signUpPassword.addEventListener('change', validatePassword);
  confirmPassword.addEventListener('input', validatePassword);

  signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    localStorage.clear();

    const fd = {
      email: signUpEmail.value,
      password: signUpPassword.value,
      name: signUpUsername.value,
    };

    myFetch('register', fd);
  });
})();

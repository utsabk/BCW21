'use strict';

const query = 'http://localhost:3000/auth/';

const myFetch = async (endpoint, fd) => {

  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fd),
    redirect: 'follow',
  };

  console.log('Fd:-',fd)

  try {
    const result = await fetch(query + endpoint, requestOptions);

    console.log('This is my result:-', result);

    const response = await result.json();
    if (response.user) {
      localStorage.setItem('userId', response.user.user_id);
      localStorage.setItem('token', response.token);
      location.replace('../index.html');
    } else {
      console.log('Error while signing up');
    }
  } catch (e) {
    console.log('error', e.message);
  }
};

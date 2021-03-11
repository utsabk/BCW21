'use strict';
const userList = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
  },
];

// Deconstruct each object to create a new without password atttibute
const usersWithoutPassword = userList.map(({ password, ...user }) => user);
// const usersWithoutPassword = userList.map((user) => {
//   delete user.password;
//   return user;
// });

const userById = (id) =>  usersWithoutPassword.filter((user) => user.id === id)

export { usersWithoutPassword, userById };

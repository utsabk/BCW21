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

const userById = (id) => {
  return userList.filter((user) => user.id === id);
};
export { userList, userById };

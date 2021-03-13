'use strict';

import * as userModel from '../models/userModel.js';

const getUserList = async (req, res) => {
  const users = await userModel.getAllUsers()
  // Deconstruct each object to create a new without password atttibute
const usersWithoutPassword = users.map(({ password, ...user }) => user);
// const usersWithoutPassword = userList.map((user) => {
//   delete user.password;
//   return user;
// });

  return res.json(usersWithoutPassword);
};

const getUserById = async(req, res) => {
  const id = req.params.id;
  const userById = await userModel.getUserById(id);
  const usersWithoutPassword = userById.map(({ password, ...user }) => user);
  return res.json(usersWithoutPassword);
};

const postUserData = (req, res) => {
  const data = req.body;
  console.log(`body data:- ${JSON.stringify(data)}`);
  return res.json(data);
};

export { getUserList, getUserById, postUserData };

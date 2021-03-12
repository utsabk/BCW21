'use strict';

import * as userModel from '../models/userModel.js';

const getUserList = (req, res) => {
  return res.json(userModel.usersWithoutPassword);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const userById = userModel.userById(id);
  return res.json(userById);
};

const postUserData = (req, res) => {
  const data = req.body;
  console.log(`body data:- ${JSON.stringify(data)}`);
  return res.json(data);
};

export { getUserList, getUserById, postUserData };

'use strict';

import * as userModel from '../models/userModel.js';

const getUserList = (req, res) => {

    console.log('users:--'+ userModel.usersWithoutPassword);
  return res.json(userModel.usersWithoutPassword);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const userById = userModel.userById(id);
  return res.json(userById);
};

export { getUserList, getUserById };

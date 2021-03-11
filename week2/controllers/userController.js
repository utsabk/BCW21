'use strict';

import * as userModel from '../models/userModel.js';

const getUserList = (req, res) => {
  return res.json(userModel.userList);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const catById = userModel.userById(id);
  return res.json(catById);
};

export { getUserList, getUserById };

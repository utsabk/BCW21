'use strict';
import pool from '../db/database.js';

const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM `wop_user`');
    return rows;
  } catch (e) {
    console.log(e);
  }
};

const getUserById = async (id) => {
  try {
    const [
      rows,
    ] = await promisePool.execute(
      'SELECT * FROM `wop_user` WHERE `user_id`=?',
      [id]
    );
    return rows;
  } catch (e) {}
};

const uploadUserData = async (data) => {
  try {
    const [rows] = await promisePool.execute(
      'INSERT INTO `wop_user` (name, email, password) VALUES (?, ?, ?);',
      data
    );
    return rows;
  } catch (e) {
    console.log('Error postUserData:-', e);
  }
};

const getUserLogin = async (params) => {
  try {
    const [rows] = await promisePool.execute(
      'SELECT * FROM `wop_user` WHERE email=?',
      params
    );
    return rows;
  } catch (e) {
    console.log('Error getUserLogin:-', e);
  }
};
export { getAllUsers, getUserById, uploadUserData, getUserLogin };

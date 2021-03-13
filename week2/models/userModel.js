'use strict';
import pool from '../db/database.js';

const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM `wop_user`');
    return rows;
  } catch (e) {
    console.log(e);
  }
};

const getUserById = async (id) => {
  try {
    const [rows] = await promisePool.execute(
      'SELECT * FROM `wop_user` WHERE `user_id`=?',
      [id]
    );
    return rows;
  } catch (e) {}
};

export { getAllUsers, getUserById };

'use strict';

import pool from '../db/database.js';

const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('Error getAllCats:-', e.message);
  }
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.execute(
      'SELECT * FROM `wop_cat` WHERE `cat_id` = ? ',
      [id]
    );
    return rows;
  } catch (e) {
    console.log('Error getCat:-', e.message);
  }
};

export { getAllCats, getCat };

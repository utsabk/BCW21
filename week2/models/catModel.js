'use strict';

import pool from '../db/database.js';

const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('Error getAllCats:-', e.message);
  }
};

const getCat = async (id) => {
  try {
    const [
      rows,
    ] = await promisePool.execute(
      'SELECT * FROM `wop_cat` WHERE `cat_id` = ? ',
      [id]
    );
    return rows;
  } catch (e) {
    console.log('Error getCat:-', e.message);
  }
};

const uploadCat = async (data) => {
  try {
    const [rows] = await promisePool.execute(
      'INSERT INTO `wop_cat` (name, age,weight,owner,filename) VALUES (?, ?, ?, ?,?);',
      data
    );

    return rows;
  } catch (e) {
    console.log('Error uploadCat:-', e);
  }
};

const updateCat = async (data) => {
  try {
    const [rows] = await promisePool.execute(
      'UPDATE `wop_cat` SET name =?, age = ?, weight = ?, owner = ? WHERE cat_id = ?',
      data
    );

    return rows;
  } catch (e) {
    console.log('Error updateCat:-', e);
  }
};

const deleteCat = async (id) => {
  try {
    const [rows] = await promisePool.execute(
      'DELETE FROM `wop_cat`WHERE cat_id = ?',
      [id]
    );
    return rows;
  } catch (e) {
    console.log('Error deleteCat:-', e);
  }
};

export { getAllCats, getCat, uploadCat, updateCat, deleteCat};

'use strict';

import * as catModel from '../models/catModel.js';

const getCatList = (req, res) => {
  res.json(catModel.catList);
};

const getCatById = (req, res) => {
  const id = req.params.id;
  const cat = catModel.catById(id);
  res.json(cat);
};

export { getCatList, getCatById };

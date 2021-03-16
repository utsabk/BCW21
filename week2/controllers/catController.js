'use strict';
import multer from 'multer';
import * as catModel from '../models/catModel.js';

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const date = new Date().toJSON();
    const ext = file.originalname.split('.').slice(-1);
    cb(null, `${file.fieldname}-${date}.${ext}`);
  },
});

const uploadDest = multer({ storage: storage });

const getCatList = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const getCatById = async (req, res) => {
  const id = req.params.id;
  const cat = await catModel.getCat(id);
  res.json(cat);
};

const uploadCat = async (req, res) => {
  const data = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.file.filename,
  ];
  const upload = await catModel.uploadCat(data);
  console.log('Upload complete', upload);
  return res.send(upload);
};

const updateCat = async (req, res) => {
  const data = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.body.id,
  ];
  const update = await catModel.updateCat(data);
  console.log('update complete', update);
  return res.send(update);
};

const deleteCat = async (req, res) => {
  const id = req.params.id;
  const del = await catModel.deleteCat(id);
  console.log('delete complete', del);
  return del;
};

export { getCatList, getCatById, uploadDest, uploadCat, updateCat, deleteCat };

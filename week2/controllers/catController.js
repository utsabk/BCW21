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

const uploadMedia = async (req, res) => {
  const data = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.file.filename,
  ];
  const upload = await catModel.uploadCat(data);
  console.log('Upload complete',upload)
  return res.json(upload);
};

export { getCatList, getCatById, uploadDest, uploadMedia };

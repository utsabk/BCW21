'use strict';
import express from 'express';
import * as controller from '../controllers/catController.js';
const router = express.Router();

router.get('/', controller.getCatList);

router.get('/:id', controller.getCatById);

router.post(
  '/',
  controller.uploadDest.single('cat'),
  controller.uploadMedia
);

export default router;

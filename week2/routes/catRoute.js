'use strict';
import express from 'express';
import * as controller from '../controllers/catController.js';
const router = express.Router();

router
  .route('/')
  .get(controller.getCatList)
  .post(controller.uploadDest.single('cat'), controller.uploadCat)
  .put(controller.updateCat);

router.route('/:id')
.get(controller.getCatById)
.delete(controller.deleteCat);

export default router;

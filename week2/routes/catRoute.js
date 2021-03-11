'use strict';
import express from 'express';
import * as controller from '../controllers/catController.js';
const router = express.Router();

router.get('/', controller.getCatList);

router.get('/:id',controller.getCatById);

  
export default router;
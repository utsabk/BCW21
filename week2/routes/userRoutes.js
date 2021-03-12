'use strict';

import express from 'express';
import * as controller from '../controllers/userController.js';
const router = express.Router();

router.get('/', controller.getUserList);

router.get('/:id', controller.getUserById);

router.post('/',controller.postUserData);

export default router;
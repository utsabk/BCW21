'use strict';

import express from 'express';
import * as controller from '../controllers/userController.js';
const router = express.Router();

router.route('/')
.get(controller.getUserList)
.post(controller.postUserData);


router.route('/:id')
.get(controller.getUserById);


export default router;
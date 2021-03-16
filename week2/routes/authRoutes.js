import express from 'express';
import { body, sanitizeBody } from 'express-validator';

import { userLogin, userRegister } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', userLogin);

router.post(
  '/register',
  [
    body('name', 'minimum 3 characters').isLength({ min: 3 }),
    body('email', 'email is not valid').isEmail(),
    body('password', 'at least one upper case letter').matches(
      '(?=.*[A-Z]).{8,}'
    ),
    sanitizeBody('name').escape(),
  ],
  userRegister,
  userLogin
);

export default router;

'use strict';
import jwt from 'jsonwebtoken';
import passport from '../utils/pass.js';
import { uploadUserData } from '../models/userModel.js';

const userLogin = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log('this is user auth:-', user);
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign(user, process.env.SECRET_KEY);
      return res.json({ user, token });
    });
  })(req, res);
};

const userRegister = async (req, res, next) => {

  const params = [req.body.name, req.body.email, req.body.password];

  console.log('this is formdata:-', params);
  if (await uploadUserData(params)) {
    next();
  } else {
    res.status(400).json({ error: 'register error' });
  }
};

//export an object
export { userLogin, userRegister };

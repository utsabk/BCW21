'use strict';
import passport from 'passport';
import passportLocal from 'passport-local';
import passportJWT from 'passport-jwt';
import * as userModel from '../models/userModel.js';

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const params = [username];

    try {
      const [user] = await userModel.getUserLogin(params);
      if (user == undefined) {
        return done(null, false, { message: 'Incorrect Email' });
      } else if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      // delete password before returning
      delete user.password;

      return done(
        null,
        { ...user }, // use spread syntax to create shallow copy to get rid of binary row type
        { message: 'Logged in successfully' }
      );
    } catch (err) {
      console.log('inside local strategy error');
      return done(null, err);
    }
  })
);

console.log('secretOrKey:-', process.env.SECRET_KEY);
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    },
    async (jwtPayload, done) => {
      try {
        const user = await userModel.getUserLogin(jwtPayload.email);
        return done(null, { password, ...user });
      } catch (err) {
        done(null, false);
      }
    }
  )
);

export default passport;

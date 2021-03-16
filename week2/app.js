'use strict';

import 'dotenv/config.js'; // using ES6 modules via import,configuring dotenv in the base file doesn't set the environment vars in sub-modules 
import express from 'express';
import cors from 'cors';
import catRoutes from './routes/catRoute.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import passport from './utils/pass.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/auth', authRoutes);
app.use('/cat', catRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

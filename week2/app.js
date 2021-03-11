'use strict';
import express from 'express';
import dotenv from 'dotenv';
import catRoutes from './routes/catRoute.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use('/cat', catRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

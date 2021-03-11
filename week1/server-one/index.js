'use strict';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port :- ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('Congrats, Wellcome to Node world');
});

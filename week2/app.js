'use strict';
import express from 'express';
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import cors from 'cors';
import catRoutes from './routes/catRoute.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/cat', catRoutes);
app.use('/user', userRoutes);


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

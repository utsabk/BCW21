'use strict';

import dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config();
app.use(express.static('public'));

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port :- ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('Congrats, Welcome to the Node world');
});

app.get('/catinfo',(req,res)=>{
    const cat = {
        name: 'Frank',
        age:6,
        weight:5,
    };

    res.json(cat);
})

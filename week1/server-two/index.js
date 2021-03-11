'use strict';

import dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config();
app.use(express.static('public'));
app.set('view engine', 'pug');


app.get('/', (req, res)=> res.render('index'));


app.listen(process.env.PORT, () => {
  console.log(`App is listening on port :- ${process.env.PORT}`);
});


app.get('/catinfo',(req,res)=>{
    const cat = {
        name: 'Frank',
        age:6,
        weight:5,
    };

    res.json(cat);
})

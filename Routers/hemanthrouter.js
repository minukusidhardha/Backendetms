const express=require('express');
const { Hemanthproject } = require('../controllers/hemanthcontroller');
const hrouter=express.Router();
hrouter.post('/hemanth',Hemanthproject)
module.exports=hrouter;
const express=require('express');
const auth=require('../middleware/auth')
const { addtask, getalltasks, viewDetails, Changestatus } = require('../controllers/taskcontroller');
const trouter=express.Router();
trouter.post('/add/:pid',auth,addtask);
trouter.get('/get',getalltasks);
trouter.get('/getdetails/:id',viewDetails);
trouter.put('/change/:id',Changestatus);
module.exports=trouter;
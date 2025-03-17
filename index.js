const express=require('express');
const dbconnect = require('./dbconfig');
const router = require('./Routers/employeeroute');
const prouter = require('./Routers/projectroute');
const trouter = require('./Routers/taskroute');
const arouter = require('./Routers/assignrouter');
const srouter = require('./Routers/adminroute');
const aurouter = require('./Routers/authrouter');
const cors=require('cors');
const crouter = require('./Routers/commentrouter');
const hrouter = require('./Routers/hemanthrouter');
const app=express();
app.use(cors())
app.use(express.json());
dbconnect();
app.use('/api/employee',router);
app.use('/api/project',prouter);
app.use('/api/task',trouter);
app.use('/api/assign',arouter);
app.use('/api/admin',srouter);
app.use('/api/auth',aurouter);
app.use('/api/comment',crouter);
app.use('/api/sidhu',hrouter);

module.exports=app;
// const PORT=process.env.PORT || 5000;
// app.listen(PORT,()=>{console.log('app is listening to port')});
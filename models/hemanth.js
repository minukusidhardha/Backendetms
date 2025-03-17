const mongoose = require('mongoose')
const hemanth=mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true}

})
const Hemanth=mongoose.model('Hemanth',hemanth)
module.exports=Hemanth;
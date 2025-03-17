const Hemanth = require("../models/hemanth");

exports.Hemanthproject=async(req,res)=>{
    try{
        const {name,password}=req.body;
        let hemanth=new Hemanth({'name':name,'password':password});
        hemanth=await hemanth.save()
        res.status(200).json(hemanth)

    }
    catch(err){
        return res.status(400).json({'msg':'something wrong '+err})
    }



}
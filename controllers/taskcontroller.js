const Admins = require("../models/admin");
const Project = require("../models/project");
const Task = require("../models/task");

exports.addtask=async(req,res)=>{
    try{
        let obj=req.user;
        let username=obj.username;
        let admin=await Admins.findOne({'username':username})
        if(!admin)
            return res.status(400).json({'msg':'Unauthorized Access'})
    const pid=req.params.pid;
    let {title,shortDescription,estimatedEndDate}=req.body;
    let project=await Project.findById(pid);
    if(!project){
        res.status(400).json({'msg':'invalid project id'});
    }
    let taskobj=new Task({ title,shortDescription,estimatedEndDate,'project':project._id});
    taskobj=await taskobj.save();
    res.json(taskobj);
   }
   catch(err){
    return res.status(400).json({'msg':'something Wrong '+err})
   }

}
exports.getalltasks=async(req,res)=>{
    try{
    let alltasks= await Task.find().populate('project');
    alltasks.map((t)=>{t.project})
    res.json(alltasks);
    }
    catch(err){
        res.status(400).json({'msg':'something Wrong'})
    }
}
exports.viewDetails=async(req,res)=>{
    try{
        let tid=req.params.id;
        let task=await Task.findById(tid).populate('project')
        if(!task){
            res.status(400).json({'msg':'invalid Id'})
        }
        res.json(task);

    }
    catch(err){

    }

}
exports.Changestatus=async(req,res)=>{
    try{
    let tid=req.params.id;
        let task=await Task.findById(tid)
        if(!task){
            res.status(400).json({'msg':'invalid Id'})
        }
        task.status='Archive'
        task=await task.save(task)
        res.json(task)
    }
    catch(err){
        return res.status(400).json({'msg':'something wrong '+err})
    }

}
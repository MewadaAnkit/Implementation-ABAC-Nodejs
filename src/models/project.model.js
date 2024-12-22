const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String
    },
    department:{
        type:String
    },
    accessLevel:{
        type:String,
       
    },
    team:{
        type:Array
    }
})

const Project = mongoose.model("Project",ProjectSchema);
module.exports =  Project
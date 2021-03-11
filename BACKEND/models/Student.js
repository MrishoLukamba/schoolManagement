const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const studentSchema =new Schema({

    name : {
        type : String,
        required: true,
    },

    age :{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    nic:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    studentImage:{
        type:String,
        required:true,
    }
})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;
const router = require("express").Router();
const multer = require("multer");
let Student = require("../models/Student");

//files uploading via multer
const upload = multer({dest:"uploads/"});



router.use("/add",upload.single("studentImage"))

router.route("/add").post((req,res,next)=>{
    console.log(req.file)
    const name = req.body.name; 
    const age = Number(req.body.age);
    const gender= req.body.gender;
    const nic = Number(req.body.nic);
    const email = req.body.email;
    const studentImage = req.file.path;


    const newStudent = new Student({

        name,
        age,
        gender,
        nic,
        email,
        studentImage
    })
    
    newStudent.save().then(() =>{
        res.json("Student Added")
    }).catch((err) =>{
        console.log(err);
    })
    
})

router.route("/").get((req,res) =>{
     
      Student.find().then((Students) =>{
          res.json(Students)
      }).catch((err) =>{
          console.log(err);
      })

})

router.route("/update/:id").put(async(req,res) =>{

   let userId = req.params.id;
   const {name,age,gender,nic,email,studentImage} =req.body;

   const updateStudent ={

      name,
      age,
      gender,
      nic,
      email,
      studentImage

   }
    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(() =>{
        res.status(200).send({
            status:"user updated" ,
            user:update
        })
    }).catch(() =>{
        res.status(500).send({
            status:"Error with updationg data",
            error: err.message
         });
    })

})

router.route("/search/:name").get(async (req, res)=>{
    let searchParam = req.params.name;

    await Student.find({name:searchParam},(err,data)=>{
        if(err){
            console.log(err.message)
        }else{
            res.status(200).send(data)
        }
    })
})

router.route("/delete/:id").delete(async (req,res) =>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({
            status:"user deleted",
            }).catch(() =>{
               console.log(err.massage);
               res.status(500).send({
                   status:"Error with updating data",
                   error:err.message
               })
            })
    })
})

module.exports = router;
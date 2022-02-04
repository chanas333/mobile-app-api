var express = require('express');
var router = express.Router();
var appModel = require('./Models/Movie')
// var User = require('./Models/User')
// var bcrypt = require('bcryptjs')



//to fetch movies
router.get('/app',async(req,res)=>{
    const iapp = await appModel.find()
    res.send(iapp)
})

//to add the movies
router.post("/app",async(req,res)=>{
    const iapp = new appModel({
        appname:req.body.appname,
        appversion:req.body.appversion,
        download:req.body.download,
        
    })

    await iapp.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/app/:id',async (req,res)=>{
    const iapp = await appModel.findOne({_id:req.params.id})
    iapp.appname = req.body.appname
    iapp.appversion = req.body.appversion
    iapp.download = req.body.download
    await iapp.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/app/:appname",async(req,res)=>{
    await appModel.deleteOne({appname:req.params.appname},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})


// router.post('/users',async(req,res)=>{
    
//     //generate salt key
//     salt = await bcrypt.genSalt(10)
//     console.log(salt)

//     hashedpswd = await bcrypt.hash(req.body.password,salt)
//     console.log(hashedpswd)

//     const iuser = new User({
//         uname:req.body.uname,
//         password:hashedpswd
//     })  
//     await iuser.save((err,msg)=>{
//         if(err){
//             res.status(500).json({
//                 "error":err
//             })
//         }
//         else{
//             res.status(200).json({
//                 "My-message":msg
//             })
//         }
//     })

// })














module.exports = router 
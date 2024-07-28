const express = require('express');
const router = express.Router();
const user = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register',async(req,res)=>{
    try {
        const userExists = await user.findone({email:req.body.email});
        if(userExists) return res.status(200).send({msg:'User already exists', success:false});
        const password= req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;
        const newuser = new user(req.body); 
        await newuser.save();
        res.status(200).send({
            msg:'User registered successfully', sucess:true
        })
    } catch (error) {
        res.status(500).send({
            msg:'Error Creating User', success:false,error:error
        })  
    }
});


router.post('/login',async(req,res)=>{
    try {
        res.status(200).json({
            msg:'Login  route works'
        })
    } catch (error) {
        
    }
});

module.exports = router;
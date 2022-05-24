import express from "express";
import User from "../models/userModel.js";
import Validate from "../models/validateModel.js";


import bcrypt from "bcryptjs";
//import Joi from "joi";


const router = express.Router();


export default router.post("/", async (req, res) => {

    
 

    try {
      if (Validate(req.body))
      return res.status(200).send({  message: "logged in successfully" })
      else return res.status(401).send({ message: "Invalid Email or Password" })
    } catch (error) {
      return res.status(500).send({ message: "something off" })
    }
     
    
    
    

    const user = await User.users.findOne({ login: req.body.login });
    console.log(user)

    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });


    const token = User.generateAuthToken();
    
    res.status(200).send({ data: token, message: "logged in successfully" });
  
});


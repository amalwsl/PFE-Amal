import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import sendEmail from "../sendmail/sendEmail.js";
import { MongoClient } from 'mongodb'

import generateToken from "../models/generateToken.js";



const getUsers = asyncHandler(async (req,res) =>{
    const url = "mongodb+srv://amalwsl:azerty12345@cluster0.cr3me.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    const dbName = "myFirstDatabase"
    
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collectionUser = db.collection('users');
        // the following code examples can be pasted here...
        const findUsers = await collectionUser.find({}).toArray();
        res.json(findUsers)
        console.log('Found User documents =>', findUsers);
      
        return 'done.';
      
})


const getUserProfile = asyncHandler(async (req,res) =>{
    
    const login = req.body;
    const user = await User.findOne(login)
       if(user){
           res.json(user)
           console.log("got user")
       }else{
           console.log('couldn"t get user')
       }
})
const signInUser = asyncHandler(async (req,res) =>{
    const { login, password } = req.body;
    const user = await User.findOne({ login });

    if (user && (await user.matchPassword(password))) {
      res.json({
      user,
    //   token : generateToken(user._id),
      });
      console.log('signed in successfully')
    } else {
      res.status(401);
      throw new Error("invalid mail or password");
    }
  })

const addUser = asyncHandler(async (req,res) =>{
    console.log("req.body")
    console.log(req.body)
    const {first_name,last_name,country,login} = req.body
    let pwd=Math.random().toString(36).slice(-8);

   try {
       const addUser = await User.create({
           first_name,
           last_name,
           country,
           login,
           password:pwd
       })
       console.log("addUser")
       console.log(addUser)
       await sendEmail({
        email: login,
        subject: "Welcome to IADE Tunisia ",
        message : `Hello Dear ${first_name} ! here is your password to signin : ${pwd} `
        
    });
       res.json(addUser)
   } catch (error) {
       res.status(500)
       throw new Error('Failed to add user')
   }
})

const updateUser = asyncHandler(async (req,res) =>{
    const id = req.params.id
    const {first_name,login ,last_name,email1,email2, phone_pro,phone_perso,mobile,adresse,country,company,current_position,civil_title,note,isAdmin,isManager,isExhibitor}=req.body
   try {
       const user = await User.findById(id)
       if(user){
           const updateUser = await User.where({ _id: id }).update({ $set: { first_name:first_name,login:login ,last_name:last_name,email1:email1,email2:email2, phone_pro:phone_pro,phone_perso:phone_perso,mobile:mobile,adresse:adresse,country:country,company:company,current_position:current_position,civil_title:civil_title,note:note,isAdmin:isAdmin,isManager:isManager,isExhibitor:isExhibitor }})
           res.status(200)
           res.json({message:'ok User updated'})
       }else {
           res.status(404)
           res.json({message:'User not found'})
       }
   } catch (error) {
       res.json(error)
   }
 })

const deleteUser = asyncHandler(async (req,res) =>{
    const id = req.params.id
    
   try {
       const user = await User.findById(id)
       if(user){
           const deletedUser = await User.deleteOne({_id:id})
           res.status(200)
           res.json({message:'ok deleted'})
       }else {
           res.status(404)
           res.json({message:'User not found'})
       }
   } catch (error) {
       res.json(error)
   }
 })


export {
 
  getUserProfile,signInUser,addUser,deleteUser,updateUser,getUsers
 
};
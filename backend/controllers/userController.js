import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";


const getUserProfile = asyncHandler(async (req,res) =>{
    
    
    const id = req.params.id
    const user = await User.findById(id)
       if(user){
           res.json(user)
           console.log("wselt lenna")
       }else{
           console.log('tahchelk bb')
       }
})
const signInUser = asyncHandler(async (req,res) =>{
    res.json({ok:'ok'})
})
const addUser = asyncHandler(async (req,res) =>{
    console.log("req.body")
    console.log(req.body)
    const {first_name,last_name,country,login,password} = req.body
   try {
       const addUser = await User.create({
           first_name,
           last_name,
           country,
           login,
           password
       })
       console.log("addUser")
       console.log(addUser)
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
 
  getUserProfile,signInUser,addUser,deleteUser,updateUser
 
};
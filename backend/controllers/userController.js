import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";


const getUserProfile = asyncHandler(async (req,res) =>{
    res.json({name:'amal'})
})
const signInUser = asyncHandler(async (req,res) =>{
    res.json({ok:'ok'})
})
const addUser = asyncHandler(async (req,res) =>{
    const {first_name,last_name,country,login,password} = req.body
   try {
       const newUser = await User.create({
           first_name,
           last_name,
           country,
           login,
           password
       })
       res.json(newUser)
   } catch (error) {
       res.status(500)
       throw new Error('Failed to add user')
   }
})

const updateUser = asyncHandler(async (req,res) =>{
    const id = req.params.id
    
   try {
       const user = await User.findById(id)
       if(user){
           const updateUser = await User.where({ _id: id }).update({ $set: { first_name: 'ranim' }})
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
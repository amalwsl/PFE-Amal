import asyncHandler from "express-async-handler";
import Meeting from "../models/meetingsModel.js";




const getMeeting = asyncHandler(async (req,res) =>{
    try {
        const events = await Meeting.find();

        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

const addMeeting = asyncHandler(async (req,res) =>{
    const {title,start_time,host,guest} = req.body
   try {
       const newMeeting = await Meeting.create({
        title,
        start_time,
        host,
        guest
       })
       res.json(newMeeting)
   } catch (error) {
       res.status(500)
       throw new Error('Failed to create meeting')
   }
})

const updateMeeting = asyncHandler(async (req,res) =>{
    const id = req.params.id
    const {title,start_time,host,guest} = req.body
   try {
       const meeting = await Meeting.findById(id)
       if(meeting){
           const updateMeeting = await Meeting.where({ _id: id }).update({ $set: { title:title,start_time:start_time,host:host,guest:guest }})
           res.status(200)
           res.json({message:'ok meeting updated'})
       }else {
           res.status(404)
           res.json({message:'meeting not found'})
       }
   } catch (error) {
       res.json(error)
   }
 })


const deleteMeeting = asyncHandler(async (req,res) =>{
    const id = req.params.id
    
   try {
       const meeting = await Meeting.findById(id)
       if(meeting){
           const deletedMeeting = await Meeting.deleteOne({_id:id})
           res.status(200)
           res.json({message:'ok meeting deleted'})
       }else {
           res.status(404)
           res.json({message:'meeting not found'})
       }
   } catch (error) {
       res.json(error)
   }
 })


export {
 
    getMeeting,addMeeting,deleteMeeting,updateMeeting
 
};



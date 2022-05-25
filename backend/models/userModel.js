import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";

import asyncHandler from "express-async-handler";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      
    },
    last_name: {
      type: String,
      
    },
    
      email1: {
        type : String,
        
      },
      email2: {
        type : String,
      },
      phone_pro: {
        type : String,
      },
      phone_perso: {
        type : String,
      },
      mobile: {
        type : String,
      },
     
    
    adresse:{
      type : String,
    },
    country : {
      type : String,
      
    },
    company:{
      type : String,
      
    },
    current_position:{
      type : String,
      
    },
    civil_title:{
      type : String
    },
    note:{
      type : String
    },
    photo: {
      url: {type:String},
      public_id: {type:String},
    },
    country_flag:{
      type:String,
    },
    login: {
      type: String,
      
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    canUpdateUsers: {
      type: Boolean,
      default: false,
    },
    canManageRoles: {
      type: Boolean,
      default: false,
    },
    isExhibitor: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "3d",
  });
  console.log(token)
  return token;
};
const Users = mongoose.model("users", userSchema)


//const PhoneBook = mongoose.model('PhoneBook',PhoneBookSchema)


export default Users;
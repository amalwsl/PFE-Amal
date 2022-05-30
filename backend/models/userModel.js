import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto"


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
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Register
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});



userSchema.methods.getResetPasswordToken = async function () {

  // generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // generate hash token and add to db
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
}

const Users = mongoose.model("users", userSchema)




export default Users;
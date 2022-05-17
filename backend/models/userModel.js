import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    contact_details: {
      email1: {
        type : String,
        required: true,
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
     
    },
    adresse:{
      type : String,
    },
    country : {
      type : String,
      required: true,
    },
    company:{
      type : String,
      required: true,
    },
    cuurrent_position:{
      type : String,
      required: true,
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
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
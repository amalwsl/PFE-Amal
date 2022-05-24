import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "3d",
  });
  console.log(token)
  return token;
};

const User = mongoose.model("users", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().label("first_name"),
    lastName: Joi.string().label("last_name"),
    country: Joi.string().label("country"),
    email: Joi.string().email().label("login"),
    password: passwordComplexity().label("password"),
  });
  return schema.validate(data);
};

export default User;

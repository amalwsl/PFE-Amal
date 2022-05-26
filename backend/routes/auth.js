import express from "express";
import User from "../models/userModel.js";
import Validate from "../models/validateModel.js";
const router = express.Router()



import comparePassword  from '../utils/password.js'
import generateToken from '../utils/tokens.js'


import bcrypt from "bcryptjs";
//import Joi from "joi";


// const router = express.Router();


// export default router.post("/", async (req, res) => {

    
//  console.log('azertrezazerreza')

//     try {
//       if (Validate(req.body))
//       return res.status(200).send({  message: "logged in successfully" })
//       else return res.status(401).send({ message: "Invalid Email or Password" })
//     } catch (error) {
//       return res.status(500).send({ message: "something off" })
//     }
     
    
    
    

//     const user = await User.users.findOne({ login: req.body.login });
//     console.log(user)

//     if (!user)
//       return res.status(401).send({ message: "Invalid Email or Password" });

//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password,
//     );

//     if (!validPassword)
//       return res.status(401).send({ message: "Invalid Email or Password" });


//     const token = User.generateAuthToken();
    
//     res.status(200).send({ data: token, message: "logged in successfully" });
  
// } ) ;



router.post('/', async (req, res) => {
    User.findOne({ where: { login: req.body.login } })
        .then(user => {
            comparePassword(req.body.password, user.password)
                .then(correct => {
                    if (correct) {
                        generateToken(user.id, user.login)
                            .then(token => res.send({
                                message: 'Logged in successfully',
                                accessToken: token,
                            }))
                            .catch(err => res.status(500).send(err))
                    } else {
                        res.status(401).send({ message: 'Incorrect credentials' })
                    }
                })
        })
        .catch(() => res.status(401).send({ message: 'Incorrect credentials' }))
})

export default router
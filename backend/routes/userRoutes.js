import express from "express";
import {
  getUserProfile,signInUser,addUser, deleteUser, updateUser, getUsers
} from "../controllers/userController.js";

const router = express.Router();

router.route('/profile/').get(getUserProfile)
router.route('/usersList').get(getUsers)
router.route('/login').post(signInUser)
router.route('/add').post(addUser)
router.route('/delete/:id').delete(deleteUser)
router.route('/update/:id').put(updateUser)


export default router;
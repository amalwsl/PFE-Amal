import express from "express";
import {
    getMeeting,addMeeting,deleteMeeting, updateMeeting
} from "../controllers/meetingController.js";

const router = express.Router();

router.route('/meeting').get(getMeeting)
router.route('/add').post(addMeeting)
router.route('/delete/:id').delete(deleteMeeting)
router.route('/update/:id').put(updateMeeting)


export default router;
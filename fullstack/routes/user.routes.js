import express from "express";
import { registerUser, verifyUser , loginUser} from "../controller/user.controller.js";

const router = express.Router();
router.post('/register', registerUser)
router.get('/verify/:token', verifyUser)  // params are passed with :<paramname>  and decunstructed via req.params in controller
router.post('/login', loginUser) 

export default router;
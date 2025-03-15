import express from 'express'
import { loginUser,registerUser,healthCheck } from '../controllers/auth.controller.js';


const userRouter = express.Router();
userRouter.post('/login',loginUser)
userRouter.post('/register',registerUser)
userRouter.get('/healthcheck',healthCheck)


export default userRouter;
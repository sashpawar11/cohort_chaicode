import express from "express";
import {
  registerUser,
  verifyUser,
  loginUser,
  forgotPassword,
  resetPassword,
  logoutUser,
  getMe,
} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/register", registerUser);
router.get("/verify/:token", verifyUser); // params are passed with :<paramname>  and decunstructed via req.params in controller
router.post("/login", loginUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);
router.post("/logoutUser",isLoggedIn, logoutUser);
router.get("/me", isLoggedIn, getMe);    // isLoggedIn ( Middleware Function)

export default router;

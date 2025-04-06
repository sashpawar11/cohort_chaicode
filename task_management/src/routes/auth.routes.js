import { Router } from "express";
import { registerUser, verifyUser,loginUser } from "../controllers/auth.controllers.js";
import { userRegistrationValidator } from "../validators/index.js";
import { validate } from "../middlewares/validator.middlewares.js";


const router = Router();

// handle validation using middleware and validator --- factory pattern
router.route("/register").post(userRegistrationValidator(),validate,registerUser);

export default router;

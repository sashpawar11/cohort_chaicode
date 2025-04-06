import { body } from "express-validator";

const userRegistrationValidator = () => {

    return [

        body('email')
            .trim()
            .notEmpty().withMessage("Email is a required field!")
            .isEmail().withMessage("Email is invalid!"),
        body('username')
            .trim()
            .notEmpty().withMessage("Username is a required field!")
            .isLength({min: 3}).withMessage("Minimum required length of username is 3 characters")
            .isLength({ max: 13 }).withMessage("Maximum required length of username is 13 characters"),
        body('password')
            .trim()
            .notEmpty().withMessage("Password is a required field!")
            .isLength({min: 3}).withMessage("Minimum required length of password is 3 characters")
            .isLength({max: 13}).withMessage("Maximum required length of password is 13 characters")
    ];
}

const userLoginValidator = () => {

    return [
        
        
        body('email')
            .trim()
            .notEmpty().withMessage("Email is a required field!")
            .isEmail().withMessage("Email is invalid!"),
        body('username')
            .trim()
            .notEmpty().withMessage("Username is a required field!")
            .isLength({min: 3}).withMessage("Minimum required length of username is 3 characters")
            .isLength({ max: 13 }).withMessage("Maximum required length of username is 13 characters"),
        body('password')
            .trim()
            .notEmpty().withMessage("Password is a required field!")
            .isLength({min: 3}).withMessage("Minimum required length of password is 3 characters")
            .isLength({max: 13}).withMessage("Maximum required length of password is 13 characters")

    ]
}
export { userRegistrationValidator, userLoginValidator }
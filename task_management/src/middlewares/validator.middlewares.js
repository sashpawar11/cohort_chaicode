import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req, res, next) => {
    
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next();
    }
    const extractedError = []
    errors.array().map((error) => extractedError.push({
        [error.path] : error.msg
    }));

    throw new ApiError(432,"Received data is invalid",extractedError)
}
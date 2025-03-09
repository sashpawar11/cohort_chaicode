import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default : "user"
    },
    isVerified: Boolean,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
},
    {
    timestamps : true
    }
)
const User = mongoose.model("User", userSchema)  // Mongoose automatically makes the model name passed to plural and smallcase.


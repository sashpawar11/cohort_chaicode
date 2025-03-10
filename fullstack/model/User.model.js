import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username: String,
    email: String,
    passsword: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default : "user"
    },
    isVerified: {
        type: Boolean,
        default: false,
      },
      verificationToken: {
        type: String,
      },
      resetPasswordToken: {
        type: String,
      },
      resetPasswordExpires: {
        type: Date,
      },
},
    {
    timestamps : true
    }
)

// mongooseHooks  ( PRE AND POST HOOKS)
userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

userSchema.post("save", async function () { })





const User = mongoose.model("User", userSchema)  // Mongoose automatically makes the model name passed to plural and smallcase.


export default User
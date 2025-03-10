import User from '../model/User.model.js'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import bcript from 'bcryptjs'

dotenv.config()

const registerUser = async (req, res) => {
    //res.send('Registered User')

    
    // get data
    const { username, password, email } = req.body
    if (!username || !password || !email) {
        return res.status(400).json({ 
            message : "All fields are required"
        })
    }
    console.log(username, email, password)

    // validate
    // - eg if password, email are corect format , libraries -> zod ,yup etc.


    // check if user already exists
    try {

        const existingUser = await User.findOne({ email })   // db in different continent, await on all db calls
        if (existingUser) {
            return res.status(400).json({
                message : "User already exists!"
            })
        }
        

        // if not, create a user in db
        const user = await User.create({ username,email,password})
        
        if (!user) {
            return res.status(400).json({
                message : "Error creating user!"
            })
        }
        console.log(user);


         // create a verification token
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);

        // save token in database
        user.verificationToken = token

        await user.save()


          
        // send token as email to user
        var transport = nodemailer.createTransport({
            host: process.env.MAILTRAP_URL,
            port: process.env.MAILTRAP_PORT,
            auth: {
              user: process.env.MAILTRAP_AUTH_USER,
              pass: process.env.MAILTRAP_AUTH_PASS
            }
        });
        
        const emailOptions = {
            from: process.env.MAILTRAP_SENDER_EMAIL, // sender address
            to: user.email, // list of receivers
            subject: "Verify your email address!", // Subject line
            text: `Please click on the following link : 
                ${process.env.BASE_URL}/api/v1/users/verify/${token}` // plain text body
            // html: "<b>Hello world?</b>", // html body
          }

        const info = await transport.sendMail(emailOptions);
        
        console.log("Message sent: %s", info.messageId);

        res.status(201).json({
            message : "User registered successfully",
            success : true,
        })

    } catch (error) {
         res.status(400).json({
            message : `User not registered ! Err: ${error}`,
            success : false,
        })
    }
   
}

const verifyUser = async (req, res) => {

    // get verification token from URL
    const { token } = req.params;
    console.log(token);
    if (!token) {
        return res.status(400).json({
            message : "Invalid Token"
        })
    }
    
    // verify user with token
            // find user document from collection with verification token
    const foundUser = await User.findOne({ verificationToken: token })

    if (!foundUser) {
        return res.status(400).json({
            message : "User not found!"
        })
    }

    foundUser.isVerified = true
    foundUser.verificationToken = ''
    await foundUser.save()

    res.status(201).json({
        message : "User verified successfully",
        success : true,
    })
            // If found - set isVerified to true in the user document
    // Remove verification token from user document
    // save
    // return resp

    }


export {registerUser, verifyUser} 
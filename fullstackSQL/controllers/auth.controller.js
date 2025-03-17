import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

dotenv.config();

const prisma = new PrismaClient();


const registerUser = async (req, res) => {

    const { name, email, password, phone } = req.body
    
    if (!name || !email || !password || !phone) {
        console.log("all fields not found")
        res.status(400).json({
            message: "All fields are mandatory!",
            success : false
        })
    }
    console.log("user register route")
   try {
     const user = await prisma.user.findUnique({
         where: { email }
     })
 
     if (user) {
        res.status(400).json({
            message: "User already existing!",
            success : false
        })
     }
     
    // hash the pass
    const hashedpass = await bcrypt.hash(password, 10);
    
       //verfiication token
       const verfiicationToken = crypto.randomBytes(32).toString("hex");

       
       
       const newuser = await prisma.user.create({
           data: { name: name, email: email, phone ,password: hashedpass, verificationToken}
       });

       sendEmailUtil(
        newuser.email,
        "Verify your email address!",
        `Please click on the following link :
                  ${process.env.BASE_URL}/api/v1/users/verify/${verfiicationToken}`,
      );

       
   } catch (error) {
        res.status(400).json({
        message: `User not registered ! Err: ${error}`,
        success: false,
      });
   }
}



const loginUser = async (req, res) => {

    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({
            message: "All fields are mandatory!",
            success : false
        })
    }
    
    try {
    
        const findUser = user.findUnique({ where: email });
        if (!findUser) {
            res.status(400).json({
                message: "User not found!",
                success : false
            })
        }
    
        const isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) {
            return res.status(400).json({
              message: "Invalid credentials!",
            });
        }
        
        // generate JWT Token
        const jwtToken = jwt.sign({ id: findUser.id, role: findUser.role }, process.env.JWT_SECRET, { expiresIn: '24h' })
        
        // set jwt token to user cookie using cookie-parser
        const cookieOptions = {
            httpOnly: true, // only accessible to backend
            secure: true,
            maxAge: 24 * 60 * 60 * 1000, // 24h
          };
      
        res.cookie("jwtToken", jwtToken, cookieOptions);
        
        return res.status(200).json({
            message: "Sucess, logged in!",
            success: true,
            user: {
              id: userExists._id,
              name: userExists.name,
              role: userExists.role,
            },
            token: jsontoken,
          });
    } catch (error) {
    return res.status(401).json({
        message: "Login Failed",
        error: error.toString(),
      });   
    }

}


const healthCheck = async (req, res) => {
    console.log("Healthcheck hit!")
    return res.status(200).json({
                healthcheckStatus : "Up and running"
    })
}

export { loginUser, registerUser, healthCheck }
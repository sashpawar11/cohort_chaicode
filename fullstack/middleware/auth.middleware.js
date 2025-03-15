import jwt from 'jsonwebtoken'

export const isLoggedIn = async (req, res, next) => {


    try {
        // check if cookies present
        let jwtToken = req.cookies?.jwtToken  // optional chaining(?)
        console.log('Token Found : ', jwtToken ? "YES" : "NO");
        
        if (!jwtToken) {
            return res.status(401).json({
                message: "Token not found in cookies! Auth Failed",
                success : false
            })
        }

        // verify jwtToken
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        console.log('Decoded jwttoken: ',decoded);

        req.user = decoded;    // add decodedObject in req user from middleware

        next();

    } catch (error) {
        console.log("Auth Failutre: ", error)
        return res.status(400).json({
            message: "Internal server error",
            success: false,
            error : error
        })

    }
  

}
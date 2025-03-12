import dotenv from 'dotenv'
import nodemailer from 'nodemailer'


dotenv.config();

const sendEmailUtil = async(to,subject,text) => {



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
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text // plain text body
            // html: "<b>Hello world?</b>", // html body
          }

    const info = await transport.sendMail(emailOptions)
    console.log("Message sent: %s", info.messageId, info);
      
    
}

export {sendEmailUtil} 
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'


dotenv.config();

const mailerUtil = async(mailObj) => {


try {
    
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
                to: mailObj.to, // list of receivers
                subject: mailObj.subject, // Subject line
                text: mailObj.text, // plain text body
                html: mailObj.html // html body
              }
    
        const info = await transport.sendMail(emailOptions)
        console.log("Message sent: %s", info.messageId, info);
          
} catch (error) {
    console.warn("Error occured in sending mail(mailerUtil) : ", error);
}
    
}

export {mailerUtil} 
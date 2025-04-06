import Mailgen from "mailgen";
import nodemailer from "nodemailer"
import { mailerUtil } from "./mailer";

const sendMail = async (options) => {

 try {
       const mailGenerator = new Mailgen({
           theme: 'default',
           product: {
               // Appears in header & footer of e-mails
               name: 'Task Manager',
               link: 'https://saishpawar.com/'
               // Optional product logo
               // logo: 'https://mailgen.js/img/logo.png'
           }
       });
   
       const emailText = mailGenerator.generatePlaintext(options.mailGenContent);
       const emailHTML = mailGenerator.generate(options.mailGenContent);
   
       require('fs').writeFileSync('preview.html', emailBody, 'utf8');
        
        const mailObj = {
            to: options.to,
            subject: options.subject,
            text: emailText,
            html: emailHTML
        }
     
       mailerUtil(mailObj);
     
 } catch (error) {
    console.warn("Error occured in creating mail : ", error);
 }
}


//factory pattern

const emailVerificationMailGenContent = (username, verificationUrl) => {
    
    return {
        body: {
            name: username,
            intro: "Welcome to Task manager, we are excited to onboard you!",
            action: {
                instructions: 'To get started with task manager, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Verify your account',
                    link: verificationUrl,
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        },

    }
}

const fogotPasswordMailGenContent = (username, passwordResetUrl) => {
    
    return {
        body: {
            name: username,
            intro: "You have requested for forgot password!",
            action: {
                instructions: 'Click the below button to change your password',
                button: {
                    color: '#2d06db', // Optional action button color
                    text: 'Reset password',
                    link: passwordResetUrl,
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        },

    }
}

export default sendMail;
//example

// sendMail({
//     email: user.email,
//     subject: "test",
//     mailGenContent: emailVerificationMailGenContent(username, `${verificationUrl}`)
// })
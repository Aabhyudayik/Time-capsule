import Capsule from "./capsule.js"
import nodeCron from "node-cron"
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})
nodeCron.schedule('* * * * * ', async () => {
   const capsules =await Capsule.find({random_date:{$lte: new Date()}})
   for(const capsule of capsules){
    const mailOptions={
        from:process.env.EMAIL,
        to:capsule.email,
        subject:"Your Time Capsule has arrived📷",
        attachments:[{
            filename:"TimeCapsule.png",
            content:capsule.picture.split(',')[1],
            encoding:'base64',
            contentType:'image/png'
        }]


    }
    try{
        await transporter.sendMail(mailOptions)
        await capsule.deleteOne()
    }
    catch(error){
        console.log(error)
    }


    


   }
    
})
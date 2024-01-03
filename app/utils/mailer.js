const nodemailer=require('nodemailer');
const mailConfig = require('../config/mailer.config');
require('dotenv/config');

module.exports.sendMail=(to,subject,htmlContent) =>{
    const transport=nodemailer.createTransport({
        host: mailConfig.HOST,
        port: mailConfig.PORT,
        secure:false,
        service:"Gmail",
        auth:{
            user:mailConfig.USERNAME,
            pass:mailConfig.PASSWORD
        }

    });
    const options={
        from:mailConfig.FROM_ADDRESS,
        to:to,
        subject:subject,
        html:htmlContent,
    }
    return transport.sendMail(options);
}

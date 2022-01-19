const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'infobirthdayreminder@gmail.com',
        pass: 'LstimSksRoaMoK999'
    }
})

// https://stackoverflow.com/questions/58412252/nodemailer-does-not-send-the-text-with-line-breaks
module.exports.sendCongratsEmail = (recipientEmail, subject, emailBody, firstname, lastname, email) => {
    transporter.sendMail({
        from: `${firstname} ${lastname} <infobirthdayreminder@gmail.com>`,
        to: recipientEmail,
        subject: subject,
        replyTo: email,
        text: emailBody
    }).catch(error => console.log(error))
}

module.exports.sendTodaysBdaysEmail = (
    recipientEmail,
    recipientFirstname,
    recipientLastname,
    firstname,
    lastname,
    age
    ) => {
        transporter.sendMail({
            from: 'BirthdayReminder <infobirthdayreminder@gmail.com>',
            to: recipientEmail,
            subject: `Birthday reminder - today is ${firstname}'s birthday`,
            html: `<div style='text-align: center'>
                    <img src='cid:BirthdayReminder_logo' width='200' style='margin: auto auto'/>
                    <h2>Dear ${recipientFirstname} ${recipientLastname}!</h2>
                    <p>Today is ${firstname} ${lastname}'s birthday!
                        <br>
                        ${firstname} turns ${age} today!!!
                    </p>
                   </div>`,
            attachments: [{
                filename: 'logo.png',
                path: __dirname + '/logo.png',
                cid: 'BirthdayReminder_logo'
            }]
        }).catch(error => console.log(error))
}
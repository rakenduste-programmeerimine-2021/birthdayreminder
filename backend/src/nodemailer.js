const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'infobirthdayreminder@gmail.com',
        pass: 'LstimSksRoaMoK999'
    }
})

module.exports.sendCongratsEmail = (firstname, lastname, email, senderFirstname, senderLastname) => {
    transporter.sendMail({
        from: 'infobirthdayreminder@gmail.com',
        to: email,
        subject: 'Happy birthday!',
        html: `<h2>Dear ${firstname} ${lastname}!</h2>
                <p>Congratulations to you on this wonderful day.
                Lots of virtual hugs&#10084;<br>
                Best wishes, ${senderFirstname} ${senderLastname}</p>`
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
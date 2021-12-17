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

const express = require('express')
const mongoose = require('mongoose')
const cron = require('node-cron')
const nodemailer = require('./nodemailer')
const Birthday = require('./models/Birthday')
const User = require("./models/User")
const PORT = process.env.PORT || 3000
require("dotenv").config()

const authRoutes = require('./routes/auth');
const bdayRoutes = require('./routes/birthday')

const app = express()
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/auth', authRoutes);
app.use('/api/bday', bdayRoutes)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})

// https://crontab.guru/#0_6_*_*_*
// Cron job: run this anonymous function every day at 6 o'clock
cron.schedule('0 6 * * *', async () => {
  const today = new Date()
  console.log('\nThe new cron job...Server time is: ' + today)
  const todaysDay = today.getDate()
  const todaysMonth = today.getMonth() + 1
  const todaysYear = today.getFullYear()

  const todaysDate = `${todaysDay}-${todaysMonth}`
  const todaysBirthdays = await Birthday.find({ birthDay: RegExp(todaysDate) })

  for(todaysBirthday of todaysBirthdays) {
    // console.log(todaysBirthday)
    const birthdayYear = todaysBirthday.birthDay.split("-").pop()
    const age = todaysYear - birthdayYear
    // console.log(age)

    const recipientInfo = await User.findOne({ _id: todaysBirthday.createdBy })
    // console.log(recipientInfo.email)
    // console.log(`${recipientInfo.firstName} ${recipientInfo.lastName}`)

    nodemailer.sendTodaysBdaysEmail(
      recipientInfo.email,
      recipientInfo.firstName,
      recipientInfo.lastName,
      todaysBirthday.firstName,
      todaysBirthday.lastName,
      age
    )
  }
}, {
  scheduled: true,
  timezone: 'Europe/Tallinn'
})


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
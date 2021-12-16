const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const MONGODB_URI = 'mongodb://kasutaja:birthday@mongo/BirthdayReminder?authSource=admin'
mongoose.connect(MONGODB_URI)

mongoose.connection
    .once('open', () => console.log('Connected'))
    .on('error', (error) => console.log(error))

    beforeEach((done) => {
        mongoose.connection.collections.users.drop(() => {
            mongoose.connection.collections.birthdays.drop(() => {
                done()
            })
        })
    })
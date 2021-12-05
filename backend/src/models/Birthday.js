const { Schema, model } = require('mongoose')

const birthdaySchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDay: { type: String, required: true},
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now}
})

const Birthday = model('Birthday', birthdaySchema)

module.exports = Birthday
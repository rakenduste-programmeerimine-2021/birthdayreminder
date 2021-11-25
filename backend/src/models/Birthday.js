const { Schema, model } = require('mongoose')

const birthdaySchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    birthDay: { type: Number, required: true},
    birthMonth: { type: Number, required: true},
    birthYear: { type: Number, required: true},
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now}
})

const Birthday = model('Birthday', birthdaySchema)

module.exports = Birthday
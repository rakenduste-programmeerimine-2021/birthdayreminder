const Birthday = require('../models/Birthday')

exports.addBirthday = async (req, res) => {
    const { firstName, lastName, email, birthDay, birthMonth, birthYear, createdBy } = req.body

    try {
        const newBirthday = new Birthday({
            firstName,
            lastName,
            email,
            birthDay,
            birthMonth,
            birthYear,
            createdBy
        })

        const savedBirthday = await newBirthday.save()
        if(!savedBirthday) throw Error('Error saving birthday')

        res.status(200).json({ message: 'New birthday added!'})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.getBirthdays = async (req, res) => {
    const { createdBy } = req.body
    const birthdays = await Birthday.find({ createdBy: createdBy})
    
    if(!birthdays){
        res.status(404).send('No birthdays found...')
    }

    res.status(200).send(birthdays)
}
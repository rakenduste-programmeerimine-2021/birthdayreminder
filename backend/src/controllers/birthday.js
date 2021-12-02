const Birthday = require('../models/Birthday')

exports.addBirthday = async (req, res) => {
    const { firstName, lastName, email, birthDay } = req.body
    
    // To make a bigger use of the jwt ... I'll take createdBy data from it
    // Actually, jwt has already been verified. And the user info in it has been decoded.
    // And assaigned to req.user. So here I can use that information :)
    console.log(req.user)
    const id = req.user.id
    console.log(id)

    try {
        const newBirthday = new Birthday({
            firstName,
            lastName,
            email,
            birthDay,
            createdBy: id
        })

        const savedBirthday = await newBirthday.save()
        if(!savedBirthday) throw Error('Error saving birthday')

        // res.status(200).json({ message: 'New birthday added!'})
        res.status(200).send( savedBirthday )
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

exports.deleteBirthday = async (req, res) => {
    const { id } = req.params
    const birthday = await Birthday.findOneAndDelete({ _id: id })

    if(!birthday){
        res.status(404).send('This birthday was not found...')
    }

    res.status(200).send(birthday._id)
}
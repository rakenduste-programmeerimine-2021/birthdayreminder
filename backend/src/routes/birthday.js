const router = require('express').Router()
const birthdayController = require('../controllers/birthday')

router.get('/get-birthdays', birthdayController.getBirthdays)
router.post('/add-birthday', birthdayController.addBirthday)

module.exports = router
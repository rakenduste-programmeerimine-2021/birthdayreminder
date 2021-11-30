const router = require('express').Router()
const birthdayController = require('../controllers/birthday')
const jwtAuth = require('../middleware/jwtAuth')

router.get('/get-birthdays', birthdayController.getBirthdays)
router.post('/add-birthday', jwtAuth, birthdayController.addBirthday)

module.exports = router
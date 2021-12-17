const router = require('express').Router()
const birthdayController = require('../controllers/birthday')
const jwtAuth = require('../middleware/jwtAuth')

router.get('/get-birthdays', jwtAuth, birthdayController.getBirthdays)
router.post('/add-birthday', jwtAuth, birthdayController.addBirthday)
router.delete('/delete-birthday/:id', jwtAuth, birthdayController.deleteBirthday)
router.put('/update-birthday/:id', jwtAuth, birthdayController.updateBirthday)
router.get('/send-congrats/:id', jwtAuth, birthdayController.sendBdayCongrats)

module.exports = router
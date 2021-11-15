// The entire file is for testing purposes - to see if the req goes through with Postman

const router = require("express").Router()
const itemController = require("../controllers/item")

router.get("/", itemController.getItems)
router.post("/create", itemController.createItem)

module.exports = router
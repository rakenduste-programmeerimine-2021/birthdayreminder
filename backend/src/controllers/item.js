// The entire file is for testing purposes - to see if the req goes through with Postman

const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})

  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const newItem = {
    name: "Table",
    quality: 99,
    unused: true,
    color: "blue"
  }

  const createdItem = new Item(newItem)

  const savedItem = await createdItem.save()

  res.status(200).send(`yay ${savedItem._id}`)
}
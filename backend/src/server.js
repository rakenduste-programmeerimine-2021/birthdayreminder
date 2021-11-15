const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000


// Next line is for testing purposes - to see if req goes through with Postman
const itemRoutes = require('./routes/item');

const app = express()


// Next line is for testing purposes - to see if req goes through with Postman
app.use(express.json());


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


// Next line is for testing purposes - to see if req goes through with Postman
app.use('/api/item', itemRoutes);

app.get('/', (req, res) => {
  res.send('Hello World')
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`test Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
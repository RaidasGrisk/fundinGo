const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const express = require("express")
const app = express()

app.use(express.json({ extended: false }))

// mongodb credentials
const mongo_acc = process.env.mongo_acc
const mongo_psw = process.env.mongo_psw
const connectionString = `mongodb+srv://${mongo_acc}:${mongo_psw}@cluster0.ejotl.gcp.mongodb.net/test?retryWrites=true&w=majority`
console.log(mongo_acc, mongo_psw)

app.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: `Ok`,
    })
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error")
  }
})

MongoClient.connect(connectionString, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')

  const db = client.db('fundingo')

  app.post('/subscribe', function (req, res) {
    db.collection('subs').insertOne(req.body).then(resp => {
      res.send('success')
    })
  })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

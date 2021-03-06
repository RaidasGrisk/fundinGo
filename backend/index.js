const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const cors = require('cors')

const express = require("express")
const app = express()

app.use(express.json({ extended: false }))
app.use(cors({ origin: '*' }))

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

const isValidEmail = (email) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email.match(regexEmail)) {
    return true
  } else {
    return false
  }
}

// why do we make a separate connection with every request?
// vercel will make a new connection if this is done properly
// these connection will keep on growing until..?
// So, that is why we connect and close the cb conection on every request
app.post('/subscribe', (req, res) => {
  if (!isValidEmail(req.body.email)) {
    return res.status(500).send("Invalid email")
  }
  const client = new MongoClient(connectionString)
  client.connect((err) => {
   const db = client.db('fundingo')
   db.collection('subs').insertOne(req.body).then(resp => {
     client.close()
     res.send('success')
   })
  })
})

// MongoClient.connect(connectionString, (err, client) => {
//   if (err) return console.error(err)
//   console.log('Connected to Database')
//
//   const db = client.db('fundingo')
//
//   app.get('/getsubs', function (req, res) {
//     db.collection('subs').find().toArray().then(resp => {
//       res.send(resp)
//     })
//   })
//
//   app.post('/subscribe', function (req, res) {
//     // console.log(req.body, req.body.email)
//     // res.send('success', req.body, req.body.email)
//     db.collection('subs').insertOne(req.body).then(resp => {
//       res.send('success')
//     })
//   })
// })


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

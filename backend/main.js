const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.options('*', cors())
app.use(express.json())


const port = 3001
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://admin:<password>@cluster0.actbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url);
client.connect()
  .then(() => {
    const collection = client.db(`myFirstDatabase`).collection('myFirstCollection');
    setUpAPI(collection);
  })
  .catch(err => {
    if (err.code === 8000) {
      console.log("Authentication to DB failed");
    }
    else {
      console.log("Unknown error when connecting to the DB: " + err);
    }
  });

function setUpAPI(collection) {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.put('/lead', (req, res) => {
    collection.insertOne(req.body);
    res.json({ asdf: req.body })
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}
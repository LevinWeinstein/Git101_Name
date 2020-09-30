const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  fs.readdir("contributors", (err, files) => {
    if (err){
      res.send({error: "can't find contributors"})
    } else {
      res.send(files);
    }
  })
})

app.listen(PORT)
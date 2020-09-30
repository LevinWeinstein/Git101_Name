const express = require('express')
const { fdatasync } = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  fdatasync.readdir(testFolder, (err, files) => {
    res.send(files);
  })
})

app.listen(PORT)
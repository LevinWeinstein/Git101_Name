const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  fs.readdir("contributors", (err, files) => {

    const names = files.map(fullName => {
      return fullName
      .split('-')
      .map(name => name .replace(/\.te?xt/i, ''))
      .join(' ')
    }).map(person => `<li>${person}</li>`)
      .join(' ')
    if (err){
      res.send({error: 'can\'t find contributors'})
    } else {
      res.send(`<h1>Contributors:</h1><ul>${names}</ul>`);
    }
  })
})

app.listen(PORT)
const express = require('express')  // Import express
const app = express()  // create the express app


app.get('/server', (req, res) => {  // the location of the server (localhost:port/server)
  res.send('response')
})

app.listen(5000, () => {  // listen to port 5000 (localhost:5000/)
  console.log('listening ...')
})
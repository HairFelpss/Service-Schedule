const express = require('express')
const app = express()
const port = 8001

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => console.log('listen to port =>', port))

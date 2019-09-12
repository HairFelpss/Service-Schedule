const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(port, () => console.log('listen to port =>', port))

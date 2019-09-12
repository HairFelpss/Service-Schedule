const express = require('express')
const app = express()
const port = 8001

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create-appointment', (req, res) => {
    res.render('createAppointment')
})

app.get('/confirm-appointment', (req, res) => {
    res.render('confirmAppointment')
})

app.get('/client-information', (req, res) => {
    res.render('clientInformation')
})

app.get('/work-type', (req, res) => {
    res.render('workType')
})



app.listen(port, () => console.log('listen to port =>', port))

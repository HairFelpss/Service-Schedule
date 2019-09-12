const express = require('express');
const app = express();
const port = 8000;


//Escolha de template engine que utilizaremos, no caso a EJS.
app.set('view engine', 'ejs');

//Criação de rotas da api. (Não utilizaremos o backend separado do front no momento)...

//rota raiz ou "home".
app.get('/', (req, res) => {
    res.render('home');
});

//rota para criar appointments.
app.get('/create-appointment', (req, res) => {
    res.render('createAppointment');
});

//rota para confirmar appointments.
app.get('/confirm-appointment', (req, res) => {
    res.render('confirmAppointment');
});

//rota para registrar as informações do cliente.
app.get('/client-information', (req, res) => {
    res.render('clientInformation');
});

//rota para informar o tipo de serviço.
app.get('/work-type', (req, res) => {
    res.render('workType');
});

//porta do roteador que utilizaremos é a 8000.
app.listen(port, () => console.log('listen to port =>', port));

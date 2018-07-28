const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const cadastros = {
    'jose': 'jose@jose',
    'joao': 'joao@joao',
    'maria': 'maria@maria'
}

app.get('/emails', (req, res) => {
    res.send(cadastros);
});

app.post('/cadastrar', (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => console.log('Aplicação iniciada.'));
const bodyParser = require('body-parser');
const express = require('express');

const app = express(); // 1

app.use(bodyParser.json());

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}

const langs = ['HTML', 'CSS', 'JS', 'REACT']

app.get('/langs', (req,res) => {
  res.send(langs)
})

app.post('/langs', (req,res) => {
  langs.push('node.js');
  res.send('Linguagem Node adicionada com sucesso')
})
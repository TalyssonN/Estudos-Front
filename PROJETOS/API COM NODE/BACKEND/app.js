const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const porta = 3000;


app.listen(porta, () => {
  console.log('Servidor rodando na porta '+ porta);
});
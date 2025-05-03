const express = require('express');
const cors = require('cors');
const app = express();
const serviceRoutes = require('./routes/router');

app.use(cors());
app.use(express.json());

//Db CONNECTION
const conn = require('./db/conn');
conn();

app.use(express.json());
app.use('/api', serviceRoutes);

app.listen(3000, () => {
  console.log('Servidor Online!');
});
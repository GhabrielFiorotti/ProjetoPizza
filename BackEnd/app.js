const express = require('express');

const app = express();
app.use(express.json());

const rotaPizza = require('./pizzas');
app.use('/projeto', rotaPizza);

app.listen(3000);
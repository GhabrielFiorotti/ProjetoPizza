const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(express.static('public'))
app.use(express.json());

const rotaPizza = require('./pizzas');
app.use('/projeto', rotaPizza);



app.listen(PORT);

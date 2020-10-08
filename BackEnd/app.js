const express = require('express');
const cors = require("cors");


const app = express();
app.use(cors())
app.use(express.json());

const rotaPizza = require('./pizzas');
app.use('/projeto', rotaPizza);

app.listen(3000);
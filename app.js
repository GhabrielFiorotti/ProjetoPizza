const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(express.json());

const rotaPizza = require('./pizzas');
app.use('/projeto', rotaPizza);

router.get('/imgpizza', function(req, res){
  res.sendFile(path.join(__dirname+'/img/pizza1.jpg'));
});

app.listen(PORT);

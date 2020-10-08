const database = require('../database');


const pizzas = database.sequelize.define('Pizza', {
    pizza_id : {type: database.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type : database.Sequelize.STRING(50), allowNull : false},
    tamanho : {type : database.Sequelize.STRING(1), allowNull : false},
    valor : {type : database.Sequelize.STRING(5),allowNull : false},
    img : {type : database.Sequelize.STRING(50)}
    
}); 


console.log("RODANDO")
//pizzas.sync({force: true});
module.exports = pizzas;

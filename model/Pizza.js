const database = require('../database');


const pizza = database.sequelize.define('pizza', {
    pizza_id : {type: database.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome : {type : database.Sequelize.STRING(255), allowNull : false},
    tamanho : {type : database.Sequelize.STRING(255), allowNull : false},
    valor : {type : database.Sequelize.STRING(5),allowNull : false},
    img : {type : database.Sequelize.STRING(50)}
    
}); 


console.log("RODANDO")
pizza.sync({force: false});
module.exports = pizza;


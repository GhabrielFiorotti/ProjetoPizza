/* const Sequelize = require('sequelize');
require('dotenv/config'); */
/* const sequelize = new Sequelize(`postgres://${process.env.user}:${process.env.pwd}@${process.env.host}:${process.env.port}/${process.env.database}`)
 */
/* const sequelize = new Sequelize(process.env.database, process.env.user, process.env.pwd, {
    host: process.env.HOST,
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});
 */
/* console.log("passou")

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}; */


const Sequelize = require('sequelize');
require('dotenv/config');
const sequelize = new Sequelize(process.env.DATABASE_URL)
//postgres://${process.env.USER}:${process.env.PWD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}
console.log("passou")

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};





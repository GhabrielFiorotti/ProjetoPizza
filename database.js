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
const sequelize = new Sequelize("postgres://oegfitrzdodecg:46739d82d1c2494896c7c730565886e0765d543bc8e13571626de1ad90650735@ec2-52-73-199-211.compute-1.amazonaws.com:5432/d815f7vv6rutqf")
//postgres://${process.env.USER}:${process.env.PWD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}
console.log("passou")

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};





require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    maxConcurrentQueries: 100,
    define: {
        timestamps: false,
        freezeTableName: true,
    },
});

exports.sequelize = sequelize;

exports.connection = () => {
    sequelize
    .authenticate()
    .then(() => {
        console.log('Connexion établie avec succès');
    }).catch(error => {
        console.error(`Connexion échouée, Erreur : ${error}`);
    })
}
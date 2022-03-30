const Sequelize = require('sequelize');
const { sequelize } = require('./dbhelper');

const Registration = sequelize.define('registration',  {
    username: {
        type: Sequelize.STRING(35),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    salt: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
});

exports.registration = (username, password, salt) => {
    return Registration.create({
        username: username,
        password: password,
        salt: salt,
    })
    .then(() => {
        return "Bravo ! Un élément enregistré avec succès"
    }).catch((error) => {
        console.log(`Ooohps !! Une erreur s'est produite : ${error}`)
    });
};
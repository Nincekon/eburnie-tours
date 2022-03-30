const Sequelize = require('sequelize');
const { sequelize } = require('./dbhelper');

const Registration = sequelize.define("registration", {
    email: {
        type: Sequelize.STRING(30),
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

exports.registration = (email, password, salt) => {
    return Registration.create({
        email: email,
        password: password,
        salt: salt,
    })
    .then(() => {
        return "success"
    }).catch((error) => {
        console.log(`Ooohps !! Une erreur s'est produite : ${error}`)
        return error;
    });
};
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { register } = require('../controllers/auth')

router.post('/register', [
    check('email', 'email non valide').isEmail(),
    check('password', 'Mot de passe insuffisant').isLength({min: 5, max: 10}),
], register);

module.exports = router;
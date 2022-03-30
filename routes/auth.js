const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

router.post('/register', [
    check('email', 'email non valide').isEmail(),
    check('password', 'Mot de passe insuffisant').isLength({min: 3, max: 10}),
], register)
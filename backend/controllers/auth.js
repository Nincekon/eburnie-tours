const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const { registration } = require('../models/auth')

exports.register = (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        return res.status(422).json({
            error: "registration not success. Valid data not sent in the request."
        })
    }

    const salt = uuidv4();
    const encryptedPassword = crypto
        .pbkdf2Sync(password, salt, 1000, 64, "sha512")
        .toString("hex");

        registration(email, encryptedPassword, salt).then((result) => {
                if (result === "success") 
                    return res.status(201).json({ message: "Compte créé avec succès" });
                else
                    return res.status(400).json({message: "Création échouée"});
            });
};
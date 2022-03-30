const express = require ('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./models/dbhelper');
const authRoute = require('./routes/auth');

const app = express();

db.connection();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Route
app.use("/api/auth", authRoute);

app.use(cookieParser());

const port = process.env.PORT;
app.listen(port, (params) => {
    console.log(`localhost:${port} - Exécution en cours`)
});


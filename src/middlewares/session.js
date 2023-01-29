const session = require('express-session');
const mysql2 = require('mysql2/promise');
const MySQLStore = require('express-mysql-session')(session);

const options = {
    host: process.env.DB_HOST,
    port: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const connection = mysql2.createPool(options);

sessionStore = new MySQLStore({}, connection);

module.exports = () => {

    return session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
    })

}

const obk = {
    "cookie": {
        "originalMaxAge": null,
        "expires": null,
        "httpOnly": true,
        "path": "/"
    },
    "user": {
        "test": "hecho"
    }
}
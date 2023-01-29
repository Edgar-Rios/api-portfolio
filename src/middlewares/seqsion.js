// load dependencies
const {sequelize} = require("../database/models");
var session = require("express-session");

// initalize sequelize with session store
var SequelizeStore = require("connect-session-sequelize")(session.Store);

const store = new SequelizeStore({ db: sequelize });

store.sync();
// configure express
module.exports =  () => {
        return session({
            secret: process.env.SESSION_KEY,
            store: store,
            resave: false, // we support the touch method so per the express-session docs this should be set to false
            proxy: true, // if you do SSL outside of node.
            saveUninitialized: true,
          })
    }

// require('dotenv').config();

module.exports = {
  // "development": {
  //   "username": process.env.DB_USER,
  //   "password": process.env.DB_PASSWORD,
  //   "database": process.env.DB_NAME ,
  //   "host": process.env.DB_HOST ,
  //   "dialect": "mysql",
  //   "port": process.env.DB_PORT,
  // }
  "development": {
    "username": process.env.DB_USER_CC,
    "password": process.env.DB_PASSWORD_CC,
    "database": process.env.DB_NAME_CC,
    "host": process.env.DB_HOST_CC,
    "dialect": "mysql",
    "port": process.env.DB_PORT_CC,
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}

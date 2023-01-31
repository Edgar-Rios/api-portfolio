require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const session = require('./src/middlewares/seqsion');

const app = express();

// MIDDLEWARS
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session());


// ROUTING
let indexRouter = require('./src/routes');
app.use('/', indexRouter)

app.post('/test', (req, res) => {
    req.session.user = {
        test: "hecho"
    }
    console.log("hecho")

    res.end()
})

app.get('/test', (req, res) => {
    console.log(`aho ta => ${req.session.user.test}`)
    res.end();
})



module.exports = app;
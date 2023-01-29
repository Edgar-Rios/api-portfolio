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


// ROUTERS
// const homeRouter = require('./src/routes/home');
const ownersRouter = require('./src/routes/owners');
const proyectsRouter = require('./src/routes/proyects');
const contactsRouter = require('./src/routes/contacts');
const thoughtsRouter = require('./src/routes/thoughts');
const categoryRouter = require('./src/routes/categories');

// app.use('/', homeRouter);
app.use('/owners', ownersRouter);
app.use('/proyects', proyectsRouter);
app.use('/contacts', contactsRouter);
app.use('/thoughts', thoughtsRouter);
app.use('/categories', categoryRouter);

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

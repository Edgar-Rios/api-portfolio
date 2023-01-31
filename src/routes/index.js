const router = require('express').Router();

// const homeRouter = require('./src/routes/home');
const ownersRouter = require('./src/routes/owners');
const proyectsRouter = require('./src/routes/proyects');
const contactsRouter = require('./src/routes/contacts');
const thoughtsRouter = require('./src/routes/thoughts');
const categoryRouter = require('./src/routes/categories');


// router.use('/', homeRouter);
router.use('/owners', ownersRouter);
router.use('/proyects', proyectsRouter);
router.use('/contacts', contactsRouter);
router.use('/thoughts', thoughtsRouter);
router.use('/categories', categoryRouter);

module.exports = router;
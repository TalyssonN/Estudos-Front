const router = require('express').Router();

const serviceRouter = require('./service');

router.use('/service', serviceRouter);

module.exports = router;
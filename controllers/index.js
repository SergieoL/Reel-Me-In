const router = require('express').Router();

const controllerRoutes = require('./api');

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;
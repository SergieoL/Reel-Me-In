const router = require('express').Router();
const homeRoutes = require('./home-routes');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);


// 404 error for request of non-existent end point
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;




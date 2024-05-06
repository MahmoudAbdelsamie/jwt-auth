const { getUser } = require('../controllers/user');
const { isAuthunticated, isAuthorized } = require('../middlewares/authorize');

const router = require('express').Router();


router
    .route('/user')
    .get(
        isAuthorized,
        getUser
    )


module.exports = router;

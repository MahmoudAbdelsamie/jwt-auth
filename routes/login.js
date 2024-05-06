const { login } = require('../controllers/login');

const router = require('express').Router();


router
    .route('/login')
    .post(
        login
    )



module.exports = router;
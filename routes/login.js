const { login } = require('../controllers/login');
const { validateLogin } = require('../validations/login');

const router = require('express').Router();


router
    .route('/login')
        .post(
            validateLogin,
            login
        )



module.exports = router;
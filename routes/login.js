const { login } = require('../controllers/login');
const { validateRequest } = require('../middlewares/validations');
const { validateLogin } = require('../validations/login');

const router = require('express').Router();


router
    .route('/login')
        .post(
            validateLogin,
            validateRequest,
            login
        )



module.exports = router;
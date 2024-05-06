const router = require('express').Router();


const { register } = require('../controllers/register');
const { validateRegister } = require('../validations/register');


router
    .post(
        '/register',
        validateRegister,
        register
    );


module.exports = router;
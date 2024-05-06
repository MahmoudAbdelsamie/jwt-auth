const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

require('dotenv').config();

const pool = require("../config/database");


exports.login = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    const query = 'SELECT * FROM users WHERE email=$1;';
    try {
        const users = await pool.query(query, [email]);
        if(users.rowCount < 1) {
            return res.status(404).send({
                status: 'fail',
                message: 'No User Found'
            })
        }
        const user = users.rows[0];
        const hashedPassword = user.password;
        const isPasswordMatch = bcrypt.compare(password, hashedPassword);
        if(!isPasswordMatch) {
            return res.status(401).send({
                status: 'fail',
                message: 'Invalid Email Or Password'
            })
        }
        const payload = { id: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        return res.status(200).send({
            status: 'success',
            message: 'Login Successfull',
            token: token
        })
    } catch(err) {
        return res.status(500).send({
            status: 'error',
            message: 'Internal Server Error',
            error: err.message
        })
    }
}
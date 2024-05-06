const bcrypt = require('bcrypt');
require('dotenv').config();


exports.isAuthunticated = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({
            status: 'fail', 
            message: 'Unauthorized'
        });
    }
    next();
};

exports.isAuthorized = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).send({
            status: 'fail',
            message: 'Unauthorized'
        });
    }
    const token = authHeader.split(' ')[1];
    bcrypt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                status: 'fail', 
                message: 'Unauthorized',
                error: err
            });
        }
        req.user = decoded;
        next();
    })
}
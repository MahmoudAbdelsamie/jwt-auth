
exports.getUser = (req, res, next) => {
    res.status(200).send({
        status: 'success',
        data: req.user
    })   
}
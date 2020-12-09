const jwt=require('jsonwebtoken');
const ErrorResponse = require('./errorResponse');
const Admin = require("../models/Admin");

module.exports = async (req, res, next) => {
    console.log(req.headers)
    let token = null;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        // console.log(token)
    }

    if (! token) {
        return next(new ErrorResponse('Not authorized to access this route because token is undefined', 401));
    }

    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = await Admin.findById(decoded.id).select('-password');

        // console.log('calllling' , req.user);
        if (! req.user) {
            return next(new ErrorResponse('Invalid token passed', 401));
        }
        // console.log('protect me ' , req);

        next();
    } catch (err) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }
};
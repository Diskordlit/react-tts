const constants = require('../utils/constant')

function errorHandler(err, req, res, next) {
    if (process.env.NODE_ENV === 'development') console.log(err.stack.red)

    return process.env.NODE_ENV === 'development' ? res.status(err.statusCode || err.status || constants.statusCodes.SERVERERROR).json({
        ...err,
        message: err.message
    }) : res.status(err.statusCode || err.status || constants.statusCodes.SERVERERROR).send()
}

module.exports = errorHandler
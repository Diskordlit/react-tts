const constants = require('./constant')

function errorResponse(err, status, code, message, metadata) {
    return err ? err : () => {
        if (process.env.NODE_ENV === 'development') {
            const error = new Error()
            error.status = status || constants.statusCodes.SERVERERROR,
                error.code = code || constants.errorCodes.E9999,
                error.message = message || 'This error was not documented and cannot be traced'
            error.metadata = metadata
            return error
        } else {
            const error = new Error()
            error.status = status || constants.statusCodes.SERVERERROR
            return error
        }
    }
}

module.exports = errorResponse
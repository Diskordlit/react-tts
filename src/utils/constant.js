function defineConstant(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        configurable: false,
        writable: false
    })
}

// Defining constant globals

// Status codes
defineConstant('statusCodes', {
    OK: 200,
    CREATED: 201,
    NOCONTENT: 204,
    NOTMODIFIED: 304,
    BADREQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOTFOUND: 404,
    CONFLICT: 409,
    SERVERERROR: 500,
    NOTIMPLEMENTED: 501,
    BADGATEWAY: 502,
    SERVICEUNAVAILABLE: 503
})

// Error codes
defineConstant('errorCodes', {
    E9999: 'UNDEFINED_ERROR'
})

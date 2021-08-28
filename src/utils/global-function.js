exports.loadBackendComponent = () => {
    // TODO
    // Add mongodb initializer function
    // Add route files imports
    // Add morgan when in development
    // Add route mounts
    const morgan = require('morgan')
    const express = require('express')
    const errorHandler = require('../middleware/errorHandler')
    const colors = require('colors')
    const app = express()

    const test = require('../routers/test')

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'))
      }

    app.use('/test/', test)

    app.use(errorHandler)

    const port = process.env.PORT || 3000

    const server = app.listen(port, () => {
        console.log(`React TTS Node Express Server is running in ${process.env.NODE_ENV} mode and is listening on port ${port}`.blue.bgWhite)
    })

    process.on('unhandledRejection', (err, promise) => {
        console.log(`Encountered Error: ${err.message}`.red)
        server.close(() => process.exit(1))
    })
}
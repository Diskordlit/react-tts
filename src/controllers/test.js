const asyncHandler = require('../middleware/asyncHandler')
const constants = require('../utils/constant')
const errorResponse = require('../utils/error-function')
const luxon = require('../helper/luxon')

exports.getTest = asyncHandler(async (req, res, next) => {
    try {
        const response = {
            resolved: true,
            code: constants.statusCodes.OK,
            codetext: 'RESOLVED_WITH_CODE_200',
            message: 'Resolved and responded',
            timestamp: luxon.getDateTimeUTCISO(),
            data: {
                message: 'Hello from Node Express!'
            }
        }
        res.status(constants.statusCodes.OK).json(response)
    } catch (error) {
        errorResponse(error)
    }
})
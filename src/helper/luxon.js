const {
    DateTime
} = require('luxon')

exports.getDateTimeUTCISO = () => {
    return DateTime.now().toUTC().toISO()
}
exports.success = function (req, res, message, status) {
    let statusCode = status || 200;
    let statusMessage = message || '';
    res.status(status).send({
        error: false,
        status: statusCode,
        body: statusMessage,
    })
}


exports.error = function (req, res, message, status) {
    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server Error';
    res.status(status).send({
        error: true,
        status: statusCode,
        body: statusMessage,
    })
}
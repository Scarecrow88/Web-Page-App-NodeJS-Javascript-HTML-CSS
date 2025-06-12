const response = require ('./response.js');
function errorResponse (err, req, res, next) {
    console.error ('[Error ', err);
    const message = err.message || "Internal error";
    const status = err.status || 500;
    response.error (req, res, message, status);
}
module.exports = errorResponse;
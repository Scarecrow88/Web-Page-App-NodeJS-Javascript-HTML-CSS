exports.success = function (req, res, mess = '', stat = 200) {
    res.status (stat);
    console.log (mess);
}
exports.error = function (req, res, mess = '', stat = 500) {
    res.status (stat);
    console.log (mess);
}
module.exports = function(req, res, next) {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}

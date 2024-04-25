module.exports = (req,res,next) => {
    res.locals.umaVariavelLocal = 'valor variavel local';
    next();
};

module.exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code ==='EBADCSRFTOKEN') {
        return res.render('404')
    }
}

module.exports.csrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.crsfToken();
    next()
}

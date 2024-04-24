module.exports = (req,res,next) => {
    res.locals.umaVariavelLocal = 'valor variavel local';
    next();
}

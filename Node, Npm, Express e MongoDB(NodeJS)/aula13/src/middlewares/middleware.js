module.exports = (req,res,next) => {
    if(req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('Selva', 'NÃO USE SELVA')
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
    }
    next();
}
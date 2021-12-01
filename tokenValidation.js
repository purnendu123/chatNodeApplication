const checkToken = (req, res, next) => {
    if(req.query.token === '52') {
        console.log("go next");
        next()
    } else {
        console.log("nikal", req.query.token);
        res.status(403).send({error: "Token is not valid"})
    }
}

const dataValidation = (req, res, next) => {
    if(req.query.data === '100') {
        console.log("go next");
        next()
    } else {
        console.log("nikal", req.query.data);
        res.status(403).send({error: "data is not valid"})
    }
}

module.exports = {
    checkToken,
    dataValidation
}
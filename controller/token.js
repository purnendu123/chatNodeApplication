const token = (req,res,next) => {
    if(req.headers.token === "1234"){
        console.log('token matched');
        res.status(200).send('token matched') ;
        next() ;
    }
    else {
        console.log('token not matched');
        res.status(403).send('token not matched') ;
    }
}

module.exports = token ;
const {saveToDatabase , findFromDatabase} = require('../Model/test') ;

const login = (req,res) => {
    console.log('login response',req.body);
    saveToDatabase(req.body).then(result => {
        console.log('database success = ',result);
        res.status(200).send({data: result, success: true})

    }).catch((err) => {
        console.log('database error = ',err);
        res.status(400).send({error: err})

    })
}

const getUser = (req,res) => {
    console.log('update response',req.query);
    if(req.query._id){
        console.log('pramas id present');
        const { _id } = req.query
        findFromDatabase(_id).then(result => {
            res.status(200).send('find successfully '+ result);
        }).catch(err => {
            console.log('error occoured in find database');
            res.status(400).send({error : err})
        })
    }else{
        console.log('request body not found');
        res.status(400).send('request body not found')
    }
    
}

module.exports = {
    login,
    getUser,
}
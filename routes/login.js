const express = require('express') ;
const {login , getUser} = require('../controller/login');
const loginRouter = express.Router() ;
const token = require('../controller/token')


loginRouter.get('/', (req,res) => {
    
});

loginRouter.post('/post', login) ;

loginRouter.get('/getUser',getUser)

module.exports = {
    loginRouter
}
const express = require('express') ;
const app = express() ;
const admin = express();
const testRouter = require('./routes/test') ;
const loginRouter = require('./routes/login') ;
const dotenv = require('dotenv');
const connectDB = require('./dbConnection.js/mongo');
//app.use(bodyParser.urlencoded());

app.use(express.json());
let data = require('./data.json')
dotenv.config()
// connectDB()

// app.get('/', (req,res)=> {
//     res.send('hello ')
// }) ;


// app.use('/api', testRouter) 

// app.use('/login', loginRouter.loginRouter) ;
app.get('/getJson/:id', (req,res)=>res.send(data[id]))

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=> {
    console.log('node starting at port 3000');
}) ;
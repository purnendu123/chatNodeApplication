const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const { Schema } = mongoose ;

const TestSchema = new Schema ({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}) ;

// const updateSchema = new Schema ({
//     name : {
//         type : String || null
//     },
//     email : {
//         type : String,
//         required : true
//     }
// })

const User = mongoose.model('user', TestSchema);
//const UpadteUser = mongoose.model('user',updateSchema)

const saveToDatabase = (data) => {
    return new Promise((resolve, reject) => {
        try {
        let user = new User(data);
        user.save((err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        });
        } catch (error) {
            reject(error)
        }
    })
    
}

const findFromDatabase = (query) => {
    console.log('database query = ',query);
    return new Promise((resolve,reject) => {
        try{
            User.find({_id: new ObjectId(query)},(err,data) => {
                
                if(err) {
                    console.log('database err =',err);
                    reject(err) ;
                } else {
                    console.log('database success =',data);
                    resolve(data)
                }
            });
            
        } catch(error){
            reject(error)
        }
    })
}

module.exports = {
    saveToDatabase,
    findFromDatabase
}
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongodbtest', {
    useMongoClient: true
})
    .then(() => {
        console.log('Successful connection')
    })
    .catch((err) => {
        console.log('Error at connectiong db; ' + err)
    })
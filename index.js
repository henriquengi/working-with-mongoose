const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongodbtest')
    .then(() => {
        console.log('Successful connection')
    })
    .catch((err) => {
        console.log('Error at connectiong db; ' + err)
    })

//Model - Users
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subname: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    country: {
        type: String
    }
})

mongoose.model('users', UserSchema)

const newUser = mongoose.model('users')

new newUser({
    name: 'Fulano',
    subname: 'Silva',
    mail: 'fulano@mail.com.br',
    age: 25,
    country: 'Brazil'
}).save()
    .then(() => {
        console.log('User created')
    })
    .catch((err) => {
        console.log('An error apears: ' + err)
    })
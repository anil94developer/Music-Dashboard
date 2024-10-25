const mongoose = require('mongoose')
const Schema = mongoose.Schema      
const bcrypt = require('bcrypt')


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true, 
        index: true
    },
    avatar: {
        type: String, 
        required: true,
    },
})


// userSchema.pre('save', async function(next) {
//     const user = this
//     const plainPW = user.password
//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(plainPW, salt)
//     user.password = hash
//     next()
// })

const User = mongoose.model("User", userSchema)

module.exports = User;
var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    age: Number,
    created: { type: Date, default: Date.now }
})

var User = mongoose.model('user', userSchema)

module.exports = User
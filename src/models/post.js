var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var postSchema = new Schema({
    content: String,
    user: {
        type: Schema.ObjectId,
        ref: 'users'
    }
})

mongoose.model('post', postSchema)
var express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose'),
    fs = require('fs')
    routes = require('./routes/index')
    dbUrl = 'mongodb://127.0.0.1:27017/UsersDB'

app.use(bodyparser.json())

var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
}

app.use(allowCrossDomain)
mongoose.connect(dbUrl)

// load all models
fs.readdirSync(__dirname + '/models').forEach(filename => {
    if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
})

app.use('/api', routes)

app.listen(3001, function() {
	console.log('listening on port 3001');
})
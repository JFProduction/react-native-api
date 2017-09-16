var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    user = require('../models/user.js')

router.get('/users', (req, resp, next) => {
    mongoose.model('user').find((err, users) => {
        resp.json({
            data: users
        })
    })
})

router.put('/addUser', (req, resp, next) => {
    if (!req.body) return resp.sendStatus(400)
    console.log(req.body)
    new user(req.body).save((err, doc) => {
        if (err) {
            resp.json({
                status: 500,
                err: err
            })
        }
        resp.json({
            status: 200,
            msg: 'user inserted'
        })
    })
})

module.exports = router
    
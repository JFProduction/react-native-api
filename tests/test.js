var expect = require('chai').expect,
    request = require('request')

describe('go to mongo and get a user', () => {
    it('should get a user from mongo', function(done) {
        request.get({ url: 'http://localhost:3001/users' },
            (err, resp, body) => {
                let usrs = JSON.parse(body)
                expect(usrs.data).to.have.length(1)
                done()
            })
    })
})
//Require the dev-dependencies
const chai = require('chai'),
    supertest = require('supertest'),
    nock = require('nock'),
    server = require('./index'),
    assert = chai.assert;


describe('/GET test', function () {

    var nockEndpoint = nock('http://test.nl')
        .get('/test')
        .reply(200, {
            "hello": "test"
        });


    it('it should GET test message', function (done) {

        supertest(server)
            .get('/test')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                console.log("body",res.body)
                assert.equal(JSON.parse(res.body).hello,"test");
                done();
            });
    });
});

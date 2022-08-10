let chai = require('chai');
let server =require('../src/server');
const chaiHTTP =require('chai-http');
chai.should();
chai.use(chaiHTTP);

describe('Crypto Currency API ',()  => {
    describe("GET /cryptocurrecies",() => {
        it ('it should get all the cryptocurrencies',(done) => {
                chai.request(server)
                .get("/cryptocurrencies")
                .end((err,response) => {
                      response.should.have.status(200);
                      done();
                })
        } )
    });
    describe("GET /cryptocurreciesById",() => {
        it ('it should get crpto currency of the id given',(done) => {
            const bookId=1;
                chai.request(server)
                .get(`/cryptocurrencies/${bookId}`)
                .end((err,response) => {
                      response.should.have.status(200);
                      done();
                })
        } )
    });
   
});
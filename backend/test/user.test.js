let chai = require("chai");
let server = require("../src/server");
const chaiHTTP = require("chai-http");
chai.should();
chai.use(chaiHTTP);
describe("GET /user", () => {
    it("Get user details", (done) => {
      chai
        .request(server)
        .get("/user")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
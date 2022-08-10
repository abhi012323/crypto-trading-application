let chai = require("chai");
let server = require("../src/server");
const chaiHTTP = require("chai-http");
const { response } = require("../src/server");
chai.should();
chai.use(chaiHTTP);

describe("Transactions API ", () => {
  describe("GET /transactions", () => {
    it("Get all transactions", (done) => {
      chai
        .request(server)
        .get("/transactions?userID=1")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
  describe("POST Transaction", () => {
    it("POST Transaction with sample data", (done) => {
      chai
        .request(server)
        .post("/transactions")
        .send({
          userID: 1,
          cryptoAmount: +0.0012245,
          dollarAmount: -1000,
          date: new Date().toString(),
          cryptoID: 1,
          type: "purchase",
        })
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});

describe("POST Transaction", () => {
  it("POST Transaction", (done) => {
    chai
      .request(server)
      .post("/transactions")
      .send({
        userID: 1,
        cryptoAmount: -0.0012245,
        dollarAmount: +1000,
        date: new Date().toString(),
        cryptoID: 17,
        type: "sell",
      })
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it("POST Transaction", (done) => {
    chai
      .request(server)
      .post("/transactions")
      .send({
        userID: 1,
        cryptoAmount: -0.0012245,
        dollarAmount: +1000,
        date: new Date().toString(),
        cryptoID: 1,
        type: "sell",
      })
      .end((err, response) => {
        response.should.have.status(200);
        done();
      });
  });
  it("POST Transaction", (done) => {
    chai
      .request(server)
      .post("/transactions")
      .send({
        userID: 4,
        cryptoAmount: -0.0012245,
        dollarAmount: +1000,
        date: new Date().toString(),
        cryptoID: 1,
        type: "sell",
      })
      .end((err, response) => {
        response.should.have.status(404);
        done();
      });
  });
  describe("404 Error test", () => {
    it("404", (done) => {
      chai
        .request(server)
        .get("/usertransactions")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
});

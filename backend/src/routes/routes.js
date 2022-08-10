const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const transactionController = require("../controllers/transactions");
const cryptocurrencyController = require('../controllers/cryptocurrency');
router.get("/user", userController.getUser);
router.get("/transactions", transactionController.getTransaction);
router.post("/transactions", transactionController.postTransaction);
router.get('/cryptocurrencies',cryptocurrencyController.getCryptocurrency);
router.get('/cryptocurrencies/:id',cryptocurrencyController.getCryptocurrencyById);
router.get("*", (req, res, next) => {
  res.status(404).send("Invalid path");
  console.log(req);
});
module.exports = router;

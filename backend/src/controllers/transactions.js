const RecentTransaction = require("../models/recentTransactions");
const User = require("../models/user");
const CryptoCurrency = require("../models/cryptocurrency");
const sequelize = require("../util/database");
const Sequelize = require("sequelize");
exports.getTransaction = async (req, res, next) => {
  try {
    console.log(req.query);
    const userID = req.query.userID;
    console.log(userID);
    const user = await sequelize.query(
      "select transactions.id,transactions.type,transactions.cryptoAmount, transactions.dollarAmount,transactions.date,cryptocurrencies.name,cryptocurrencies.symbol from transactions INNER JOIN cryptocurrencies on transactions.cryptoID=cryptocurrencies.id where transactions.userID=" +
        userID +
        " order by id desc",
      { type: Sequelize.QueryTypes.SELECT }
    );
    console.log(user);
    if (user.length == 0 || user == null) throw new Error();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(404).send("not valid userID");
  }
};

exports.postTransaction = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.body.userID } });
    if (user == null) throw new Error("Not valid userID");
    user.availableBalance += req.body.dollarAmount;
    const cryptoID = req.body.cryptoID;
    if (cryptoID == (null || undefined)) throw new Error("Not valid cryptoID");
    const cryptoAmount =
      req.body.cryptoAmount > 0
        ? req.body.cryptoAmount
        : -req.body.cryptoAmount;
    const dollarAmount =
      req.body.dollarAmount > 0
        ? req.body.dollarAmount
        : -req.body.dollarAmount;
    await user.save();
    console.log(user);
    let purchasedCrypto = user.purchasedCrypto;
    const transaction = await RecentTransaction.create({
      type: req.body.type,
      cryptoAmount: cryptoAmount,
      dollarAmount: dollarAmount,
      date: req.body.date,
      userID: req.body.userID,
      cryptoID: cryptoID,
    });
    console.log(transaction);
    if (transaction == null) throw new Error("NOt valid details");
    if (purchasedCrypto == null) purchasedCrypto = {};
    console.log(purchasedCrypto);
    if (purchasedCrypto[cryptoID] != undefined) {
      purchasedCrypto[cryptoID]["cryptoAmount"] += cryptoAmount;
      purchasedCrypto[cryptoID]["dollarAmount"] += dollarAmount;

      console.log(purchasedCrypto[cryptoID].cryptoAmount);
    } else if (purchasedCrypto[cryptoID] == undefined) {
      console.log("Else If triggered");
      purchasedCrypto[cryptoID] = {
        cryptoAmount: req.body.cryptoAmount,
        dollarAmount: req.body.dollarAmount,
      };
    }
    console.log(purchasedCrypto);
    await user.update({ purchasedCrypto: purchasedCrypto });
    user.purchasedCrypto = purchasedCrypto;
    user.changed("purchasedCrypto", true);
    await user.save();
    res.send({ "transaction:": transaction, user: user });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};

const User = require('../models/user')

exports.getUser = async (req, res, next) => {
  const user = await User.findOne({ where: { id: 1 } })
  if (user == null) res.status(404).error('No user found for given userID')
  res.send(user)
}

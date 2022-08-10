const cryptocurrency = require('../models/cryptocurrency')

exports.getCryptocurrencyById = (req, res) => {
    const id = req.params.id;
    cryptocurrency.findOne({where : { id : id}})
      .then(data => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).send({
            message: `Cannot find crypto with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving crypto with id=" + id
        });
      });
  };



exports.getCryptocurrency = (req,res,next) => {
    
    cryptocurrency.findAll({}).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send({
            message:"Some error occurred while retrieving cryptocurrency."
            
          });
    });
};
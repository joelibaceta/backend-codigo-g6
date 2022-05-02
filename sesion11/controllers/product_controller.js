const { Product, Category } = require('../models');

class ProductController {

  static create(req, res) {

    let payload = req.body;

    Product.create(payload)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message
        })
      });
  }

  static list(req, res) {

    // console.log(req.userId)

    Product.findAll({
      include: {
        model: Category, as: 'category'
      }
    })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message
        })
      });
  };

  static getById(req, res) {
    let id = req.params.id;

    Product.findByPk(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message
        })
      });
  }

  // Update product
  static update(req, res) {
    // Get product id from params
    let id = req.params.id;
    // Get product data from body
    let payload = req.body;

    // Update product data 
    Product.update(payload, {
        where: {
          id: id
        }
      })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message
        })
      });
  }

  static delete(req, res) {
    let id = req.params.id;

    Product.destroy({
        where: {
          id: id
        }
      })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message
        })
      });
  }

}

module.exports = { ProductController };
const { Op } = require("sequelize");

module.exports = (model) => {

  class ProductController {

    constructor(model) {
      this.model = model;
    }

    create(req, res) {
      if (!req.body.name) {
        res.status(400).send({
          message: "Product's name can not be empty!",
        });
        return;
      }

      this.model
        .create(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);

          res.status(500).send({
            message: "An error occurrend while creating product",
          });
        });
    }

    getAll(req, res) {
      this.model
        .findCountAll()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);

          res.status(500).send({
            message: "An error occurred while fetching all products",
          });
        });
    }

    findByName(req, res) {
      const name = req.body.name;

      this.model
        .findCountAll({
          where: { name: { [Op.like]: `%{name}%` } },
        })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);

          res.status(500).send({
            message: `An error occurred while looking for product named ${name}`,
          });
        });
    }

    update(req, res) {
      const id = req.params.id;

      this.model
        .update(req.body, {
          where: { id: id },
        })
        .then((num) => {
          if (num == 1) {
            res.send({
              message: "Product update successfully.",
            });
          } else {
            res.send({
              message: "You can not update unexisting product",
            });
          }
        })
        .catch((err) => {
          console.log(err);

          res.status(500).send({
            message: `An error occurred while updating product identified by ${id}`,
          });
        });
    }

    delete(req, res) {
      const id = req.params.id;

      this.model
        .destry({
          where: { id: id },
        })
        .then((num) => {
          if (num == 1) {
            res.send({
              message: "Product deleted successfully",
            });
          } else {
            res.send({
              message: "You can not delete an unexisting product.",
            });
          }
        })
        .catch((err) => {
          console.log(err);

          res.status(500).send({
            message: `An error occurred while delting product identified by ${id}`,
          });
        });
    }
  }

  return ProductController(model)
};

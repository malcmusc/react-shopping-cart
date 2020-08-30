const ProductModel = require("../models/Products");

module.exports = {
  create: (req, res) => {
    let product = new ProductModel(req.body);
    product
      .save()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    ProductModel.updateOne({ _id: req.body._id }, req.body)
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  delete: async (req, res) => {
    ProductModel.remove({ _id: req.params.id })
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    ProductModel.find()
      .then((product) => {
        if (!product) res.json({ success: false, result: "No products found" });

        res.json({ sucess: true, result: result });
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
};

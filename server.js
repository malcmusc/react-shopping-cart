const express = require("express");
const mongoose = require("mongoose");
const Products = require("./src/models/Products");
const app = express();

//Database
mongoose
  .connect("mongodb://localhost:27017/react-shopping-cart-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Controllers
const ProductControl = require("/react-shopping-cart/src/controllers/ProductControl");
//Routes

app.get("/api/products", async (req, res) => {
  const products = await Products.find({});
  res.send(products);
});

app.post("/api/products/create", ProductControl.create);
app.post("/api/products/update", ProductControl.update);
app.delete("/api/products/delete/:id", ProductControl.delete);

//Start Server
app.listen(3000, () => console.log("Server started on 3000"));

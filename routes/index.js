module.exports = (app, db) => {
  
  app.get("/", (req, res) => {
    console.log("Hello");
    res.json({ message: "Welcome to this CRUD API ☻" });
  });

  const productRouter = require("./product")(db.Product);
  app.use("/product", productRouter);
};

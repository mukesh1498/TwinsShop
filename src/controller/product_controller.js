const productService = require("../services/product_service");
const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.deleteProduct(productId);
    return res.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId);
    return res
      .status(200)
      .send({ message: "Product update successfully", data: product });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.findProductById(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.getAllProducts(req.query);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const createMultipleProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.createMulipleProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  findProductById,
  updateProduct,
  getAllProducts,
  createMultipleProduct,
};

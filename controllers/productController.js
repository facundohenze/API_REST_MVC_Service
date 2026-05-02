
// controllers/userController.js
const productModel = require('../models/productModel');

const getProducts = (req, res) => {
    const products = productModel.getAllProducts();
    res.json(products);
};

const getProduct = (req, res) => {
    const product = productModel.getProductById(parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'producto no encontrado' });
    }
};

const createProduct = (req, res) => {
    const { name, price, stock } = req.body;
    const newProduct = productModel.addProduct({ name, price, stock });
    res.status(201).json(newProduct);
};

module.exports = { getProducts, getProduct, createProduct };


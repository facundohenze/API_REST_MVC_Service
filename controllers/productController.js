
// controllers/userController.js
const productService = require('../services/productService');

const getProducts = (req, res, next) => {
    try {
        const products = productService.getProducts();
        res.json(products);
    } catch (error) {
        next(error)
    }
};

const getProduct = async (req, res) => {
    try {
        const product = productService.getProductById(parseInt(req.params.id));
        res.json(product);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

};

const createProduct = (req, res) => {

    try {
        const { name, price, stock } = req.body;
        const newProduct = productService.createProduct({ name, price, stock });
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

const stockProduct = (req, res) => {
    try {
        const { stock } = req.body;
        const product = productService.stockProduct(parseInt(req.params.id), stock);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deletedProduct = (req, res) => {
    try {
        const product = productService.deletedProduct(parseInt(req.params.id));
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = { getProducts, getProduct, createProduct, stockProduct, deletedProduct };


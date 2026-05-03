
// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.post('/products', productController.createProduct);
router.patch('/products/:id/stock', productController.stockProduct);
router.delete('/products/:id', productController.deletedProduct);

module.exports = router;


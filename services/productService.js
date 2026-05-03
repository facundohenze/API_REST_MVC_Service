const productModel = require('../models/productModel');

const getProducts = () => {
    return productModel.getAllProducts();
};

const getProductById = (id) => {
    const product = productModel.getProductById(id);

    if (!product) {
        throw Error('El producto no existe');
    }

    return product;
};

const nameExist = (name) => {
    const products = productModel.getAllProducts();
    return products.some(product => product.name.toLowerCase() === name.toLowerCase())
}


const createProduct = ({ name, price, stock }) => {
    if (nameExist(name)) {
        throw new Error('Producto con nombre repetido')
    }
    if (price < 0) {
        throw new Error('El precio debe ser mayor a cero')
    }
    if (stock < 0) {
        throw new Error('El stock no puede ser negativo')
    }
    return productModel.addProduct({ name, price, stock });
}

const stockProduct = (id, stock) => {
    const product = getProductById(id);

    if (stock < 0) {
        throw new Error('El stock no puede ser negativo')
    }

    return productModel.stockProduct(product, stock);
}

const deletedProduct = (id) => {
    const product = productModel.deletedProduct(id);
    if (!product) {
        throw new Error('El producto no existe');
    }
    return product;
}








module.exports = { getProducts, getProductById, createProduct, stockProduct, deletedProduct };
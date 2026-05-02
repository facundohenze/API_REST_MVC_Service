
// models/userModel.js
let products = [
    {
        id: 1,
        name: 'P1',
        price: 25,
        stock: 3
    },
    {
        id: 2,
        name: 'P2',
        price: 30,
        stock: 5
    }
];

const getAllProducts = () => products;

const getProductById = (id) => products.find(product => product.id === id);

const addProduct = ({ name, price, stock }) => {
    const newProduct = { id: products.length + 1, name, price, stock };
    products.push(newProduct);
    return newProduct;
};

module.exports = { getAllProducts, getProductById, addProduct };


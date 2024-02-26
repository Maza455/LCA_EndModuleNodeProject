import express from 'express'
import bodyParser from 'body-parser'
import {productController} from '../models/index.js'

const productRouter = express.Router()

//Fetch products
productRouter.get('/', (req, res) => {
    try {
        productController.fetchProducts(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products.'
        })
    }
});

//Add a product
productRouter.post('/add/', bodyParser.json(), (req, res) => {
    try {
        productController.createProduct(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new product.'
        })
    }
})
// Update a product
productRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        productController.updateProduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update a product.',
        })
    }
});

// Delete a product
productRouter.delete('/delete/:id', (req, res) => {
    try {
        productController.deleteProduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete a product.',
        })
    }
});

export {
    productRouter,
    express
};
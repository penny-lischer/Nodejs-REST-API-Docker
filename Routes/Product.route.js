import express from 'express';
import * as ProductController from '../controllers/product.controller.js';

const productRoutes = express.Router();

//Get a list of all products
productRoutes.get('/', ProductController.getAllProducts);

//Create a new product
productRoutes.post('/', ProductController.createProduct);

//Get a product by id
productRoutes.get('/:id', ProductController.getProductById);

//Update a product by id
productRoutes.patch('/:id', ProductController.updateProduct);

//Delete a product by id
productRoutes.delete('/:id', ProductController.deleteProduct);


export default productRoutes;

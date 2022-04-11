import createError from 'http-errors';
import database from '../config/mysql.config.js';
import Response from '../domain/response.js';
import QUERY from '../query/hierarchy.query.js';


export const getAllProducts = (req, res, next) => {
  try {
    database.query(QUERY.SELECT_PRODUCTS, (error, results) => {
      if(!results) {
        res.send(new Response(200, 200, 'No results for getting all products.'))
      } else {
        res.status(200)
          .send(new Response(200, 200, 'Getting all products.', { products: results}));
      }
    })
  } catch (error) {
    console.log(error.message);
  }
};


export const createProduct = (req, res, next) => {
  try {
    database.query(QUERY.CREATE_PRODUCT, Object.values(req.body), (error, results) => {
      if(!results) {
        res.send(new Response(500, 500, 'Error occurred.'))
      } else {
        const product = {id: results.insertedId, ...req.body, created_at: new Date()};
        res.status(200)
          .send(new Response(200, 200, 'Creating product.', { product}));
      }
    })
  } catch (error) {
    console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
  }
};


export const getProductById = (req, res, next) => {
  try {
    database.query(QUERY.SELECT_PRODUCT, [req.params.id], (error, results) => {
      if(!results[0]) {
        res.send(new Response(400, 400, `Product not found. ${req.params.id}`))
      } else {
        res.status(200)
          .send(new Response(200, 200, 'Getting product.', result[0]));
      }
    })
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const updateProduct = (req, res, next) => {
  try {
    database.query(QUERY.SELECT_PRODUCT, [req.params.id], (error, results) => {
      if(!results[0]) {
        res.send(new Response(500, 500, `Product not found. ${req.params.id}`))
      } else {
        database.query(QUERY.UPDATE_PRODUCT, [...Object.values(req.body), req.params.id], (error, results) => {
          if(!error) {
            res.status(200)
            .send(new Response(200, 200, 'Product updated.', {id: req.params.id, ...req.body}));
          } else {
            res.send(new Response(400, 400, `Product not updated. ${req.params.id}`))
          }
        });
      }
    })
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const deleteProduct = (req, res, next) => {
  try {
    database.query(QUERY.DELETE_PRODUCT, [req.params.id], (error, results) => {
      if(results.affectedRows > 0) {
        res.status(200)
          .send(new Response(200, 200, 'Product deleted.', result[0]));
      } else {
        res.status(400)
          .send(new Response(200, 200, `Product ${req.params.id} not found`, result[0]));
      }
    })
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};


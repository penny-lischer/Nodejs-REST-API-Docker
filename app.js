import express  from 'express';
import ip  from 'ip';
import createError from 'http-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import Response from './domain/response.js';
import productRoutes from './routes/product.route.js'

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());


// Initialize DB
app.use('/products', productRoutes);
app.get('/', (req,res) => res.send(new Response(200, 'OK', 'Product API - All Good')));
app.get('*', (req,res) => res.send(new Response(500, 'BAD REQUEST', 'ProRoute does not exist')));
// console.log(process.env);
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT + '...');
});

//404 handler and pass to error handler
app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});



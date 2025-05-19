import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
 import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

connectDB(); //connect to MangoDB

const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is runnin...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

/*app.get(`/api/products`, (req, res) => {
  res.json(products);
});

app.get(`/api/products/:id`, (req, res) => {
     const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});*/

app.listen(port, () => console.log(`server running on port ${port}`));
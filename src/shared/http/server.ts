import 'dotenv'
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import appRoutes from './routes';
import globalErrorMiddleware from '@middlewares/globalError';
import AppDataSource from '@shared/typeorm/data-source';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(appRoutes);
app.use(globalErrorMiddleware);

AppDataSource.initialize()
  .then(() => {
    console.log('Database initialization complete');
    app.listen(PORT, () => console.log('Server listening on port ', PORT));
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });

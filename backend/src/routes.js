import { Router } from 'express';

import movementProduct from './app/controllers/movementProduct';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.post('/products/:id/movements', movementProduct.amount);

export default routes;

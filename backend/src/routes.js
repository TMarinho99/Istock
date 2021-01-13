import { Router } from 'express';

import ProductController from './app/controllers/ProductController';
import ReportController from './app/controllers/ReportController';
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

routes.post('/reports', ReportController.store);
routes.get('/reports', ReportController.index);

export default routes;

import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import multer from 'multer';
import multerconfig from './config/multer'

const routes = new Router();

const uploads = multer(multerconfig)

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.post('/products', uploads.single('file'), ProductController.store)

export default routes;


import { Router } from "express";
import { v4 } from 'uuid'
import User from './app/controllers/models/User'

const routes = new Router();

routes.get('/', async (request, response) => {

  const user = await User.create({
    id: v4(),
    name: 'Denilso',
    email: 'denilso.7723@gmail.com',
    password_hash: '123456',
  })
  return response.json(user);
  
});
export default routes;

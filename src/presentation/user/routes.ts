import { Router } from 'express';
import { UsersDataSourceImpl, UsersRepositoryImpl } from '../../infrastructure';
import { UsersController } from './controller';

export class UsersRoutes {
  static get getRoutes(): Router {
    const router = Router();

    const dataSource = new UsersDataSourceImpl();
    const userRepository = new UsersRepositoryImpl(dataSource);

    const controller = new UsersController(userRepository);

    // routes
    router.post('/create/customer', controller.createUser);
    router.put('/update/:id', controller.updateUser);
    router.get('/get/:id', controller.getUser);
    router.get('/get-all', controller.getAllUsers);
    router.delete('/delete/:id', controller.deleteUser);

    return router;
  }
}

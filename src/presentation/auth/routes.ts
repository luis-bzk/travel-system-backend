import { Router } from 'express';
import { AuthController } from './controller';
import { AuthDataSourceImpl, AuthRepositoryImpl } from '../../infrastructure';

export class AuthRoutes {
  static get getRoutes(): Router {
    const router = Router();

    const dataSource = new AuthDataSourceImpl();
    const authRepository = new AuthRepositoryImpl(dataSource);
    const controller = new AuthController(authRepository);

    // routes
    router.post('/login', controller.loginUser);
    router.post('/register', controller.registerUser);
    router.patch('/request/recover', controller.reqRecover);
    router.patch('/change/password', controller.changePassword);
    router.get('/check/token/:token', controller.checkToken);
    router.patch('/confirm', controller.confirmUser);

    return router;
  }
}

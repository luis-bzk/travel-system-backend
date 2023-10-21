import { Router } from 'express';
import { RoleRepositoryImpl, RolesDataSourceImpl } from '../../infrastructure';
import { RoleController } from './controller';

export class RolesRoutes {
  static get getRoutes(): Router {
    const router = Router();

    const dataSource = new RolesDataSourceImpl();
    const roleRepository = new RoleRepositoryImpl(dataSource);

    const controller = new RoleController(roleRepository);

    // routes
    router.post('/create', controller.createRole);
    router.put('/update/:id', controller.updateRole);
    router.delete('/delete/:id', controller.deleteRole);
    router.get('/get/:id', controller.getRole);
    router.get('/get-all', controller.getAllRoles);

    return router;
  }
}

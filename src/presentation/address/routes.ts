import { Router } from 'express';
import { AddressDataSourceImpl, AddressRepositoryImpl } from '../../infrastructure';
import { AddressController } from './controller';

export class AddressRoutes {
  static get getRoutes(): Router {
    const router = Router();

    const dataSource = new AddressDataSourceImpl();
    const addressRepository = new AddressRepositoryImpl(dataSource);

    const controller = new AddressController(addressRepository);

    // routes
    router.post('/create', controller.createAddress);
    router.put('/update/:id', controller.updateAddress);

    return router;
  }
}
